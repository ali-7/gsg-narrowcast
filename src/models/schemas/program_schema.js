const mongoose = require('mongoose');

const programSchema = mongoose.Schema({
  title: String,
  endpoint: String,
  description: String,
  image: String,
});

const Programs = mongoose.model('programs', programSchema);

module.exports = Programs;
