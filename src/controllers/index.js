const router = require('express').Router();
const home = require('./home');
const viewEvents = require('./view_events');

router.get('/', home.get);
router.get('/view-events', viewEvents.get);

module.exports = router;
