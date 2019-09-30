const router = require('express').Router();
//===================================================
const change = require('../../controllers/changeController').change;
//===================================================
const feed = require('../../controllers/eatController').feed;
//===================================================

const register = require('../../controllers/registerController').register;
//===================================================
const sleep = require('../../controllers/sleepController').sleep;
//===================================================
//===================================================
//===================================================
//  router CRUD for dailyLog
router.route('/')
    .get(change.findAll)
    .post(change.create);
router.route('/')
    .get(feed.findAll)
    .post(feed.create);
router.route('/')
    .get(sleep.findAll)
    .post(sleep.create);
//===================================================
router.route('/:id')
    .get(change.findById)
    .put(change.update)
    .delete(change.remove);
router.route('/:id')
    .get(feed.findById)
    .put(feed.update)
    .delete(feed.remove);
router.route('/:id')
    .get(register.findById)
    .put(sleep.findById)
    .delete(sleep.remove);
//===================================================
module.exports = router;