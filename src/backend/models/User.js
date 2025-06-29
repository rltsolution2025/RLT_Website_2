
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  district: String,
  course: String,
  immediateJoiner: Boolean
});

module.exports = mongoose.model('User', userSchema);
