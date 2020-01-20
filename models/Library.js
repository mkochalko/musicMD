const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // },
    eventIds: {
        type: Array
    },
    songIds: {
        type: Array
    }
})


module.exports = Library = mongoose.model('Library', LibrarySchema)