import {
    RECEIVE_EVENT, 
    RECEIVE_EVENTS
} from '../actions/event_actions';

const eventsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENTS:
            debugger;
            return Object.assign({}, action.events);
        case RECEIVE_EVENT:
            let newState = Object.assign({}, action.event);
            newState[action.event.eventId] = action.event;
            return newState;
        default:
            return state;
    }
};

export default eventsReducer;