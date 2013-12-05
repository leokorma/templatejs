var winston = require('winston');
	
module.exports = function() {	
	// Removing default Console config
	winston.remove(winston.transports.Console);
	// Adding my log config
	winston.add(winston.transports.Console, { level: 'debug' });
	winston.add(winston.transports.File, { name:'file#debug', filename: 'debug.log', level: 'debug' });
	winston.add(winston.transports.File, { name:'file#info', filename: 'info.log', level: 'info' });
}
