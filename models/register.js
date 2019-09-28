const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  babyname: { type: String, required: true },
  babyimg: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;