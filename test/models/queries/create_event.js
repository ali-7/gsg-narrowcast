const tape = require('tape');
const createEvent = require('../../../src/models/queries/create_event');

tape('adding a new event to the database', (t) => {
  const req = {
    body: {
      title: 'CODING FOR EVERYONE',
      hall: 'HALL 1',
      speaker: 'FACG4',
      startDate: '2018-08-18T16:00:00Z',
      endDate: '2018-08-18T16:00:00Z',
      description: 'DESCRIPTION STRING',
    },
  };
  createEvent(req, (err, res) => {
    t.equal(res.title, 'CODING FOR EVERYONE', 'database should have a coding for everyone event');
    return t.end();
  });
});

tape('failing the query to test if it handles the error properly', (t) => {
  const req = {
    body: {
      hall: 'HALL 1',
      speaker: 'FACG4',
      startDate: '2018-08-18T16:00:00Z',
      endDate: '2018-08-18T16:00:00Z',
      description: 'DESCRIPTION STRING',
    },
  };
  createEvent(req, (err) => {
    t.equal(err.message, 'events validation failed: title: Path `title` is required.', 'query should return a validation error message');
    if (err) t.end();
    else t.end('test should fail because there is an error and it didn\'t catch it properly');
  });
});
