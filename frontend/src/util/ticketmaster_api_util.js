
import $ from "jquery";
import SKKey from "./keys";


export const getEvents = (metroId) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/metro_areas/${metroId}/calendar.json?apikey=${SKKey}`,
            method: 'GET',
            async: false,
            dataType: "json",
        })
    )
}

export const getMetroId = (latlng) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/search/locations.json?location=geo:${latlng}&apikey=${SKKey}`,
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