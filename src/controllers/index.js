const router = require('express').Router();
const home = require('./home');
const viewEvents = require('./view_events');
const deleteEvent = require('./delete_event');

router.get('/delete-event/:id', deleteEvent.get);
router.get('/view-events', viewEvents.get);
router.get('/', home.get);

module.exports = router;
