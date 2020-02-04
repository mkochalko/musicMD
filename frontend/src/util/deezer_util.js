import $ from "jquery";
const axios = require("axios");



// export const findTrack = (trackInfo) => {
//     let json;
//     return (
//         $.ajax({
//             url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${trackInfo.join("+")}`,
//             method: 'GET',
//             async: false,
//             dataType: "json"
//         })
//     )
//     // return json;
// }
export const findTrack = trackInfo =>{
    let track = trackInfo.join("+");
    // console.log(track)
    return axios
           .get(`/api/calls/deezer?string=${track}`)
           .then(res => {
               // console.log(res.data)
               return res.data;
            })
           .catch(error => {
             console.log(error);
            });
        }