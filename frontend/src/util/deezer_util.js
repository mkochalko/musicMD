import $ from "jquery";



export const findTrack = (trackInfo) => {
    return (
        $.ajax({
            url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${trackInfo.join("+")}`,
            method: 'GET',
            // async: false,
            dataType: "json"
        })
    )
}

