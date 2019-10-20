const router = require("express").Router();
const changeController = require("../../controllers").changeController;

router
  .route("/")
  .post(changeController.create)
  .get(changeController.findAll);

module.exports = router;
