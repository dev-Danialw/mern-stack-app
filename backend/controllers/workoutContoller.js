const Workout = require("../models/workoutModal");

// Get All Workouts
const allWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json({ workouts });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Single Workout
const singleWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    res.status(200).json({ workout });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Post Workout
const createWorkout = async (req, res) => {
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
};

// Update Workout
const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ workout });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Workout
const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    res.status(200).json({ workout });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  allWorkouts,
  singleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
