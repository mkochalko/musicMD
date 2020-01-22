import * as SetlistAPIUtil from '../util/setlist_api_util';


export const RECEIVE_SETLIST = "RECEIVE_SETLIST";


const receiveSetlist = setlist => ({
    type: RECEIVE_EVENTS,
    events
})



export const getMetroIdByClick = latlng => dispatch => {
    TMAPIUtil.getMetroIdByClick(latlng)
        .then(events => dispatch(receiveEvents(events)))
};


export const getMetroIdByText = text => dispatch => {
    TMAPIUtil.getMetroIdByText(text)
        .then(events => dispatch(receiveEvents(events)))
};