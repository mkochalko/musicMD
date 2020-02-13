import {
  RECEIVE_LIBRARY,
  REMOVE_LIBRARY_SONG,
  RECEIVE_LIBRARY_SONG
} from '../actions/library_actions';

const libraryReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, action.library);

  switch (action.type) {
    case RECEIVE_LIBRARY:
      newState = Object.assign(newState, action.library);
      return newState;
    case RECEIVE_LIBRARY_SONG:
      newState = Object.assign(newState, action.song.songIds);
      return newState
    case REMOVE_LIBRARY_SONG:
      delete newState.action.songId;
      return newState
    default:
      return state;
  }
}

export default libraryReducer;