const Validator = require("validator");
const isEmpty = require("is-empty");

// validation for our login js

module.exports = function validateLoginInput(data){
    let errors = {};
// converts empty fields to an empty string, so we can use validator fn's
    data.user = !isEmpty(data.user) ? data.user : "";
    data.password = !isEmpty(data.password) ? data.password : "";
// email checks
    if (Validator.isEmpty(data.user)){
        errors.user = "Email field is required";
    }
    else if (!Validator.isEmail(data.email)){
        errors.user = "Email is invalid";
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
//==================================================================
// middlware for restricting routes users can visit, if a user is not logged
module.exports = function(req, res, next){
    if (req.user){
//allows user to access route if logged in
        return next();
    }
//redirects user to login page, to login
    return res.redirect('/');
};
  