// Credit to ChatGPT for assistance and code comments.
'use strict';
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Import routes
const mainRouter = require("./routes");

// Basic route
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// Use routes
app.use("/", mainRouter);

// Listen on ${PORT} (3000)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
