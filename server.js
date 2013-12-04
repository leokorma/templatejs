/**
 * Server Module
 */

var http = require('http'),
	app = require('./app'),
	logger = require('./logger');
	
http.createServer(app).listen(app.get('port'), function(){	
	logger.info('Express server listening on port ' + app.get('port'));
});