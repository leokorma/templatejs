var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  userId: {
    type: Number
  },
  name: {
    type: String
  },
  id: {
    type: mongoose.Schema.Types.ObjectId
  }
});

module.exports = mongoose.model('User', UserSchema);