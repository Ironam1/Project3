const express = require('express');
const router = express.Router();
const User = require('../../models/user');
//register
router.get('/register', function (req, res){
    res.render('register');
});
//login
router.get('/login', function (req, res){
    res.render('login');
});
     
//register user
router.post('/register', function (req, res){
    let name = req.body.name;
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let password2 = req.body.password2;
    //validation 
    req.checkBody('name', 'Name is required').notEmpty();
        let errors = req.validationErrors();
        if(errors) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    // console.log(name);
});

module.exports = router;