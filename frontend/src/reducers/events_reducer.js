import {
    RECEIVE_EVENT, 
    RECEIVE_USER_EVENTS
} from '../actions/event_actions';

const eventsReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_EVENTS:
            debugger;
            return Object.assign({}, action.events.data);
        case RECEIVE_EVENT:
            debugger;
            let newState = Object.assign({}, action.event.data);
            newState[action.event.data._id] = action.event.data;
            return newState;
        default:
            return state;
    }
};

export default eventsReducer;