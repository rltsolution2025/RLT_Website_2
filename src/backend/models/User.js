
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  district: String,
  course: String,
  specialization:String,
  join: Boolean,
});

module.exports = mongoose.model('User', userSchema);
