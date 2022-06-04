const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },

  players: [
    {
      type: mongoose.Schema.Types.Mixed,
    },
  ],

  user: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },

});

module.exports = mongoose.model("teams", teamSchema);
