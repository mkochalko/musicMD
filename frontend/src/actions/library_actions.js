import { fetchLibrary, addSongToLibrary, deleteSongFromLibrary } from '../util/library_util';
// postLibraryApi,
export const RECEIVE_LIBRARY = 'RECEIVE_LIBRARY';
export const REMOVE_LIBRARY_SONG = 'REMOVE_LIBRARY_SONG';
export const RECEIVE_LIBRARY_SONG = 'RECEIVE_LIBRARY_SONG';


const updateLibrary = song => ({
  type: RECEIVE_LIBRARY_SONG,
  song
});

const getLibrary = () => ({
  type: RECEIVE_LIBRARY
})

const removeLibrarySong = songId => ({
  type: REMOVE_LIBRARY_SONG,
  songId
})


export const fetchUserLibrary = () => dispatch => (
  fetchLibrary()
    .then(() => {
      return dispatch(getLibrary())
    }
    )
);

export const addSongToUserLibrary = (songId) => dispatch => (
  addSongToLibrary(songId)
    .then(song => dispatch(updateLibrary(song)))
)

export const deleteSongFromUserLibrary = () => dispatch => (
  deleteSongFromLibrary()
    .then((song) => dispatch(removeLibrarySong(song)))
)
