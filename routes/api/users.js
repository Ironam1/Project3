const express = require('express');
const router = express.Router();
const brypt = require('bcryptjs');
const passport = require('passport')
// load user model
const User = require('../../models/user');
const { forwardAuthenticated } = require('../../validation/config/auth');
//login page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));
//register page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));
//register 
router.post('/register', (req, res) => {
    const { user, password, password2, babyname, babyimg } = req.body;
    let errors = [];
    if (! user || !password || !password2 || !babyname || !babyimg ) {
        errors.push({ msg: 'Please enter all fields'});
    }
    if (password != password2) {
        errors.push({ msg: 'Passwords do not match, please resubmit'});
    }
    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters long'});
    }
    if (errors.length > 0) {
        res.render('register', {
            errors, 
            user, 
            password, 
            password2, 
            babyname,
            babyimg 
        });
    } else {
        User.findOne({ user: user })
            .then(user => {
                if (user) {
                    errors.push({ msg: 'Email or Username already exists :-('});
                    res.render('register', {
                        errors, 
                        user, 
                        password,
                        password2,
                        babyname,
                        babyimg
                    })
                } else {
                    const newUser = new User({
                        user, 
                        password,
                        babyname,
                        babyimg
                    });
                }
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                        .save()
                        .then(user => {
                            req.flash('succes_msg', 'You are now registered, and can log in :-)');
                            res.redirect('/users/login');
                        }).catch(err => console.log(err));
                    });
                });
            });
        }
    });
//login
router.post('/login', (req,res,next) => {
    passport.authenticate('local'), {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    }(req, res, next);
});
//logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You have successfully logged out');
    res.redirect('/users/login');
});
module.exports = router;