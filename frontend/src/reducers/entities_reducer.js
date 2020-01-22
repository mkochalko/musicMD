import { combineReducers } from 'redux';
<<<<<<< HEAD
import songkick from './songkick_reducer';
=======
import ticketmaster from './ticketmaster_reducer';
import events from './events_reducer';
>>>>>>> master
import user from './users_reducer';

const RootReducer = combineReducers({
    user,
<<<<<<< HEAD
    songkick
=======
    ticketmaster,
    events
>>>>>>> master
});

export default RootReducer;