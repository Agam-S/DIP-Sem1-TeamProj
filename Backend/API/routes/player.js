// Packages & config to Router
const router = require("express").Router();
// Importing player model
const player = require('../models/player');

router.get('/', async (req, res) => {
    try {
      const foundPlayer = await player.find({});
      res.json(foundPlayer);
    }
    catch (err) {
      res.json({message: err})
    }
  });

  module.exports = router;
  