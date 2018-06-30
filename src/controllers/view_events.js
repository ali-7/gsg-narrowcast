const findEvent = require('../models/queries/find_event');

exports.get = (req, res, next) => {
  findEvent((err, result) => {
    if (err) return next(err);
    return res.render('view_events', { result });
  });
};
