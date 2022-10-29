const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModal");

// Get All Workouts
router.get("/", (req, res) => {
  res.json({ message: "Hello from the All workout route!" });
});

// Get Single Workout
router.get("/:id", (req, res) => {
  res.json({ message: "Hello from the single workout route!" });
});

// Post Workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({
      title,
      reps,
      load,
    });
    res.status(200).json({ workout });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ message: "Hello from the post workout route!" });
});

// Update Workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Hello from the update workout route!" });
});

// Delete Workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Hello from the delete workout route!" });
});

module.exports = router;
