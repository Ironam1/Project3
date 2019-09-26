const router = require("express").Router();
const controller = require("../../controllers/registerController");

// Matches with "/api/register"
router.route("/")
    // .post(controller.create);
    // .put(controller.update)

// Matches with "/api/register/:id"
router
  .route("/:id")
  // .put(controller.update)
  // .delete(controller.remove);

module.exports = router;