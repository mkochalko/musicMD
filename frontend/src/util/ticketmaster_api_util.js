
import $ from "jquery";


export const getEvents = (latlng) => {
    return (
        $.ajax({
            url: `https://app.ticketmaster.com/discovery/v2/events.json?&latlong=${latlng}&category_ids=10001&apikey=fTM6MAm8XGdi27bXZvBlpAGtNY7dqaTa`,
            method: 'GET',
            async: false,
            dataType: "json",
            success: function(json) {
                console.log(json);
            }
        })
    )
}