const tape = require('tape');
const supertest = require('supertest');
const app = require('../../src/app');

tape('testing the home route', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      if (err) return t.end(err);
      t.equal(res.req.res.statusCode, 200, 'request to home route should return a status code of 200');
      return t.end();
    });
});
