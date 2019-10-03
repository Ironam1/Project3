const router = require("express").Router();
// const registerController = require("../../controllers").registerController;
const passport = require('passport');

// router.route("/").post(registerController.create);
router.post(
    '/login', 
    function (req, res, next){
        console.log('routes/register.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
        (req, res) => {
            console.log('logged in', req.user);
            const userInfo = {
                username: req.user.user
            };
            res.send(userInfo);
        }
)


module.exports = router;
