const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const changeMeSchema = new Schema({
  user: {type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true, unique: true },
  details: String
});

const Change = mongoose.model("changeMe", changeMeSchema);

module.exports = Change;
