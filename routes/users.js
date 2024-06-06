// Credit to ChatGPT for assistance and code comments.
'use strict';
const express = require("express");
const router = express.Router();

// User routes
router.get("/", (req, res) => {
  res.send("List of all users");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});

module.exports = router;
