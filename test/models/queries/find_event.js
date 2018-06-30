const tape = require('tape');
const findEvent = require('../../../src/models/queries/find_event');


tape('testing the find query', (t) => {
  findEvent((err, res) => {
    t.equal(res[0].title, 'CODING FOR EVERYONE', 'find query returns the proper results from the database');
    t.end();
  });
});
