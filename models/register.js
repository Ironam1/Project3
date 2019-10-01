const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  password2: { type: String, required: true },
  babyname: { type: String, required: true },
  babyimg: String,
  change: {},
  sleep: {},
  eat: {}
});

const User = mongoose.model("user", userSchema);

module.exports = User;