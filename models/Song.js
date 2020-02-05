const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const SongSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    songName: {
        type: String,
        required: true
    },
    songId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})


module.exports = Song = mongoose.model('Song', SongSchema);