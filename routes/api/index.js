const path = require("path");
const router = require("express").Router();
const changeMe = require("./change");
const feedMe = require("./feed");
// const login = require("./login");
const register = require("./register");
const sleep = require("./sleep");
const users = require("./users");

// changeMe routes
router.use("/change", changeMe);
// feedMe routes
router.use("/feedMe", feedMe);
// // login routes
// router.use("/login", login);
// // register routes
router.use("/register", register);
// // zzz routes
router.use("/sleep", sleep);
// users route
router.use("/users"), users;
module.exports = router;
