import {
    RECEIVE_TRACK
} from '../actions/deezer_actions';


export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_TRACK:
            ;
            nextState[action.track.data[0].id] = action.track.data[0]
            return nextState;
        default:
            return state;
    }
}