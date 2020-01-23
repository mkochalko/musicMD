
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
            url: `https://api.songkick.com/api/3.0/search/locations.json?location=geo:${latlng}&apikey=${window.SKKey}`,
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