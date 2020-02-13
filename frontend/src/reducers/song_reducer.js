import { RECEIVE_SONG, RECEIVE_SONGS } from '../actions/song_actions';

export default function (state = {}, action) {

    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SONG:
            newState[action.song.data._id] = action.song.data
            return newState;
        case RECEIVE_SONGS:
            newState = Object.assign(newState, action.songs.data)
            return newState;
        default:
            return state;
    }
}