import { combineReducers } from 'redux';
import songkick from './songkick_reducer';
import user from './users_reducer';
import setlist from './setlist_reducer';
import events from './events_reducer';
import deezer from "./deezer_reducer"

const entitiesReducer = combineReducers({
    user,
    songkick,
    setlist,
    events,
    deezer
});

export default entitiesReducer;