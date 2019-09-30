const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  user: { type: String, required: true, unique: true },
  //====================================
  // insert validator??
  password: { type: String, required: true, unique: true },
  babyname: { type: String, required: true },
  babyimg: String,
  change: {},
  sleep: {},
  eat: {}
});

const User = mongoose.model("user", userSchema);

module.exports = User;