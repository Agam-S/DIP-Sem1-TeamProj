// Packages & config to Router
const router = require("express").Router();
// Importing team model
const team = require("../models/team");
const jwtCheck = require("./verifyToken");
const decodeToken = require("./decodeToken")

// Routes
router.get("/all", async (req, res) => {
  const decodedToken = decodeToken(req.headers.authorization);
  try {
    const foundTeam = await team.find({user: decodedToken});
    res.json(foundTeam);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/create", async (req, res) => {
  const decodedToken = decodeToken(req.headers.authorization);
  try {
    const newTeam = new team({
      teamName: req.body.teamName,
      players: req.body.players,
      user: decodedToken
    });
    const savedTeam = await newTeam.save();
    res.json(savedTeam);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/view/:_id", async (req, res) => {
  try {
    const viewTeam = await team.findById(req.params._id);
    res.json(viewTeam);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/edit/:_id", async (req, res) => {
  const decodedToken = decodeToken(req.headers.authorization);
  try {
    const putTeam = await team.findByIdAndUpdate(req.params._id, {
      teamName: req.body.teamName,
      players: req.body.players,
      user: decodedToken
    });
    res.json(putTeam);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
        const deleteTeam = await team.findByIdAndDelete(req.params._id);
        res.json(deleteTeam);
      } catch (err) {
        res.json({ message: err });
    } 
  });

module.exports = router;
