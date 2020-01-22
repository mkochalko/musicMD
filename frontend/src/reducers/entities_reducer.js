import { combineReducers } from 'redux';
import songkick from './songkick_reducer';
import user from './users_reducer';

const RootReducer = combineReducers({
    user,
    songkick
<<<<<<< HEAD
=======
    // events
>>>>>>> aa0bd4af02a83588245ec71616b848237036acb0
});

export default RootReducer;