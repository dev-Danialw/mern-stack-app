const express = require("express");
const router = express.Router();
const {
  allWorkouts,
  singleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutContoller");

// Get All Workouts
router.get("/", allWorkouts);

// Get Single Workout
router.get("/:id", singleWorkout);

// Post Workout
router.post("/", createWorkout);

// Update Workout
router.patch("/:id", updateWorkout);

// Delete Workout
router.delete("/:id", deleteWorkout);

module.exports = router;
