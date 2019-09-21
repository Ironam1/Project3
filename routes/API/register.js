const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/"
router.route("/register")
    .post(controller.create);

// Matches with "/api//:id"
router
  .route("/:id")
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;