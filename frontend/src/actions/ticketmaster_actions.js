import * as TMAPIUtil from '../util/ticketmaster_api_util';


export const RECEIVE_EVENTS = "RECEIVE_EVENTS";


const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})



export const getEvents = latlng => dispatch => {
    TMAPIUtil.getEvents(latlng)
        .then(events => dispatch(receiveEvents(events)))
};