import {  fetchUserLibraryApi } from '../util/library_util';
// postLibraryApi,
export const RECEIVE_LIBRARY = 'RECEIVE_LIBRARY';


export const updateLibrary = library => ({
  type: RECEIVE_LIBRARY,
  library
});


export const fetchUserLibrary = () => dispatch => (
  fetchUserLibraryApi()
    .then(library => {
      return dispatch(updateLibrary(library))
    }
    )
);