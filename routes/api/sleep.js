const router = require("express").Router();
const sleepController = require("../../controllers").sleepController;

router
  .route("/")
  .post(sleepController.create)
  .get(sleepController.findAll);

module.exports = router;
