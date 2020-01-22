
import $ from "jquery";
<<<<<<< HEAD:frontend/src/util/ticketmaster_api_util.js
import * as Keys from "./keys";
=======
import { SKKey } from "../config/keys";
// const SKKey = require('../config/keys').SKKey
>>>>>>> master:frontend/src/util/songkick_api_util.js


export const getEvents = (metroId) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/metro_areas/${metroId}/calendar.json?apikey=${Keys.SKAPI}`,
            method: 'GET',
            async: false,
            dataType: "json",
        })
    )
}

export const getMetroIdByClick = (latlng) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/search/locations.json?location=geo:${latlng}&apikey=${Keys.SKAPI}`,
            method: 'GET',
            async: false,
            dataType: "json",
            success: function (json) {
                // console.log(json.resultsPage.results.location[0].metroArea.id);
                let events = getEvents(json.resultsPage.results.location[0].metroArea.id)
                console.log(events);
            }
        })
    )
}

export const getMetroIdByText = (text) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/search/locations.json?query=${text}&apikey=${Keys.SKAPI}`,
            method: 'GET',
            async: false,
            dataType: "json",
            success: function (json) {
                // console.log(json.resultsPage.results.location[0].metroArea.id);
                let events = getEvents(json.resultsPage.results.location[0].metroArea.id)
                console.log(events);
            }
        })
    )
}