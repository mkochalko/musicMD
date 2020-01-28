const express = require("express");
const router = express.Router();
const axios = require('axios');
const SKKey = 'wt3brxwVCHRgTvrWwbyfb44ef4KAs2fG';


router.get('/', (req, res) => {
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
    // function axiosTest() {
        axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${SKKey}&latlong=37.7749,-122.4194&radius=20&unit=miles&locale=*&startDateTime=${today}T15:28:00Z&endDateTime=${later}T15:28:00Z&size=50&page=1&sort=relevance,desc&segmentId=KZFzniwnSyZfZ7v7nJ`)
            .then(response => {
                // console.log(response.data)
                res.send(response.data)
            })
            .catch(error => {
                // console.log(body)
                res.send({error})
            })
    // }

    // axiosTest().then(data => {
    //     console.log(data._embedded.events)
    //     return res.json({name: 'test', location: 'Mars'})
    // });
});

module.exports = router;