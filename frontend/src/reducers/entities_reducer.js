import { combineReducers } from 'redux';
import ticketmaster from './ticketmaster_reducer';
import events from './events_reducer';
import user from './users_reducer';

const RootReducer = combineReducers({
    user,
    ticketmaster,
    events
});

export default RootReducer;