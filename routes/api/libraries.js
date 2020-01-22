const express = require("express");
const router = express.Router();
const validateLibraryData = require("../../validation/libraries");
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

router.get("/library", (req, res) => {
    let library = Library.find({userId: req.body.userId});
    res.json({
        library
    });
})

router.get("/test", (req, res) => res.json({ msg: "This is the libraries route" }));

module.exports = router;