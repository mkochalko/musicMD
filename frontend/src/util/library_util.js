import axios from 'axios';

export const fetchLibrary = () => (
  axios.get('api/libraries/library')
);

export const addSongToLibrary = (songId) => (
  axios.post(`api/libraries/library?string=${songId}`)
);

export const deleteSongFromLibrary = (songId) => (
  axios.delete(`api/libraries/library?string=${songId}`)
);

