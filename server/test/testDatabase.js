var expect = require('chai').expect;
var shelljs = require('shelljs');
var request = require('request');
//request.debug = true;
var serverRootUrl = "http://" + (shelljs.exec('docker-machine ip default')).trim() + ":5984"
var adminPassword = 'test-password';

var testUsername = "this_user"; //is_a_test_user_name____hopefully_unique";
var userUrl = function(name) {
    return serverRootUrl + "/_users/org.couchdb.user:" + name;
}

var adminCookieJar = request.jar();

function toHex(str) {
    str = str || '';
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
    return result;
}

var getUser = function(name) {
    return new Promise(function(resolve, reject){
        request.get({
            uri: userUrl(name),
            json: true,
            jar: adminCookieJar
        }, function(err, response, body) {
            if(err) {
                return reject(err);
            }
            return resolve(body);
        });
    });
}

var deleteUser = function(name) {
    return new Promise(function(resolve, reject){
        getUser(name).then(function(user){
            var rev = user._rev;
            request({
                method: "DELETE",
                uri: userUrl(name) + "?rev=" + rev,
                json: true,
                jar: adminCookieJar
            }, function(err, request, body) {
                if(!body.ok || err) {
                    if (body && body.error === "not_found") {
                        return resolve();
                    }
                    console.error("Error deleting user:", err, body)
                    return reject(err, body);
                }
                return resolve();
            });
        }, reject);
    });
}


var deleteDatabase = function(name) {
    return new Promise(function(resolve, reject){
        request({
            method: "DELETE",
            uri: serverRootUrl + "/" + name,
            json: true,
            jar: adminCookieJar
        }, function (err, response, body) {
            if(!body.ok || err) {
                if (body && body.error === "not_found") {
                    return resolve();
                }
                console.error("Error deleting database: ", err, body)
                return reject(err, body);
            }
            return resolve(body);
        });
    });
}

var createUser = function(name, password) {
    return new Promise(function(resolve, reject){
        request.put({
            uri: userUrl(name),
            json: {
                "_id": "org.couchdb.user:" + name,
                "name": name,
                "roles": [],
                "type": "user",
                "password": password || "testUserPassword"
            }
        }, function (err, response, body) {
            if (err) {
                return reject(err);
            }
            resolve(body);
        });
    })
}

describe("pouch per user database server", function () {

    var adminAuthCookie;

    it("Should have a couch server at: " + serverRootUrl, function (done) {
        request({ uri: serverRootUrl, json: true }, function (err, response, body) {
            if (err) {
                return done(err);
            }
            expect(body).to.be.ok;
            expect(body.couchdb).to.equal("Welcome");
            done();
        });
    });


    it("Can login as admin", function (done) {
        request.post({
            uri: serverRootUrl + "/_session",
            json: true,
            form: {
                name: 'admin',
                password: adminPassword
            }
        }, function (err, response, body) {
            if (err) {
                return done(err);
            }
            expect(body.roles).to.contain("_admin");
            adminAuthCookie = response.headers['set-cookie'][0];

            adminCookieJar.setCookie(request.cookie(adminAuthCookie), serverRootUrl);

            expect(adminAuthCookie).to.be.ok;
            done();
        });
    });

    describe("when creating a new user", function () {
        var user;
        var userDbSecurity;

        var cleanupTestUser = function(){
            return deleteUser(testUsername).then(function() {
                return deleteDatabase("userdb-" + toHex(testUsername))
            });
        }

        before(function() {
            return cleanupTestUser().then(function(){
                return createUser(testUsername);
            }).then(function(user_) {
                user = user_;
            }).then(function() {
                return new Promise(function(resolve) {
                    // adding a delay to avoid intermittent
                    // setup issues with the user db security
                    setTimeout(resolve, 1000);
                })
            }).then(function(){
                return new Promise(function(resolve, reject) {
                    var url = serverRootUrl + "/userdb-" + toHex(testUsername) + "/_security";
                    request({
                        uri: url,
                        json: true,
                        jar: adminCookieJar
                    }, function(err, res, body) {
                        console.log(err, body, res.headers);
                        if(err) {
                            console.error("error getting db security:", err, body);
                            return reject(err);
                        }
                        resolve(body);
                    });
                });
            }).then(function(body) {
                userDbSecurity = body;
            });
        });

        after(function() {
            return cleanupTestUser();
        });

        it("can create the new user", function() {
            expect(user)
                .to.have.property("ok")
                .and.equal(true);
            expect(user)
                .to.have.property("id")
                .and.equal("org.couchdb.user:" + testUsername);
        });

        it("has created a user-specific database", function(done) {
            request.get({
                uri: serverRootUrl + "/userdb-" + toHex(testUsername),
                json: true,
                jar: adminCookieJar
            }, function(err, response, body) {
                if(err) {
                    return done(err);
                }
                expect(body)
                    .to.have.property("db_name")
                    .and.equal("userdb-" + toHex(testUsername));

                done();
            });
        });

        it("new user is a member", function(){
            expect(userDbSecurity)
                .to.have.property('members')
                .and.deep.equal({
                    names: [ testUsername ]
                });
        });

        it("new user is NOT an admin of their database", function(){
            expect(userDbSecurity)
                .to.have.not.property('admins');
        });

    });


    describe("anonymous user", function(){
        it("should not have access to /_all_dbs", function(){
            return new Promise(function(resolve, reject){

                request({
                    uri: serverRootUrl + "/_all_dbs",
                    json: true,
                }, function(err, res, body) {
                    //expect(err).to.not.be.null();
                    expect(body).to.deep.equal(["_replicator", "_users"]);
                })

            })
        });
    });

});