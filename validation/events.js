const Validator = require('validator');
const validText = require('./valid-text');

const express = require("express");
const router = express.Router();


module.exports = function validateEventData(data) {
    let errors = {};

    data.venue = validText(data.venue) ? data.venue : '';
    data.artist = validText(data.artist) ? data.artist : '';
    data.address = validText(data.address) ? data.address : '';
    // data.songIds = data.songIds.split(",").map(songId => {return parseInt(songId)})
    if (Validator.isEmpty(data.venue)) {
        errors.venue = 'No Venue Found';
    }
    if (Validator.isEmpty(data.artist)) {
        errors.artist = 'No Artists Found';
    }
    if (Validator.isEmpty(data.address)) {
        errors.address = 'No Address Found';
    }
    // if (data.songIds.length === 0 || data.songIds.includes(NaN) ){
    //     errors.songIds = "Error Loading Songs";
    // } 

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    };
    
};