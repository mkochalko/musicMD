const Validator = require('validator');
const validText = require('./valid-text');

const express = require("express");
const router = express.Router();


module.exports = function validateSongData(data) {
    let errors = {};

    data.artist = validText(data.artist) ? data.artist : '';
    data.songName = validText(data.songName) ? data.songName : '';
    if (Validator.isEmpty(data.artist)) {
        errors.artist = 'No Artist Found';
    }
    if (Validator.isEmpty(data.songName)) {
        errors.songName = 'No Song Name Found';
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };

};