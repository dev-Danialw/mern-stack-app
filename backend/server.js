require("dotenv").config();
const express = require("express");

// Create express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen on port 3000
app.listen(process.env.PORT, () => {
  console.log("Server running!");
});
