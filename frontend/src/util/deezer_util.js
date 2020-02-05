const axios = require("axios");

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