import * as eventAPIUtil from '../util/events_api_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
});

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});

export const postEvent = event => dispatch => (
    eventAPIUtil.postEvent(event)
        .then((event) => dispatch(receiveEvent(event)))
);

export const fetchEvents = currentUserId => dispatch => (
    eventAPIUtil.fetchEvents(currentUserId)
        .then(events => dispatch(receiveEvents(events)))
);
