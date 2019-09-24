const router = require("express").Router();
// const controller = require("../../controllers/controller");
const controller = require("../../controllers/loginController");

// Matches with "/api/???"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/???/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
