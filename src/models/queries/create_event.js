const Events = require('../schemas/event_schema');


const createEvent = (data, callback) => {
  Events.create({
    title: data.body.title,
    hall: data.body.hall,
    speaker: data.body.speaker,
    startDate: data.body.startDate,
    endDate: data.body.endDate,
    description: data.body.description,
  }).then((res) => {
    if (callback && typeof callback === 'function') return callback(null, res);
  })
    .catch((err) => {
      if (callback && typeof callback === 'function') return callback(err);
    });
};


module.exports = createEvent;
