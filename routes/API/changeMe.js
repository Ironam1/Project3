const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/changeMe"
router.route("/changeMe")
    .post(controller.create);

// Matches with "/api/changeMe/:id"
router
  .route("/:id")
  // .put(controller.update)
  // .delete(controller.remove);

module.exports = router;