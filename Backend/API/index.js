// Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();
require("dotenv").config();

// Import Routes
const team = require("./routes/team");
const player = require("./routes/player");

// Importing team model
const teamModel = require("./models/team");

// MongoDB Connection
mongoose.connect(link, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// initializer
mongoose.Promise = global.Promise;

// Routes Redirection
app.use("/team", team);
app.use("/players", player);

// Server Start
const server = app.listen(8080, () => {
  const port = server.address().port;
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the NBA API" });
});

app.post("/alg/:_id", async (req, res) => {
  const foundTeam = await teamModel.findById(req.params._id);
  player_names = foundTeam.players.map((player) => {
    return player.PLAYER_NAME;
  });

  const command = spawn("python3", ["./ml.py", player_names.toString()]);
  let result;

  command.stdout.on("data", function (data) {
    result = data.toString();
  });

  command.on("close", function (error) {
    console.log(error);
    res.send({ team:foundTeam, winRateP:result});
  });
});
