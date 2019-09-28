const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleepSchema = new Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true, unique: true },
  endTime: { type: String, required: true },
  details: String
});

const Sleep = mongoose.model("sleep", sleepSchema);

module.exports = Sleep;
