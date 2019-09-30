const router = require("express").Router();
const registerController = require("../../controllers").registerController;
// Matches with "/api/register"
router.route("/")
    .get(registerController.findAll)
    .post(registerController.create);
//===================================================

// Matches with "/api/register/:id"
// router.route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);
module.exports = router;
//===================================================
// zd passport authenticator FN (start)
//===================================================
// require passport
const passport = require('../../config/passport');
var db = require('../../models');
//===================================================
module.exports = function(app){
// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
app.post('/api/users'), passport.authenticate('local'), function(req, res){
    res.json(req.user);
    };
app.post('/api/register', function(req, res){ 
    db.User
    .create({
        user: req.body.user,
        password: req.body.password
    }).then(function(){
        res.redirect(307, 'api/users');
    }).catch(function(err){
        res.status(401).json(err);
    });
});
//===================================================
// route for logging user out
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});
//===================================================
// route for getting some data about user, so can be used on client
app.get('/api/user_data', function(req, res){
    if(!req.user){
//if user is not logged in, send back empty object
        res.json({});
    } else {
        res.json({
            user: req.user.user,
            id: req.user.id
        });
    }
});
};
//===================================================
// zd FN (end)