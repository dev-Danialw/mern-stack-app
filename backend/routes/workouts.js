const express = require("express");
const router = express.Router();

// Get All Workouts
router.get("/", (req, res) => {
  res.json({ message: "Hello from the All workout route!" });
});

// Get Single Workout
router.get("/:id", (req, res) => {
  res.json({ message: "Hello from the single workout route!" });
});

// Post Workout
router.post("/", (req, res) => {
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
