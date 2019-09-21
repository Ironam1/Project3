const path = require("path");
const router = require("express").Router();
const changeMe = require("./changeMe");
const feedMe = require("./feedMe");
const Zzz = require("./zzz");

// changeMe routes
router.use("/api/changeme", apiRoutes);
// feedMe routes
// login routes
// zzz routes
router.use("/api", Zzz);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
