const LocalStrategy = require("passport-local").Strategy;


const db = require("../models");

passport.use(
    new LocalStrategy(function(user, password, done) {
        User.findOne(
            {
                username: username
            },
            function(err, user) {
                if (err) {
                    return done(err);
                }

                if(!user) {
                    return done(null, false);
                }

                if (user.password !== password) {
                    return done(null, false);
                }
                return done(null, user);
            }
        );
    })
);
module.exports = {
    
};