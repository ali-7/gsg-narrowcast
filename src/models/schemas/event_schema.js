const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  title: { type: String, required: true },
  hall: { type: String, required: true },
  speaker: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
});

const Events = mongoose.model('events', eventSchema);


module.exports = Events;
