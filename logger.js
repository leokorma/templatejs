var winston = require('winston');

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({ level: 'debug' }),
		new (winston.transports.File)({ name:'file#debug', filename: 'debug.log', level: 'debug' }),
		new (winston.transports.File)({ name:'file#info', filename: 'info.log', level: 'info' })
	]
});

module.exports = logger;