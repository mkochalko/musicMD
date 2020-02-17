import * as SetlistAPIUtil from '../util/setlist_api_util';


export const RECEIVE_SETLIST = "RECEIVE_SETLIST";


const receiveSetlist = setlist => ({
    type: RECEIVE_SETLIST,
    setlist
})


 
export const getSetlist = artist => dispatch => (
    SetlistAPIUtil.getArtistId(artist)
        .then(data => {
            return SetlistAPIUtil.getArtistSetlist(data.artist[0].mbid)})
        .then(setlist => {
            dispatch(receiveSetlist(setlist))
            return setlist
        })
        .catch(error => {
            // alert("Artist Not Found")
            console.log(error)
        })
);

