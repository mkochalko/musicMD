import { combineReducers } from 'redux';
import songkick from './songkick_reducer';
import user from './users_reducer';
import setlist from './setlist_reducer';

const RootReducer = combineReducers({
    user,
    songkick,
    setlist
    // events
});

export default RootReducer;