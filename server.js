process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./app/config/config');
var mongoose = require('./app/config/mongoose');
var express = require('./app/config/express');
var passport = require('./app/config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(config.port);

module.exports = app;
console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);