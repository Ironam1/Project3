const router = require("express").Router();
const eatController = require("../../controllers").eatController;

router
  .route("/")
  .post(eatController.create)
  .get(eatController.findAll);

module.exports = router;
