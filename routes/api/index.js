const path = require("path");
const router = require("express").Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../../validation/config/auth');
//welcome page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));
//dashboard 
router.get('/dashboard', ensureAuthenticated, (req, res) => 
res.render('dashboard', {
    user: req.user
}));
//===================================================
//      route dependencies
const changeRoute = require("./change");
const feedRoute = require("./feed");
//      ?????
// const loginRoute = require("./users");
//===================================================
// adding dailyLog route
const dailyLogRoute = require('./dailyLog');
//===================================================
const registerRoute = require("./register");
//===================================================
const sleepRoute = require("./sleep");
//===================================================
const user = require("./user");
//===================================================
//===================================================
//     **all corresponding routes**
//===================================================
//===================================================
//      change router
router.use("/change", changeRoute);
//===================================================
//      feed router
router.use("/feed", feedRoute);
//===================================================
    //  login router
router.use("/login", login);
//===================================================
//      register router
router.use("/register", registerRoute);
//===================================================
//      sleep router
router.use("/sleep", sleepRoute);
//===================================================
//      ??????
//      users route
router.use('/user', user);
//===================================================
//      dailyLogRoute
router.use('/dailyLog', dailyLogRoute);
//===================================================
// else if ==> render react html 
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});
//===================================================
module.exports = router;
