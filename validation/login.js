const Validator = require("validator");
const isEmpty = require("is-empty");

// validation for our login js

module.exports = function validateLoginInput(data){
    let errors = {};
// converts empty fields to an empty string, so we can use validator fn's
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
// email checks
    if (Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }
    else if (!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
// password checks
    if (Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };

  };