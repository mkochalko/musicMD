import { combineReducers } from 'redux';
import songkick from './songkick_reducer';
import user from './users_reducer';

const RootReducer = combineReducers({
    user,
    songkick
    // events
});

export default RootReducer;