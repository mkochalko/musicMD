const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    eventIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    songIds: [{
        type: String,
        ref: 'Song'
    }]
})


module.exports = Library = mongoose.model('Library', LibrarySchema)