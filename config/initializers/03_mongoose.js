var mongoose = require('mongoose');

module.exports = function() {
  switch (this.env) {
    case 'development':
      mongoose.connect('mongodb://localhost/test');
      break;
    case 'production':
      mongoose.connect('mongodb://localhost/test');
      break;
  }
}