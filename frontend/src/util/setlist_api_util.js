
import $ from "jquery";
import SLKey from "../config/keys";


export const getArtistSetlist = (artistId) => {
    return (
        $.ajax({
            url: `https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/search/setlists?artistName=${artistId}`,
            headers: {
                'x-api-key': window.SLKey
            },
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            processData: false
        }
        ))
}

export const getArtistId = (artist) => {
    console.log(artist)
    return (
        $.ajax({
            url: `https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/search/artists?artistName=${artist}&sort=relevance`,
            headers: {
                'x-api-key': window.SLKey 
            },
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            processData: false
        }
    ))
}


