const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },

});



module.exports = mongoose.model('teams', teamSchema);
