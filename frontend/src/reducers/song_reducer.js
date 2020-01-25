import { RECEIVE_SONG } from '../actions/song_actions';

export default function (state = {}, action) {

    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SONG:
            debugger;
            newState[action.song.data._id] = action.song.data
            return newState;
        default:
            return state;
    }
}