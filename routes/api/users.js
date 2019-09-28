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
//check validation
    if (!isValid){ 
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = newUser({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
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
route.post("/login", (req, res) => {
//form validation
    const { errors, isValid } = validateLoginInput(req.body);
//check validation
    if (!isValid){
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
//finds user by email 
    User.findOne({ email }).then(user => {
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
module.exports = router;