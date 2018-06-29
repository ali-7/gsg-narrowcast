const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  title: String,
  hall: String,
  speaker: String,
  startDate: String,
  endDate: String,
  description: String,
});

const Events = mongoose.model('events', eventSchema);


module.exports = Events;
