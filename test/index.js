/* eslint-disable global-require */
const tape = require('tape');
const connection = require('../src/models/connection');
const modelsTest = require('./models/drop_models');


connection.once('open', () => {
  Promise.resolve()
    .then(modelsTest) // testing the schemas are working as intended
    .then(require('./models/queries/create_event')) // testing the create event query
    .then(require('./models/queries/find_event'))
    .then(require('./models/queries/update_event'))
    .then(require('./models/queries/delete_event'))
  // closing the connection when test is over
  tape.onFinish(() => {
    connection.close();
  });
});
