import {
  RECEIVE_LIBRARY,
  REMOVE_LIBRARY_SONG,
  RECEIVE_LIBRARY_SONG
} from '../actions/library_actions';

const libraryReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, action.payload);

  switch (action.type) {
    case RECEIVE_LIBRARY:
      newState = Object.assign(newState, action.payload);
      return newState;
    case RECEIVE_LIBRARY_SONG:
      newState = Object.assign(newState, action.payload.songIds);
      return newState
    case REMOVE_LIBRARY_SONG:
      console.log(action.payload)
      return newState
    default:
      return state;
  }
}

export default libraryReducer;