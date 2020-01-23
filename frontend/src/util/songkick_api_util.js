
import $ from "jquery";
import { SKKey } from "../config/keys";
// const SKKey = require('../config/keys').SKKey


export const getEvents = (metroId) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/metro_areas/${metroId}/calendar.json?apikey=${window.SKKey}`,
            method: 'GET',
            async: false,
            dataType: "json"
        })
    )
}

export const getMetroIdByClick = (latlng) => {
    return (
        $.ajax({
            url: `https://app.ticketmaster.com/discovery/v2/events?apikey=${window.SKKey}&latlong=${latlng}&radius=20&unit=miles&locale=*&startDateTime=2020-01-23T13:44:00Z&endDateTime=2020-03-31T13:43:00Z&sort=relevance,desc&segmentId=KZFzniwnSyZfZ7v7nJ`,
            // url: `https://api.songkick.com/api/3.0/search/locations.json?location=geo:${latlng}&apikey=${window.SKKey}`,
            method: 'GET',
            async: false,
            dataType: "json"
        })
    )
}



export const getMetroIdByText = (text) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/search/locations.json?query=${text}&apikey=${window.SKKey}`,
            method: 'GET',
            async: false,
            dataType: "json"
        })
    )
}