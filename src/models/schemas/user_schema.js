const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  role: Number,
  username: String,
  email: String,
  password: String,
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;
