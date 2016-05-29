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

var WindowsliveStrategy = require('passport-windowslive').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GitHubStrategy = require('passport-github').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;

// Initialize SuperLogin
var superlogin = new SuperLogin(superloginConfig);

[
  ["windowslive", WindowsliveStrategy],
  ["facebook", FacebookStrategy],
  ["github", GitHubStrategy],
  ["google", GoogleStrategy],
  ["linkedin", LinkedinStrategy]
].forEach(item => {
  var providerName = item[0];
  var Strategy = item[1];
  if(superlogin.config.getItem('providers.' + providerName + '.credentials.clientID')) {
    superlogin.registerOAuth2(providerName, Strategy);
  }
})

// // Force HTTPS redirect unless we are using localhost
// app.use(function httpsRedirect(req, res, next) {
//   if(req.protocol === 'https' ||
//      req.header('X-Forwarded-Proto') === 'https' ||
//      req.hostname === 'localhost') {
//     return next();
//   }
//   res.status(301).redirect("https://" + req.headers['host'] + req.url);
// });

// Mount SuperLogin's routes to our app
app.use('/auth', superlogin.router);

app.use(express.static('client'));

http.createServer(app).listen(app.get('port'));
