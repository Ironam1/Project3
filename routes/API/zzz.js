const router = require("express").Router();
const controller = require("../../controllers/zzzcontroller");

// Matches with "/api/zzz"
router.route("/")
    .post(controller.create);

// Matches with "/api/zzz/:id"
router
  .route("/:id")
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;