import { fetchLibrary, addSongToLibrary, deleteSongFromLibrary } from '../util/library_util';
// postLibraryApi,
export const RECEIVE_LIBRARY = 'RECEIVE_LIBRARY';
export const REMOVE_LIBRARY_SONG = 'REMOVE_LIBRARY_SONG';
export const RECEIVE_LIBRARY_SONG = 'RECEIVE_LIBRARY_SONG';


const updateLibrary = payload => ({
  type: RECEIVE_LIBRARY_SONG,
  payload
});

const getLibrary = (payload) => ({
  type: RECEIVE_LIBRARY,
  payload
})

const removeLibrarySong = payload => ({
  type: REMOVE_LIBRARY_SONG,
  payload
})


export const fetchUserLibrary = () => dispatch => (
  fetchLibrary()
    .then((library) => dispatch(getLibrary(library.data.songIds)))
);

export const addSongToUserLibrary = (songId) => dispatch => (
  addSongToLibrary(songId)
    .then(song => dispatch(updateLibrary(song.data[0])))
)

export const deleteSongFromUserLibrary = (songId) => dispatch => (
  deleteSongFromLibrary(songId)
    .then((library) => dispatch(removeLibrarySong(library.data[0].songIds)))
)
