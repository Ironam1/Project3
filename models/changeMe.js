const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const changeMeSchema = new Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true, unique: true },
  details: String
});

const Change = mongoose.model("change", changeMeSchema);

module.exports = Change;
