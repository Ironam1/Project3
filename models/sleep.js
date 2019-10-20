const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleepSchema = new Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  starttime: { type: String, required: true },
  endtime: { type: String, required: true },
  details: String
});

const Sleep = mongoose.model("sleep", sleepSchema);

module.exports = Sleep;
