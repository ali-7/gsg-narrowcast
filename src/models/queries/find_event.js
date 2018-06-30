const Events = require('../schemas/event_schema');


const findEvent = (callback) => {
  Events.find({})
    .then(res => callback(null, res))
    .catch(err => callback(err));
};

module.exports = findEvent;
