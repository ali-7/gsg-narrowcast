const Events = require('../schemas/event_schema');

const deleteQuery = (req, callback) => {
  Events.findByIdAndRemove(req.params.id, (err, res) => {
    if (err) return callback(err);
    return callback(null, res);
  });
};

module.exports = deleteQuery;
