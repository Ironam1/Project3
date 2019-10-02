const path = require("path");
const router = require("express").Router();
<<<<<<< HEAD
//===================================================
//      route dependencies
const changeroute = require("./change");
const feedroute = require("./feed");
//      ?????
// const loginRoute = require("./users");
//===================================================
// adding dailyLog route
// const dailylogroute = require('./dailyLog');
//===================================================
const registerroute = require("./register");
//===================================================
const sleeproute = require("./sleep");
//===================================================
const userroute = require("./user");
//===================================================
//===================================================
//     **all corresponding routes**
//===================================================
//===================================================
//      change router
router.use("/change", changeroute);
//===================================================
//      feed router
router.use("/feed", feedroute);
//===================================================
    //  login router
// router.use("/", login);
//===================================================
//      register router
router.use("/register", registerroute);
//===================================================
//      sleep router
router.use("/sleep", sleeproute);
//===================================================
//      ??????
//      users route
router.use('/user', userroute);
//===================================================
//      dailyLogRoute
router.use('/dailyLog', dailylogroute);
//===================================================
// else if ==> render react html 
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, '../../client/build/index.html'));
// });
//===================================================
// const { ensureAuthenticated, forwardAuthenticated } = require('../../validation/config/auth');
//welcome page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));
//dashboard 
router.get('/', ensureAuthenticated, (req, res) => 
res.render('login', {
    username: req.user
}));
=======
const changeMe = require("./change");
const feedMe = require("./feed");
// const login = require("./login");
const register = require("./register");
const sleep = require("./sleep");

// changeMe routes
router.use("/change", changeMe);
// feedMe routes
router.use("/feed", feedMe);
// // login routes
// router.use("/login", login);
// // register routes
router.use("/register", register);
// // zzz routes
router.use("/sleep", sleep);

>>>>>>> a90437bdd8feab36bc265ee64d4d713a4d101a34
module.exports = router;
