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
    user: 'admin',
    password: 'test-password',
    userDB: 'sl-users',
    couchAuthDB: '_users'
  },
  mailer: {
    fromEmail: 'gmail.user@gmail.com',
    options: {
      service: 'Gmail',
        auth: {
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
      port: 6379,
      host: 'redis',
      // If a UNIX domain socket is specified, port, host and url will be ignored
      //unix_socket: '/tmp/echo.sock',
      options: {},
      password: process.env.REDIS_PASSWORD
    }
  }
};

// Initialize SuperLogin
var superlogin = new SuperLogin(config);

// Mount SuperLogin's routes to our app
app.use('/auth', superlogin.router);

app.use(express.static('client'));

http.createServer(app).listen(app.get('port'));
