const tape = require('tape');
const createEvent = require('../../../src/models/queries/create_event');

tape('adding a new event to the database', (t) => {
  const req = {
    body: {
      title: 'First',
      hall: 'HALL 1',
      speaker: 'FACG4',
      startDate: new Date(Date.now() + 40000),
      endDate: new Date(Date.now() + 40000),
      description: 'DESCRIPTION STRING',
    },
  };
  createEvent(req, (err, res) => {
    t.equal(res.title, 'First', 'database should have a coding for everyone event');
    return t.end();
  });
});

tape('adding a new event to the database', (t) => {
  const req = {
    body: {
      title: 'CODING FOR EVERYONE',
      hall: 'HALL 1',
      speaker: 'FACG4',
      startDate: new Date(Date.now() + 40000),
      endDate: new Date(Date.now() + 40000),
      description: 'DESCRIPTION STRING',
    },
  };
  createEvent(req, (err, res) => {
    t.equal(res.title, 'CODING FOR EVERYONE', 'database should have a coding for everyone event');
    return t.end();
  });
});

tape('adding a new event to the database', (t) => {
  const req = {
    body: {
      title: 'Second',
      hall: 'HALL 1',
      speaker: 'FACG4',
      startDate: new Date(Date.now() + 100000),
      endDate: new Date(Date.now() + 100000),
      description: 'DESCRIPTION STRING',
    },
  };
  createEvent(req, (err, res) => {
    t.equal(res.title, 'Second', 'database should have a coding for everyone event');
    return t.end();
  });
});

tape('adding a new event to the database', (t) => {
  const req = {
    body: {
      title: 'Third',
      hall: 'HALL 1',
      speaker: 'FACG4',
      startDate: new Date(Date.now() + 120000),
      endDate: new Date(Date.now() + 120000),
      description: 'DESCRIPTION STRING',
    },
  };
  createEvent(req, (err, res) => {
    t.equal(res.title, 'Third', 'database should have a coding for everyone event');
    return t.end();
  });
});

tape('adding a new event to the database', (t) => {
  const req = {
    body: {
      title: 'Fourth',
      hall: 'HALL 1',
      speaker: 'FACG4',
      startDate: new Date(Date.now() + 140000),
      endDate: new Date(Date.now() + 140000),
      description: 'DESCRIPTION STRING',
    },
  };
  createEvent(req, (err, res) => {
    t.equal(res.title, 'Fourth', 'database should have a coding for everyone event');
    return t.end();
  });
});

tape('adding a new event to the database', (t) => {
  const req = {
    body: {
      title: 'Geexelerator',
      hall: 'HALL 1',
      speaker: 'FACG4',
      startDate: new Date(Date.now() + ((30099900 * 2) * 30)),
      endDate: new Date(Date.now() + ((30099900 * 2) * 30)),
      description: 'DESCRIPTION STRING',
    },
  };
  createEvent(req, (err, res) => {
    t.equal(res.title, 'Geexelerator', 'database should have a coding for everyone event');
    return t.end();
  });
});

tape('adding a new event to the database', (t) => {
  const req = {
    body: {
      title: 'CODING FOR EVERYONE',
      hall: 'HALL 1',
      speaker: 'FACG4',
      startDate: new Date(Date.now() + ((30999000 * 2) * 30)),
      endDate: new Date(Date.now() + ((30999000 * 2) * 30)),
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
      startDate: new Date(Date.now() + ((300999900 * 2) * 30)),
      endDate: new Date(Date.now() + ((30099900 * 2) * 30)),
      description: 'DESCRIPTION STRING',
    },
  };
  createEvent(req, (err) => {
    t.equal(err.message, 'events validation failed: title: Path `title` is required.', 'query should return a validation error message');
    if (err) t.end();
    else t.end('test should fail because there is an error and it didn\'t catch it properly');
  });
});
