const Events = require('../schemas/event_schema');

const updateEvent = (req, callback) => {
  Events.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      hall: req.body.hall,
      speaker: req.body.speaker,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      description: req.body.description,
    },
  },
  { new: true },
  (error, result) => {
    if (error) return callback(error);
  })
    .then(res => callback(null, res))
    .catch(err => callback(err));
};

module.exports = updateEvent;
