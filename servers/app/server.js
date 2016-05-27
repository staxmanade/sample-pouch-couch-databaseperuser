var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var logger = require('morgan');
var SuperLogin = require('superlogin');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var config = {
  dbServer: {
    protocol: 'http://',
    host: 'couchdb:5984',
    user: process.env.COUCHDB_USER,
    password: process.env.COUCHDB_PASSWORD,
    userDB: 'sl-users',
    couchAuthDB: '_users'
  },
  mailer: {
    fromEmail: process.env.FROM_EMAIL,
    options: {
      service: 'Gmail',
        auth: {
          // TODO:
          user: 'gmail.user@gmail.com',
          pass: 'userpass'
        }
    }
  },
  userDBs: {
    defaultDBs: {
      private: ['supertest']
    }
  },
  session: {
    // 'redis' or 'memory'
    adapter: 'redis',
    redis: {
      // If url is supplied, port and host will be ignored
      url: 'redis://redis:6379',
    }
  }
};

// Initialize SuperLogin
var superlogin = new SuperLogin(config);

// Mount SuperLogin's routes to our app
app.use('/auth', superlogin.router);

app.use(express.static('client'));

http.createServer(app).listen(app.get('port'));
