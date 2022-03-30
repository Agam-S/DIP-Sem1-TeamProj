// Packages & config to Router
const router = require("express").Router();
// Importing team model
const team = require('../models/team');

// Routes
router.get('/all', async (req, res) => {
    try {
        const Foundteam = await team.find({});
        res.json(Foundteam);
    }
    catch (err) {
        res.json({message: err})
    }
});


router.post("/create", async (req, res) => {
    try {
      const newTeam = new team({
        teamName: req.body.teamName
      });
      const savedTeam = await newTeam.save();
      res.json(savedTeam);
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;