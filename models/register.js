const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Validator = require("validator");
const isEmpty = require("is-empty");

const userSchema = new Schema({
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  babyname: { type: String, required: true },
  babyimg: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;


module.exports = function validateRegisterInput(data){
  let errors = {};

// converts empty fields to an empty string so we can use validator functions
data.name = !isEmpty(data.name) ? data.name : "";
data.email = !isEmpty(data.email) ? data.email : ""; 
data.password = !isEmpty(data.password) ? data.password : "";
data.password2 = !isEmpty(data.password2) ? data.password2 : "";

// name checks
if (Validator.isEmpty(data.name)){
  errors.name = "Name field is required";
}
// email checks
if (Validator.isEmpty(data.email)){
  errors.email = "Email is invalid";
}
// password checks
if (Validator.isEmpty(data.password)){
  errors.password = "Password field is Required";
}
if (Validator.isEmpty(data.password2)){
  errors.password2 = "Confirm Password field is Required";
}
if (!Validator.isEmpty(data.password, {min: 6, max: 30})){
  errors.password = "Password must be at least 6 characters";
}
if (!Validator.isEmpty(data.password, data.password2)){
  errors.password2 = "Password must match";
} 
return {
  errors,
  isValid: isEmpty(errors)
};


};
