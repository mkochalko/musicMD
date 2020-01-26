import {
    RECEIVE_TRACK,
    CLEAR_TRACKS
} from '../actions/deezer_actions';


export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_TRACK:
            nextState[action.track.data[0].id] = action.track.data[0]
            return nextState;
        case CLEAR_TRACKS:
            debugger;
            nextState = {}
            return nextState;
        default:
            return state;
    }
}