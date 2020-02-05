import { RECEIVE_SETLIST } from '../actions/setlist_actions';

export default function (state = {}, action) {

    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SETLIST:
            if (action.setlist.data.setlist) {
                newState = action.setlist.data.setlist
            }
            return newState;
        default:
            return state;
    }
}