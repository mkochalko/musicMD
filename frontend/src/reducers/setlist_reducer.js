import { RECEIVE_SETLIST } from '../actions/setlist_actions';

export default function (state = {}, action) {

    Object.freeze(state)
    let newState = Object.assign({}, state)
    // console.log(action)
    switch (action.type) {
        case RECEIVE_SETLIST:
            newState = action.setlist.setlist
            return newState;
        default:
            return state;
    }
}