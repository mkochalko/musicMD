const express = require("express");
const router = express.Router();
const axios = require('axios');
const KEYS = require('../../config/keys')


router.get('/songkick/click', (req, res) => {
    let today = new Date();
    var d = (today.getDate() < 10 ? "0" : "") + today.getDate();
    var m = (today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1);
    var y = today.getFullYear();
    today = y + "-" + m + "-" + d;

    let later = new Date();
    later.setMonth(later.getMonth() + 3);
    var d = (later.getDate() < 10 ? "0" : "") + later.getDate();
    var m = (later.getMonth() + 1 < 10 ? "0" : "") + (later.getMonth() + 1);
    var y = later.getFullYear();

    later = y + "-" + m + "-" + d;
        axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${KEYS.SKKey}&latlong=${req.query.string}&radius=20&unit=miles&locale=*&startDateTime=${today}T15:28:00Z&endDateTime=${later}T15:28:00Z&size=50&page=1&sort=relevance,desc&segmentId=KZFzniwnSyZfZ7v7nJ`)
            .then(response => {
                res.send(response.data)
            })
            .catch(error => {
                res.send({error})
            })

});

router.get('/songkick/text', (req, res) => {
    let today = new Date();
    var d = (today.getDate() < 10 ? "0" : "") + today.getDate();
    var m = (today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1);
    var y = today.getFullYear();
    today = y + "-" + m + "-" + d;

    let later = new Date();
    later.setMonth(later.getMonth() + 3);
    var d = (later.getDate() < 10 ? "0" : "") + later.getDate();
    var m = (later.getMonth() + 1 < 10 ? "0" : "") + (later.getMonth() + 1);
    var y = later.getFullYear();

    later = y + "-" + m + "-" + d;
    
    axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${KEYS.SKKey}&radius=20&unit=miles&locale=*&startDateTime=${today}T16:26:00Z&endDateTime=${later}T16:26:00Z&size=20&sort=relevance,desc&city=${req.query.string}&segmentId=KZFzniwnSyZfZ7v7nJ`)
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            res.send({ error })
        })

});

router.get('/artistId', (req, res) => {

    axios({
        url: `https://api.setlist.fm/rest/1.0/search/artists?artistName=${req.query.string}&sort=relevance`,
        method: 'GET',
        headers: {
            'x-api-key': KEYS.SLKey
        },
    }).then(response => {
        res.send(response.data)
    }).catch(error => {
        res.send({error})
    })
})

router.get('/setlist', (req, res) => {

    axios({
        url: `https://api.setlist.fm/rest/1.0/search/setlists?artistName=${req.query.string}`,
        method: 'GET',
        headers: {
            'x-api-key': KEYS.SLKey
        },
    }).then(response => {
        res.send(response.data)
    }).catch(error => {
        res.send({error})
    })
})
router.get('/deezer', (req,res) => {
    axios({
      url: `https://api.deezer.com/search/track?q=${req.query.string}`,
      method: "GET",
    })
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        res.send({ error });
      });
})
module.exports = router;