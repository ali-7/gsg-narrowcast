/* eslint-disable no-console */

const app = require('./app');
const dbConnection = require('./models/connection');


dbConnection.once('open', () => {
  console.log('connection to database established successfully');
  app.listen(app.get('port'), () => {
    console.log('app is running on port', app.get('port'));
  });
});
