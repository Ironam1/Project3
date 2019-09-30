const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const path = require('path');
//load input validation 
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
//load User model
const User = require("../../models/register");
const isAuthenticated = require('../../validation/passport');


//@route POST api/users/register
//@route Register user
//@access Public 
router.post("/register",(req,res) => {
//form validation
    const { errors, isValid } = validateRegisterInput(req.body);
//check validation
    if (!isValid){ 
        return res.status(400).json(errors);
    }
    User.findOne({ user: req.body.user }).then(user => {
        if (user) {
            return res.status(400).json({ user: "Email already exists" });
        } else {
            const newUser = newUser({
                user: { type: String, required: true, unique: true },
                password: { type: String, required: true, unique: true },
                babyname: { type: String, required: true },
                babyimg: String
            });
// hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });
        }
    });
});

//@route POST api/users
// login user and return JWT token
//@access Public
router.post("/login", (req, res) => {
//form validation
    const { errors, isValid } = validateLoginInput(req.body);
//check validation
    if (!isValid){
        return res.status(400).json(errors);
    }
    const User = req.body.User;
    const password = req.body.password;
//finds user by email 
    User.findOne({ user }).then(user => {
//checks if user exists
        if (!user){
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
//checks password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch){
        //user matched
        // create JWT Payload
            const payload = {
                id: user.id,
                name: user.name 
            };
        //sign token
            jwt.sign(payload, keys.secretOrKey, {
                expiresIn: 31556926 //1 year in seconds
            },
            (err, token) => {
                res.json({ success: true, token: "Bearer " + token });
            }
        );
            } else { return res
                .status(400)
                .json({passwordincorrect: "Password incorrect" });
            }
        });
    }); 
});
module.exports = User;