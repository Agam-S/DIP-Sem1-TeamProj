const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },

    players:[
        {
            type: String,
        }
    ]
});



module.exports = mongoose.model('teams', teamSchema);
