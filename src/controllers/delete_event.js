const deleteEvent = require('../models/queries/delete_query');


exports.get = (req, res, next) => {
  deleteEvent(req, (err, result) => {
    if (err) return next(err);
    if (result === null) {
      next();
    }
  });
};
