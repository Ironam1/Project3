const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//load user model
const User = require('../models/user');
module.exports = function(passport){
    passport.use(
        new LocalStrategy ({ usernameField: 'user' }, (user, password, done) =>{
        //match user
            User.findOne({
                user: user 
            }).then(user => {
                if (!user) {
                    return done(null, false, {message: 'That email is not registered' });
                }
        //match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch){
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Password incorrect :-( '});
                    }
                });
            });
        })
    );
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });
};


// const JwtStategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const mongoose = require("mongoose");
// const User = mongoose.model("user");
// const keys = require("./middleware/keys");

// const opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = keys.secretOrKey;

// module.exports = passport => {
//     passport.use(
//         new JwtStategy(opts, (jwt_payload, done) => {
//             User.findById(jwt_payload.id)
//             .then(user => {
//                 if (user){
//                     return done(null, user);
//                 }
//                 return done(null, false);
//             }).catch(err => console.log(err));
//         })
//     );
// };
