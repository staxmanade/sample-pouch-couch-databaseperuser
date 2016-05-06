import React from 'react';
import ReactDOM from 'react-dom';

import PouchDB from "pouchdb";
import PouchDBAuth from 'pouchdb-authentication';
PouchDB.plugin(PouchDBAuth);

import AuthService from './AuthService.js';
import config from './config.js';

import TestData from './TestData.js';
import RegistrationForm from './RegistrationForm.js';
import LoginForm from './LoginForm.js';
import LoginStatus from './LoginStatus.js';


// if you want a localDb database to sync with...
var localDb;
var fetchAndRenderAllDocs;
var registrationError = null;

function updateApp({localDb, testDocs}) {
    console.log('updateApp:', localDb, testDocs);
    ReactDOM.render(<App testDocs={testDocs} localDb={localDb} />, document.getElementById('app'));
}


// Remote couchdb (for authentication purposes)
var authService = new AuthService();

authService.on('localDbChange', (localDb_) => {
    console.log('localDbChange', localDb_);

    localDb = localDb_;

    if(localDb) {
        fetchAndRenderAllDocs = function () {
            console.log('fetchAndRenderAllDocs');
            localDb.allDocs({include_docs: true}).then(res => {
                var docs = res.rows.map(row => row.doc );
                console.log('fetchAndRenderAllDocs:docs', docs);
                updateApp({
                    localDb,
                    testDocs: docs
                });
            }).catch(console.log.bind(console));
        }

        localDb.changes({live: true, since: 'now'})
            .on('change', fetchAndRenderAllDocs)
            .on('error', console.log.bind(console));

    } else {
        fetchAndRenderAllDocs = () => {
            updateApp({
                localDb,
                testDocs: []
            });
        }
    }

    fetchAndRenderAllDocs();
});

class App extends React.Component {

    constructor(props) {
        super(props);
        this.registerNewUser = this.registerNewUser.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.state = {
            registrationError: null
        }
    }

    registerNewUser(registrationInfo) {
        authService.registerNewUser(registrationInfo).then(success => {
            alert('You have successfully registered!');
        }, error => {
            this.setState({
                registrationError: error
            });
        });
    }

    onLogout() {
        console.log("logout");
        authService.logout().then(() => {
            this.refreshStatus();
        }, () => {
            this.refreshStatus();
        });
    }

    onLogin({username, password}) {
        console.log("login");
        authService.login(username, password).then(response => {
            console.log("App.onLogin (after login)", response);

            this.setState({
                loginError: null
            });
            this.refreshStatus();
        }, err => {
            console.error('onLogin error', err);
            if (err.name === 'unauthorized') {
                // name or password incorrect
                this.setState({
                    loginError: "Name or password incorrect"
                })
            } else {
                // cosmic rays, a meteor, etc.
                this.setState({
                    loginError: `${err.name} --- ${err.message} --- ${err.reason}`
                });
            }
            this.refreshStatus();
        });
    }

    refreshStatus() {
        this.refs.loginStatus.refreshState();
    }

    render() {
        return <div>

            <LoginStatus ref="loginStatus" onLogout={this.onLogout} authService={authService} />
            <br />

            <RegistrationForm onRegister={this.registerNewUser} registrationError={this.state.registrationError}
                name="jj"
                password="jj"
                email="jj@jj.com"
                />
            <br />
            <br />

            <LoginForm onLogin={this.onLogin} loginError={this.state.loginError} />

            <TestData localDb={this.props.localDb} testDocs={this.props.testDocs} />

        </div>
    }
}


updateApp({
    localDb,
    testDocs: []
});