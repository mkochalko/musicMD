const {validateLibraryData, validateAddSong} = require("../../validation/libraries");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Library = require("../../models/Library");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

router.post("/", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateLibraryData(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const newLibrary = new Library({
            userId: req.body.userId,
            eventIds: req.body.eventIds,
            songIds: req.body.songIds
        });
        newLibrary.save().then(library => res.json(library));
    }
);

router.get("/library", 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        Library
            .find({userId: req.user._id})
            .populate("eventIds")
            .then((library) => res.json(library[0]));
    }
);

router.put("/library/add",
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        let errors = {};
        Library.find({ userId: req.user._id })
            .then(library => {
                if (library[0].songIds.includes(req.query.string)) {
                    errors.songIds = "Song Already Exists In Library"
                    return res.status(400).json(errors);
                }
            })
            .then(() => {
                Library.findOneAndUpdate(
                    { userId: req.user._id },
                    { $push: { songIds: req.query.string } }
                ).then(() => {
                    console.log("aslkdjghalskjdgf")

                    Library
                        .find({ userId: req.user._id })
                        .then((library) => res.json(library))

                })
                    .catch(errors => {
                        console.log(errors)
                    })
            })
            

                
    }
);

router.put("/library/delete",
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Library.findOneAndUpdate(
            { userId: req.user._id },
            { $pull: { songIds: req.query.string } }
        )
            .then(() => {
                Library
                    .find({ userId: req.user._id })
                    .then((library) => res.json(library))

            })
            .catch(errors => {
                console.log(errors)
            })


    }
);




router.get("/test", (req, res) => res.json({ msg: "This is the libraries route" }));

module.exports = router;