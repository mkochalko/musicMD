const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const EventSchema = new Schema({
    venue: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    songIds: {
        type: Array,
        required: true
    },
    date: {
        type: String
    }
})


module.exports = Event = mongoose.model('Event', EventSchema);