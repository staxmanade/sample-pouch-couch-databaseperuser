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

var superloginConfig = require('./superlogin.config');

// Initialize SuperLogin
var superlogin = new SuperLogin(superloginConfig);

// Mount SuperLogin's routes to our app
app.use('/auth', superlogin.router);

app.use(express.static('client'));

http.createServer(app).listen(app.get('port'));
