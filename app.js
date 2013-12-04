/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var path = require('path');
var logger = require('./logger');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());

// enable web server logging; pipe those log messages through winston logger
var loggerStream = {
    write: function(message, encoding){
        logger.debug(message);
    }
};
app.use(express.logger({stream:loggerStream}));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

module.exports = app;