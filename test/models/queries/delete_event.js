const tape = require('tape');
const findEvent = require('../../../src/models/queries/find_event');
const deleteEvent = require('../../../src/models/queries/delete_query');

tape('delete an existing event', (t) => {
  findEvent((err, res) => {
    if (err) t.end(err);
    else {
      const req = {
        params: {
          id: res[0].id,
        },
      };
      deleteEvent(req, (error, result) => {
        if (err) t.end(error);
        findEvent((findError, findRes) => {
          t.equal(findRes.length, 5, 'database should have five events instead of five')
          t.end();
        })
      });
    }
  });
});
