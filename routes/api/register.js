const router = require("express").Router();
const registerController = require("../../controllers").registerController;
// Matches with "/api/register"
router.route("/")
    .get(registerController.findAll)
    .post(registerController.create);
//===================================================

// Matches with "/api/register/:id"
// router.route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);
module.exports = router;