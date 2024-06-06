// Credit to ChatGPT for assistance and code comments.
'use strict';
const express = require("express");
const router = express.Router();

// Import user routes
const usersRouter = require("./users");

// Main routes
router.get("/", (req, res) => {
  res.send("Hello from the main router!");
});

router.get("/about", (req, res) => {
  res.send("About Us");
});

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});

// Use user routes
router.use("/users", usersRouter);

module.exports = router;
