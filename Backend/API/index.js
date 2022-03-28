// Packages
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Import Routes
const team = require('./routes/team');

// MongoDB Connection
mongoose.connect("mongodb+srv://admin:admin1234@prac.r7c5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{ useNewUrlParser: true }, () => {
    console.log("Connected to DB")
})

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;

// Routes Redirection

app.use("/team", team);

// Server Start
app.listen(3000, () => {
    console.log("Server Started at port 3000");
})

app.get("/", (req, res) => {
    res.send({ message: "Welcome to the NBA API" });
  });
  