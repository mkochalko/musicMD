const express = require("express");
const router = express.Router();
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const bcrypt = require('bcryptjs');
const User = require("../../models/User");
const Library = require("../../models/Library");

const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');



router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
    });
})


router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            errors.username = "User already exists";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                date: new Date()
            });


            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, email: user.email, username: user.username, date: user.date };
                            const newLibrary = new Library({
                                userId: newUser.id,
                                eventIds: [],
                                songIds: []
                            });
                            newLibrary.save()
                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    id: newUser.id,
                                    success: true,
                                    token: "Bearer " + token,
                                    library: newLibrary
                                });
                            });
                        })
                        .catch(err => console.log(err));

                });
            });
        }
    });
});


router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }).then(user => {
        if (!user) {
            errors.email = "This user does not exist";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, email: user.email, username: user.username, date: user.date };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));
module.exports = router;