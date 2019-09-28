const express = require("express");
const router = require("express").Router();
const registerController = require("../../controllers").registerController;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../"

// Matches with "/api/books"
router.route("/").post(registerController.create);

// Matches with "/api/books/:id"
// router.route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);

module.exports = router;
