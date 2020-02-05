const axios = require("axios");

export const findTrack = trackInfo =>{
    let track = trackInfo.join("+");
    return axios
           .get(`/api/calls/deezer?string=${track}`)
           .then(res => {
               return res.data;
            })
           .catch(error => {
             console.log(error);
            });
        }