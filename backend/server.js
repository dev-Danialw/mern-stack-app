require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// Create express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONG_URI, { useNewUrlParser: true })
  .then(() => {
    // Starting the server
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & Server is running!");
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB: ", err);
  });
