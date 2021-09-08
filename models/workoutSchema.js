const mongoose = require("mongoose");
const { Schema } = mongoose;
// setting date 
const WorkoutSchema = new Schema({
  day: {type: Date, default: Date.now},
  exercises: []
});

const WorkoutFinal = mongoose.model("WorkoutFinal", WorkoutSchema);

module.exports = WorkoutFinal;
