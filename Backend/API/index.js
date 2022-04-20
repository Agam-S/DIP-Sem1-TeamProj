// Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config();

// Import Routes
const team = require("./routes/team");
const player = require("./routes/player");

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

mongoose.Promise = global.Promise;

// Routes Redirection

app.use("/team", team);
app.use("/players", player);

// Server Start
const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the NBA API" });
});
