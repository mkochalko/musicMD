import * as SetlistAPIUtil from '../util/setlist_api_util';


export const RECEIVE_SETLIST = "RECEIVE_SETLIST";


const receiveSetlist = setlist => ({
    type: RECEIVE_SETLIST,
    setlist
})



export const getSetlist = artist => dispatch => {
    SetlistAPIUtil.getArtistId(artist)
        .then(artistId => SetlistAPIUtil.getArtistSetlist(artistId))
        .then(events => dispatch(receiveSetlist(events)))
};


// export const getMetroIdByText = text => dispatch => {
//     SetlistAPIUtil.getMetroIdByText(text)
//         .then(events => dispatch(receiveEvents(events)))
// };