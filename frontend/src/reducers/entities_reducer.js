import { combineReducers } from 'redux';
import ticketmaster from './ticketmaster_reducer';
import user from './users_reducer';

const RootReducer = combineReducers({
    user,
    ticketmaster
});

export default RootReducer;