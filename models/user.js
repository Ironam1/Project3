const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  babyname: { type: String, required: true },
  date: { type: Date, default: Date.now }
  // babyimg: String,
  // change: {},
  // sleep: {},
  // eat: {}
});

const User = mongoose.model("user", userSchema);

module.exports = User;