import { combineReducers } from 'redux';
import ticketmaster from './ticketmaster_reducer';
import events from './events_reducer';

const RootReducer = combineReducers({
    ticketmaster,
    events
});

export default RootReducer;