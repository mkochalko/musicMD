import * as TMAPIUtil from '../util/songkick_api_util';


export const RECEIVE_EVENTS = "RECEIVE_EVENTS";


const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})



export const getMetroIdByClick = latlng => dispatch => {
    return ( 
        TMAPIUtil.getMetroIdByClick(latlng)
            .then(events => TMAPIUtil.getEvents(events))
            .then(events => dispatch(receiveEvents(events)))
    )
};


export const getMetroIdByText = text => dispatch => {
    TMAPIUtil.getMetroIdByText(text)
        .then(events => dispatch(receiveEvents(events)))
};