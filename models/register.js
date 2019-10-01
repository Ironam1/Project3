const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  //====================================
  // does password2 need to be required??
  // does 'match: this.password' make sense??
  password2: { type: String, required: true, match: this.password },
  babyname: { type: String, required: true },
  babyimg: String,
  change: {},
  sleep: {},
  eat: {}
});

const User = mongoose.model("user", userSchema);

module.exports = User;