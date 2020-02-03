import { postLibraryApi, fetchUserLibraryApi } from '../util/library_util';
// import { response } from 'express';

export const RECEIVE_LIBRARY = 'RECEIVE_LIBRARY';


const receiveUserLibrary = library => ({
  type: RECEIVE_LIBRARY,
  library
});


export const fetchUserLibrary = () => dispatch => (
  fetchUserLibraryApi()
    .then(library => {
      // debugger;
      return dispatch(receiveUserLibrary(library))
    }
    )
);
