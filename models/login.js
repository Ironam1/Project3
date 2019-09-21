const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  babyName: { type: String, required: true},
  babyImg: { type: String} 
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
