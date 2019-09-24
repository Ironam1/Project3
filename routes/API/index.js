const path = require("path");
const router = require("express").Router();
const changeMe = require("./changeme");
const feedMe = require("./feedme");
const login = require("./login");
const register = require("./register");
// const user = require("./user");
const zzz = require("./zzz");


// changeMe routes
router.route("/", changeMe);
// feedMe routes
router.route("/", feedMe);
// login routes
router.route("/", login);
// register routes
router.route("/", register);
// user routes
// router.route("/", user);
// zzz routes
router.route("/", zzz);


// For anything else, render the html page
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;
