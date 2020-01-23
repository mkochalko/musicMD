import * as SetlistAPIUtil from '../util/setlist_api_util';


export const RECEIVE_SETLIST = "RECEIVE_SETLIST";


const receiveSetlist = setlist => ({
    type: RECEIVE_SETLIST,
    setlist
})



export const getSetlist = artist => dispatch => {
    SetlistAPIUtil.getArtistId(artist)
        .then(data => SetlistAPIUtil.getArtistSetlist(data.artist[0].mbid))
        .then(setlist => dispatch(receiveSetlist(setlist)))
};


// export const getMetroIdByText = text => dispatch => {
//     SetlistAPIUtil.getMetroIdByText(text)
//         .then(events => dispatch(receiveEvents(events)))
// };