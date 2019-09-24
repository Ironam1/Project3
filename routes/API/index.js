// const path = require("path");
const router = require("express").Router();
const changeMe = require("./changeme");
const feedMe = require("./feedme");
const login = require("./login");
const register = require("./register");
// const user = require("./user");
const zzz = require("./zzz");


// changeMe routes
router.use("/", changeMe);
// feedMe routes
router.use("/", feedMe);
// login routes
router.use("/", login);
// register routes
router.use("/", register);
// user routes
// router.use("/", user);
// zzz routes
router.use("/", zzz);


// For anything else, render the html page
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;
