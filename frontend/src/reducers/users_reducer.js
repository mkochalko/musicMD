import {
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';


export default function (state = {}, action) {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser
        default:
            return state;
    }
}