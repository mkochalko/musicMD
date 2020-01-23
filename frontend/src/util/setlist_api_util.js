
import $ from "jquery";
import SLKey from "../config/keys";


export const getArtistSetlist = (artistId) => {
    return (
        $.ajax({
            url: `https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/artist/${artistId}/setlists?p=1`,
            headers: {
                'x-api-key': window.SLKey
            },
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            processData: false,
            success: function (data) {
                console.log(data);
            },
            error: function () {
                alert("Cannot get data");
            }
        }
        ))
}

export const getArtistId = (artist) => {
  

    return (
        $.ajax({
            url: `https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/search/artists?artistName=${artist}&sort=relevance`,
            headers: {
                'x-api-key': window.SLKey 
            },
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            processData: false,
            success: function (data) {
                console.log(data.artist[0].mbid);
            },
            error: function () {
                alert("Cannot get data");
            }
        }
    ))
}


