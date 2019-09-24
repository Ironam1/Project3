const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  babyName: { type: String, required: true},
  babyImg: { type: String} 
});

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;
