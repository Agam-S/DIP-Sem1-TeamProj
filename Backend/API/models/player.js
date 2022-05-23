const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    RK: Number,
    PLAYER_NAME: String, 
    POS: String,
    GP: Number,
    PTS: Number,
    PER: Number,
});

module.exports = mongoose.model('players', playerSchema);
