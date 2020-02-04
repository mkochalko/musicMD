import { postLibraryApi, fetchUserLibraryApi } from '../util/library_util';
// import { response } from 'express';

export const RECEIVE_LIBRARY = 'RECEIVE_LIBRARY';


export const updateLibrary = library => ({
  type: RECEIVE_LIBRARY,
  library
});


export const fetchUserLibrary = () => dispatch => (
  fetchUserLibraryApi()
    .then(library => {
      // debugger;
      return dispatch(updateLibrary(library))
    }
    )
);
