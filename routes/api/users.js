const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//load input validation 
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
//load User model
const User = require("../../models/user");

//@route POST api/users/register
//@route Register user
//@access Public 
router.post("/register",(req,res) => {
//form validation
    const { errors, isValid } = validateRegisterInput(req.body);
//

}
