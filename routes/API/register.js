const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/register"
router.route("/register")
    .post(controller.create);
    // .put(controller.update)

// Matches with "/api/register/:id"
router
  .route("/:id")
  // .put(controller.update)
  // .delete(controller.remove);

module.exports = router;