const path = require("path");
const router = require("express").Router();

//      route dependencies
const changeroute = require("./change");
const feedroute = require("./feed");
const registerroute = require("./register");
const sleeproute = require("./sleep");

const userroute = require("./user");
router.use("/change", changeroute);
router.use("/feed", feedroute);
router.use("/register", registerroute);
router.use("/sleep", sleeproute);
router.use('/user', userroute);
router.use('/dailyLog', dailylogroute);
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));
router.get('/', ensureAuthenticated, (req, res) => 
// res.render('login', {
//     username: req.user
// }));
module.exports = router;
