const router = require("express").Router();
const sleepController = require("../../controllers").sleepController;

// Matches with "/api/books"
router.route("/")
  .post(sleepController.create)
  .get(sleepController.findAll);

// Matches with "/api/books/:id"
// router.route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);

module.exports = router;
