const express = require("express");
const router = express.Router();
const validateSongData = require('../../validation/songs');
const bcrypt = require('bcryptjs');
const Song = require("../../models/Song");
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');


router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {

    console.log(req.body)
    
    const { errors, isValid } = validateSongData(req.body)

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newSong = new Song({
        artist: req.body.artist,
        songName: req.body.songName
    })

    newSong.save().then(song => res.json(song))
})

router.get("/test", (req, res) => res.json({ msg: "This is the songs route" }));
module.exports = router;