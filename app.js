"use strict";

const express = require("express");
const app = express();

// Use the built-in express middleware for serving static files from './public'
app.use("/", express.static("dist/steakhouse"));

app.get("*", (req, res, next) => {
  const indexFile = path.resolve(__dirname + "/dist/steakhouse/index.html");
  res.sendFile(indexFile);
});
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
