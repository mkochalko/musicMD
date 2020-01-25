
import $ from "jquery";
import axios from 'axios';
import { SKKey } from "../config/keys";
// const SKKey = require('../config/keys').SKKey


export const getEvents = (metroId) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/metro_areas/${metroId}/calendar.json?apikey=${window.SKKey}`,
            async: false,
            dataType: "json"
        })
    )
}

export const getMetroIdByClick = latlong => {
    axios.get('/api/songkick/')
}

// export const getMetroIdByClick = (latlng) => {
//     let today = new Date();
//     var d = (today.getDate() < 10 ? "0" : "") + today.getDate();
//     var m = (today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1);
//     var y = today.getFullYear();
//     today = y + "-" + m + "-" + d;

//     let later = new Date();
//     later.setMonth(later.getMonth() + 3);
//     var d = (later.getDate() < 10 ? "0" : "") + later.getDate();
//     var m = (later.getMonth() + 1 < 10 ? "0" : "") + (later.getMonth() + 1);
//     var y = later.getFullYear();

//     later = y + "-" + m + "-" + d;
//     return $.ajax({
//       url: `https://cors-anywhere.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events?apikey=${window.SKKey}&latlong=${latlng}&radius=20&unit=miles&locale=*&startDateTime=${today}T15:28:00Z&endDateTime=${later}T15:28:00Z&size=50&page=1&sort=relevance,desc&segmentId=KZFzniwnSyZfZ7v7nJ`,
//       method: "GET",
//       async: false,
//       dataType: "json"
//     });
// }

      //   url: `https://api.songkick.com/api/3.0/search/locations.json?location=geo:${latlng}&apikey=${window.SKKey}`,


// export const getMetroIdByText = (city) => {
//     city = city.split(" ").join("%20");

//     return $.ajax({
//       url: `https://cors-anywhere.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events?apikey=${window.SKKey}&radius=20&unit=miles&locale=*&startDateTime=2020-01-23T16:26:00Z&endDateTime=2020-04-23T16:26:00Z&size=20&sort=relevance,desc&city=${city}&segmentId=KZFzniwnSyZfZ7v7nJ`,
//       method: "GET",
//       async: false,
//       dataType: "json"
//     });
// }