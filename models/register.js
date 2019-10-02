const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
<<<<<<< HEAD
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  password2: { type: String, required: true },
=======
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true },
>>>>>>> a90437bdd8feab36bc265ee64d4d713a4d101a34
  babyname: { type: String, required: true },
  babyimg: String,
  change: {},
  sleep: {},
  eat: {}
});

const User = mongoose.model("user", userSchema);

module.exports = User;