import {
  RECEIVE_LIBRARY
} from '../actions/library_actions';

const libraryReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
   
    case RECEIVE_LIBRARY:
      // debugger;
      let newState = Object.assign({}, action.library);
      newState[action.event.data._id] = action.library;
      return newState;
    default:
      return state;
  }
}

export default libraryReducer;