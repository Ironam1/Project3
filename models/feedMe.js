const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedMeSchema = new Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true, unique: true },
  details: String
});

const Feed = mongoose.model("feed", feedMeSchema);

module.exports = Feed;
