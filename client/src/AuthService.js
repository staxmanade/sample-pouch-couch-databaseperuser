import PouchDB from "pouchdb";
import config from './config.js';
import { EventEmitter } from 'events';

// NOTE if you wanted to try to use an anonymous database you could - and then don't
// forget to syncronize the anonymous db to the specifically named user local db
// var allowAnonymousDb = false;
// var anonymousLocalDb = allowAnonymousDb ? new PouchDB('anonymous_local_db') : null;

// This is the primary root of the remote couch db server.
// We need this connection to execute various commands such as login/logout/register/etc...
var rootAuthDatabase = new PouchDB(config.databaseBaseUrl, { skipSetup: true });

export default class AuthService extends EventEmitter {

    constructor() {
        super();

        this.localDb = null;
        this.remoteDb = null;
    }

    toHex(str) {
        str = str || '';
        var result = '';
        for (var i = 0; i < str.length; i++) {
            result += str.charCodeAt(i).toString(16);
        }
        return result;
    }

    setupDbSync(name) {
        if (!this.remoteDb) {
            let hexUsername = this.toHex(name);
            this.remoteDb = new PouchDB(`${config.databaseBaseUrl}/userdb-${hexUsername}`, { skipSetup: true });
            this.localDb = new PouchDB(`local_db_${name}`);
            this.emit('localDbChange', this.localDb);

            // un-tested... just spiked it
            // if (allowAnonymousDb) {
            //     anonymousLocalDb.replicate.to(this.localDb)
            //         .on('complete', function () {
            //             // yay, we're in sync!
            //         }).on('error', function (err) {
            //             // boo, we hit an error!
            //             console.error("Error syncing local anonymous db to local user-specific db");
            //             console.error(err);
            //         });
            // }

            // syncronize the local and remote user databases...
            this.remoteSyncHandler = this.localDb
                .sync(this.remoteDb, {live: true, retry: true})
                .on('error', console.log.bind(console));
        }
    }

    registerNewUser({username, password, email}) {

        return new Promise((resolve, reject) => {
            rootAuthDatabase.signup(username, password, {
                metadata: {
                    email: email
                }
            }, (err, response) => {
                console.log("signup:", err, response);
                if (err) {
                    if (err.name === 'conflict') {
                        // "batman" already exists, choose another username
                        return reject(`${username} already exists. Choose another username.`);
                    } else if (err.name === 'forbidden') {
                        // invalid username
                        return reject(`Invalid username`);
                    } else {
                        // HTTP error, cosmic rays, etc.
                        return reject(`The planets are not aligned, some error has caused a misalignment. Try agian on another night.`);
                    }
                } else {
                    this.login(username, password, (err, response) => {
                        if (err) {
                            if (err.name === 'unauthorized') {
                                // name or password incorrect
                                return reject(`Incorrect name or password`);
                            } else {
                                // HTTP error, cosmic rays, etc.
                                return reject(`The planets are not aligned, some error has caused a misalignment. Try agian on another night.`);
                            }
                        } else {
                            resolve(response);
                        }
                    });
                }
            });
        });
    }

    login(username, password, callback) {
        return new Promise((resolve, reject) => {
            rootAuthDatabase.login(username, password, (err, user) => {
                if (err) {
                    return reject(err);
                }

                // pre-populate the currentUserPromise with the current user
                this.currentUserPromise = Promise.resolve(user);

                console.log('login response', user);

                this.setupDbSync(user.name);

                return resolve(user);
            });
        });
    }

    logout() {
        return new Promise((resolve, reject) => {

            // clear any local handles to databases or user info
            this.remoteSyncHandler && this.remoteSyncHandler.cancel();
            this.remoteDb = null;
            this.localDb = null;
            this.currentUserPromise = null;

            // execute the logout
            rootAuthDatabase.logout((err, response) => {
                console.log("logout", err, response);

                this.emit('localDbChange');

                if (err) {
                    // network error
                    return reject(err);
                }
                return resolve();
            });
        });
    }

    getCurrentUser() {
        return this.currentUserPromise = this.currentUserPromise || new Promise((resolve, reject) => {
            rootAuthDatabase.getSession((err, response) => {
                if (err) {
                    if (err.status === 401) {
                        // not authorized - so not logged in (no user)
                        return resolve( null );
                    } else {
                        // network error
                        return reject(err);
                    }
                }
                var user = response.userCtx;
                if (user.name) {
                    this.setupDbSync(user.name);
                }
                return resolve(user);
            });
        });
    }
}
