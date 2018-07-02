const findEvent = require('../models/queries/find_event');


exports.get = (err, res, next) => {
  findEvent((error, response) => {
    if (error) return next(err);

    const array = [];
    response.forEach(a => array.push((([a.startDate.getTime() - Date.now()]).concat(a))));
    array.sort((a, b) => a[0] - b[0]);
    // const filteredArray = array.filter(a => a[0] > 0);
    const secondArray = [];
    array.forEach(b => secondArray.push(b[1]));
    return res.render('home', { result: secondArray, style: 'home' });
  });
};
