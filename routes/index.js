const path = require("path");
const router = require("express").Router();
const apiroutes = require("./api");
// api Routes
router.use("/api", apiroutes);
//===================================================
//if no routes are hit, or undefined route selected, send the react app
// router.use((req, res) =>
//     res.sendFile(path.join(__dirname, '../client/build/index.html'))
//     );

module.exports = router;
