import { combineReducers } from 'redux';
import songkick from './songkick_reducer';
import user from './users_reducer';
import setlist from './setlist_reducer';
import events from './events_reducer';
import songs from './song_reducer';
import deezer from "./deezer_reducer";
import library from './library_reducer';

const entitiesReducer = combineReducers({
    user,
    songkick,
    setlist,
    events,
    songs,
    deezer,
    library
});

export default entitiesReducer;