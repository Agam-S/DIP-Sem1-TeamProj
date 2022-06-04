// Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { spawn } = require("child_process");
const { expressjwt: jwt } = require("express-jwt");
const jwt_decode = require("jwt-decode");

const app = express();
require("dotenv").config();

const jwtCheck = jwt({
  secret: 'K8sV6nDbYiVVFw5if1F4HQ3ZhfLWjoU1',
  audience: 'https://nbaapi.azurewebsites.net',
  issuer: 'https://dev-5dgpjcl0.us.auth0.com/',
  algorithms: ["HS256"],
});


// Import Routes
const team = require("./routes/team");
const player = require("./routes/player");

// Importing team model
const teamModel = require("./models/team");

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://admin:admin1234@prac.r7c5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DB");
  }
);

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

app.get("/1", jwtCheck, (req, res) => {
// save Authorization header
  const token = req.headers.authorization;

  const token1 = token.replace("Bearer ","");

  const sub = jwt_decode(token1).sub;

  res.send({ message: "Welcome to the token API", token1, sub  });

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
    res.send({ team: foundTeam, winRateP: Number(result) });
  });
});

