import { combineReducers } from 'redux';
import ticketmaster from './ticketmaster_reducer';

const RootReducer = combineReducers({
    ticketmaster
});

export default RootReducer;