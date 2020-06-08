
import $ from "jquery";
import axios from 'axios';


export const getEvents = (metroId) => {
    return (
        $.ajax({
            url: `https://api.songkick.com/api/3.0/metro_areas/${metroId}/calendar.json?apikey=${window.SKKey}`,
            dataType: "json"
        })
    )
}

export const getMetroIdByClick = latlong => (
    axios.get(`/api/calls/songkick/click?string=${latlong}`)
        .then(res => {
            
            return res.data
        })
        .catch(error => {
            console.log(error)
        })
)


export const getMetroIdByText = (city) => {
    city = city.split(" ").join("%20");
    return axios.get(`/api/calls/songkick/text?string=${city}`)
        .then(res => {
            // console.log(res)
            return res.data
        })
        .catch(error => {
            return error;
        })
}