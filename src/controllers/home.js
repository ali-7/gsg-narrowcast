const findEvent = require('../models/queries/find_event');


exports.get = (err, res, next) => {
  findEvent((error, response) => {
    if (error) next(err);
    else res.render('home', { result: response, style: 'home' });
  });
};
