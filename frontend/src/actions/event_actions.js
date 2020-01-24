import { postEventApi, fetchUserEventsApi } from '../util/events_api_util';
// import { response } from 'express';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_USER_EVENTS = 'RECEIVE_USER_EVENTS';

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
});

const receiveUserEvents = events => ({
    type: RECEIVE_USER_EVENTS,
    events
});

export const postEvent = event => dispatch => (
    postEventApi(event)
        .then((event) => dispatch(receiveEvent(event)))
);

export const fetchUserEvents = () => dispatch => (
    fetchUserEventsApi()
        .then(library => { 
            // debugger;
            return dispatch(receiveUserEvents(library))}
            )
);
