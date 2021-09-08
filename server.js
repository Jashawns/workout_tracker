const express = require("express");
const app = express();
const path = require("path");
const api = require("./route/api");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || '8080';

// CSS and HTML Files
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

//API Workouts PUBLIC
app.use("/api/workouts", api);

//homepage PUBLIC
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

//stats-page PUBLIC
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

// exercise-page PUBLIC
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

// mongodb connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/mighty-chamber-17574',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  (e) => {
    e
      ? console.log(`Error connecting /n ${e}`)
      : console.log(`Connected`);
  }
);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});