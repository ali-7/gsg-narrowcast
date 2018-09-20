const tape = require('tape');
const Users = require('../../src/models/schemas/user_schema');
const Events = require('../../src/models/schemas/event_schema');
const Programs = require('../../src/models/schemas/program_schema');


tape('dropping the schemas at the start of the test', (t) => {
  Promise.all([
    Users.remove({}),
    Events.remove({}),
    Programs.remove({}),
  ]).then(() => {
    const wait = async () => {
      await Users.find({}).then((res) => {
        t.equal(res.length, 0, 'Users schema has been dropped');
      });
      await Events.find({}).then((res) => {
        t.equal(res.length, 0, 'Events schema has been dropped');
      });
      await Programs.find({}).then((res) => {
        t.equal(res.length, 0, 'Programs schema has been dropped');
      });
      t.end();
    };
    wait();
  })
    .catch(err => t.end(err));
});
