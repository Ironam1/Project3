const path = require("path");
const router = require("express").Router();
const changeMe = require("./changeme");
const feedMe = require("./feedme");
const login = require("./login");
const register = require("./register");
const zzz = require("./zzz");


// changeMe routes
router.use("/changeme", changeMe);
// feedMe routes
router.use("/feedMe", feedMe);
// login routes
router.use("/login", login);
// register routes
router.use("/register", register);
// zzz routes
router.use("/zzz", zzz);


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
