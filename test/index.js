/* eslint-disable global-require */
const tape = require('tape');
const connection = require('../src/models/connection');


connection.once('open', () => {
  // dropping the models and making sure the schemas are working
  require('./models/drop_models');

  // closing the connection when test is over
  tape.onFinish(() => {
    connection.close();
  });
});
