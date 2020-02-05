const express = require("express");
const router = express.Router();
const validateEventData = require('../../validation/events');
const bcrypt = require('bcryptjs');
const Event = require("../../models/Event");
const Library = require("../../models/Library");
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
 

router.post("/", passport.authenticate('jwt', { session: false}), (req, res) => {
    
    const {errors, isValid} = validateEventData(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Event.findOne({
        address: req.body.address,
        artist: req.body.artist,
        venue: req.body.venue,
        songIds: req.body.songIds,
        date: req.body.date,
        userId: req.body.userId
     }).then(event => {
        if (!(event)) {
            const newEvent = new Event({
                address: req.body.address,
                artist: req.body.artist,
                venue: req.body.venue,
                songIds: req.body.songIds,
                date: req.body.date,
                userId: req.body.userId
            });
            newEvent.save().then(event => {
                res.json(event)
            });
        }
     });

});

router.get('/get', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Event
            .find({ userId: req.user._id })
            .then((events) => {
                res.json(events)
            });
    }
)

router.get("/test", (req, res) => res.json({ msg: "This is the events route" }));
module.exports = router;