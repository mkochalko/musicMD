import { RECEIVE_EVENTS } from '../actions/songkick_actions';

export default function (state = {}, action) {

    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_EVENTS:
            newState = action.events
            return newState;
        default:
            return state;
    }
}