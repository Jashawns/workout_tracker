const express = require("express");
const api = express.Router();
const {
  createWorkout,
  getByIDnUpdate,
  getWorkoutAll,
  updateWDuration,
} = require("../services/service");

// latest workout from all
api.get("/", async (req, res) => {
  const workoutAll = await getWorkoutAll();
  let latestWorkout = workoutAll.reverse().slice(0, 1);
  res.json([latestWorkout[0]]);
});

// create workout
api.post("/", async (req, res) => {
  const display = await createWorkout(req.body);
  res.json(display);
});

// by id and update
api.put("/:id", async (req, res) => {
  await getByIDnUpdate(req.params.id, req.body);
  let display = await updateWDuration(req.params.id);
  res.json(display);
});

// seven lastest workout
api.get("/range", async (req, res) => {
  const workoutAll = await getWorkoutAll();
  let preSevenWorkouts = workoutAll.reverse().slice(0, 7);
  res.json(preSevenWorkouts);
});

module.exports = api;
