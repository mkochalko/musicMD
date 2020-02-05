const Validator = require("validator");
const validText = require("./valid-text");
const express = require("express");
const router = express.Router();
module.exports = function validateLibraryData(data) {
    let errors = {};
    data.eventIds = data.eventIds.split(",").map(songId => { return parseInt(songId) })
    data.songIds = data.songIds.split(",").map(songId => { return parseInt(songId) })
    if (data.eventIds.length === 0 || data.eventIds.includes(NaN)) {
        errors.eventIds = "Error Loading Events";
    }
    if (data.songIds.length === 0 || data.songIds.includes(NaN)) {
        errors.songIds = "Error Loading Songs";
    }
  
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};