import { RECEIVE_EVENTS } from '../actions/songkick_actions';

export default function (state = {}, action) {

    Object.freeze(state)
    let newState = Object.assign({}, state)
    console.log(action);
    switch (action.type) {
        case RECEIVE_EVENTS:
            newState = action.resultsPage.results.event
            return newState;
        default:
            return state;
    }
}