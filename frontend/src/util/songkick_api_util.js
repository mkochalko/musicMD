
import $ from "jquery";
import { SKKey } from "../config/keys";
// const SKKey = require('../config/keys').SKKey


export const getEvents = (metroId) => {
    console.log('hello')
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/metro_areas/${metroId}/calendar.json?apikey=${SKKey}`,
            method: 'GET',
            async: false,
            dataType: "json",
            success: function (json) {
                return json
            }
        })
    )
}

export const getMetroIdByClick = (latlng) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/search/locations.json?location=geo:${latlng}&apikey=${SKKey}`,
            method: 'GET',
            async: false,
            dataType: "json",
            success: function (json) {
                console.log(json.resultsPage.results.location[0].metroArea.id);
                getEvents(json.resultsPage.results.location[0].metroArea.id)
            }
        })
    )
}

export const getMetroIdByText = (text) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/search/locations.json?query=${text}&apikey=${SKKey}`,
            method: 'GET',
            async: false,
            dataType: "json",
            success: function (json) {
                // console.log(json.resultsPage.results.location[0].metroArea.id);
                let events = getEvents(json.resultsPage.results.location[0].metroArea.id)
                return events;
            }
        })
    )
}