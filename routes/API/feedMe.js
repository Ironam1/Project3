// const router = require("express").Router();
// const controller = require("../../controllers/feedmeController");

// // Matches with "/api/feedMe"
// router.route("/")
//     .get(controller.create)
//     .post(controller.create);

// // Matches with "/api/feedMe/:id"
// router
//   .route("/:id")
//   .put(controller.update)
//   .delete(controller.remove);

// module.exports = router;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedMeSchema = new Schema({
  time: { type: String, required: true },
  details: String
});

const Feed = mongoose.model("Feed", feedMeSchema);

module.exports = Feed;