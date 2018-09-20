const tape = require('tape');
const updateEvent = require('../../../src/models/queries/update_event');
const findEvent = require('../../../src/models/queries/find_event');

tape('updating an existing event', (t) => {
  findEvent((err, res) => {
    if (err) t.end(err);
    else {
      const req = {
        params: {
          id: res[0].id,
        },
        body: {
          title: 'GEEXELERATOR',
          hall: 'WORKING SPACE',
          speaker: 'RANDOM PERSON',
          startDate: '2018-08-18T16:00:00Z',
          endDate: '2018-08-18T16:00:00Z',
          description: 'NEW DESCRIPTION TEXT',
        },
      };
      updateEvent(req, (error, result) => {
        if (err) t.end(error);
        t.equal(result.title, 'GEEXELERATOR', 'event is successfully updated');
        t.end();
      });
    }
  });
});

tape('updating an existing event with wrong date formula', (t) => {
  findEvent((err, res) => {
    if (err) t.end(err);
    else {
      const req = {
        params: {
          id: res[0].id,
        },
        body: {
          title: 'GEEXELERATOR',
          hall: 'WORKING SPACE',
          speaker: 'RANDOM PERSON',
          startDate: '2018-08-18T16:00:00Z',
          endDate: '2018-08-18T16:00:00Z',
          description: 'NEW DESCRIPTION TEXT',
        },
      };
      updateEvent(req, (error, result) => {
        if (err) t.end(err);
        t.equal(result.title, 'GEEXELERATOR', '2nd event is successfully updated');
        t.end();
        let testPass = 1;
      });
    }
  });
});
