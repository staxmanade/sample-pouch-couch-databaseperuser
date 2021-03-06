import PouchDB from "pouchdb";
import config from './config.js';
import { EventEmitter } from 'events';

import superlogin from 'superlogin-client';

var superConfig = {
  // The base URL for the SuperLogin routes with leading and trailing slashes (defaults to '/auth/')
  baseUrl: '/auth/',
  // A list of API endpoints to automatically add the Authorization header to
  // By default the host the browser is pointed to will be added automatically
  endpoints: ['couchdb:5984'],
  // Set this to true if you do not want the URL bar host automatically added to the list
  noDefaultEndpoint: false,
  // Where to save your session token: localStorage ('local') or sessionStorage ('session'), default: 'local'
  storage: 'local',
  // The authentication providers that are supported by your SuperLogin host
  providers: ['facebook', 'twitter'],
  // Sets when to check if the session is expired. 'stateChange', 'startup' or nothing.
  // 'stateChange' checks every time $stateChangeStart or $routeChangeStart is fired
  // 'startup' checks just on app startup. If this is blank it will never check.
  checkExpired: 'stateChange',
  // A float that determines the percentage of a session duration, after which SuperLogin will automatically refresh the
  // token. For example if a token was issued at 1pm and expires at 2pm, and the threshold is 0.5, the token will
  // automatically refresh after 1:30pm. When authenticated, the token expiration is automatically checked on every
  // request. You can do this manually by calling superlogin.checkRefresh(). Default: 0.5
  refreshThreshold: 0.5
};

superlogin.configure(superConfig);

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

        superlogin.on('login', (event, session) => {
            console.log("on login", event, session);
         });
    }

    toHex(str) {
        str = str || '';
        var result = '';
        for (var i = 0; i < str.length; i++) {
            result += str.charCodeAt(i).toString(16);
        }
        return result;
    }

    setupDbSync(user) {
        if (!this.remoteDb && user) {
            this.remoteDb = new PouchDB(user.userDBs.supertest, { skipSetup: true });
            this.localDb = new PouchDB(`local_db_${user.user_id}`);
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
            superlogin.register({
              username,
              email,
              password,
              confirmPassword: password
            }).then(res => {
                console.log("registerNewUser: ", res);
                return this.login(username, password).then(resolve);
            }).catch(err => {
                console.error("registerNewUser error: ", err);
                if(err && err.validationErrors) {
                    var errors = Object.keys(err.validationErrors).map(key => {
                        return err.validationErrors[key];
                    }).join(', ');
                    return reject(errors);
                }
                reject("Registration Error:" + err.toString());
            });
        });
    }

    login(username, password, callback) {
        return superlogin.login({
            username: username,
            password: password
        }).then(user => {
            console.log('login: user', user);
            // pre-populate the currentUserPromise with the current user
            this.currentUserPromise = Promise.resolve(user);

            this.setupDbSync(user);
            return user;
        });
    }

    logout() {

        this.remoteSyncHandler && this.remoteSyncHandler.cancel();
        this.remoteDb = null;
        this.localDb = null;
        this.currentUserPromise = null;

        return superlogin.logout().then(() => {
            this.emit('localDbChange');
        });
    }

    getCurrentUser() {
        var session = superlogin.getSession();
        if (session) {
            this.setupDbSync(session);
        }
        console.log('getCurrentUser: session', session);
        return Promise.resolve(session);
    }
}
