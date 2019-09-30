const router = require("express").Router();
const eatController = require("../../controllers").eatController;

// Matches with "/api/books"
router
  .route("/")
  .post(eatController.create)
  .get(eatController.findAll);
// Matches with "/api/books/:id"
// router.route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);

module.exports = router;
