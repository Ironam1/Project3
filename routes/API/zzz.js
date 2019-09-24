const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/zzz"
router.route("/zzz")
    .post(controller.create);

// Matches with "/api/zzz/:id"
router
  .route("/:id")
  // .put(controller.update)
  // .delete(controller.remove);

module.exports = router;