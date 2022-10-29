require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");

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

// Listen on port 3000
app.listen(process.env.PORT, () => {
  console.log("Server running!");
});
