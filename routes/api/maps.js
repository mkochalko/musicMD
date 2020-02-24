const express = require("express");
const router = express.Router();
const axios = require('axios');
const KEYS = require('../../config/keys')


router.get('/location', (req, res) => {
    axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${req.query.string}&inputtype=textquery&fields=geometry&key=${KEYS.MapsKey}`)
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            res.send({ error })
        })


});


module.exports = router;