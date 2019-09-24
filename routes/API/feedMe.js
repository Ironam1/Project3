const router = require("express").Router();
const controller = require("../../controllers/feedmeController");

// Matches with "/api/feedMe"
router.route("/feedme")
    .get(controller.create)
    .post(controller.create);

// Matches with "/api/feedMe/:id"
router
  .route("/:id")
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;