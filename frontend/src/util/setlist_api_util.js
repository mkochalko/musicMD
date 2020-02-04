
import axios from 'axios';


export const getArtistSetlist = artistId => (
    axios.get(`/api/calls/setlist?string=${artistId}`)
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
)

export const getArtistId = artist => {
    let configuredArtist = artist.split(" ").join("+")
    return (axios.get(`/api/calls/artistId?string=${configuredArtist}`)
        .then(response => {
            return response.data
        }).catch(error => {
            console.log(error)
        })
    )}



