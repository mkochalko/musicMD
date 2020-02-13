import axios from 'axios';

export const fetchLibrary = () => (
  axios.get('api/libraries/library')
);

export const addSongToLibrary = (songId) => (
  axios.put(`api/libraries/library/add?string=${songId}`)
);

export const deleteSongFromLibrary = (songId) => (
  axios.put(`api/libraries/library/delete?string=${songId}`)
);

