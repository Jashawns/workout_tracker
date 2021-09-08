const WorkoutFinal = require("../models/workoutSchema");

//creating workout
const createWorkout = async ({}) => {
  try {
    const workout = new WorkoutFinal({});
    await workout.save();
    return workout;
  } catch (error) {
    console.log(error);
  }
};

// exercise added to array
const getByIDnUpdate = async (id, fields) => {
  try {
    return await WorkoutFinal.findByIdAndUpdate(
      id,
      { $push: { exercises: fields } },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};

// duration calculation
const updateWDuration = async (id) => {
  try {
    return await WorkoutFinal.findByIdAndUpdate(
      id,
      [
        {
          $addFields: {
            totalDuration: {
              $sum: ["$exercises.duration"],
            },
          },
        },
      ],
      { new: true, strict: false }
    );
  } catch (error) {
    console.log(error);
  }
};

// DB all workouts 
const getWorkoutAll = async () => await WorkoutFinal.find();

module.exports = {
  createWorkout,
  getByIDnUpdate,
  getWorkoutAll,
  updateWDuration,
};
