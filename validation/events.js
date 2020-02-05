const Validator = require('validator');
const validText = require('./valid-text');

const express = require("express");
const router = express.Router();


module.exports = function validateEventData(data) {
    let errors = {};

    data.venue = validText(data.venue) ? data.venue : '';
    data.artist = validText(data.artist) ? data.artist : '';
    data.address = validText(data.address) ? data.address : '';
    if (Validator.isEmpty(data.venue)) {
        errors.venue = 'No Venue Found';
    }
    if (Validator.isEmpty(data.artist)) {
        errors.artist = 'No Artists Found';
    }
    if (Validator.isEmpty(data.address)) {
        errors.address = 'No Address Found';
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    };
    
};