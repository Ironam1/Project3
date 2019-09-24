const router = require("express").Router();
const controller = require("../../controllers/changemeController");

// Matches with "/api/changeMe"
router.route("/changeme")
    .post(controller.create);

// Matches with "/api/changeMe/:id"
router
  .route("/:id")
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;