import { combineReducers } from 'redux';
import songkick from './songkick_reducer';
import user from './users_reducer';
import setlist from './setlist_reducer';
import events from './events_reducer';

const entitiesReducer = combineReducers({
    user,
    songkick,
    setlist,
    events
});

export default entitiesReducer;