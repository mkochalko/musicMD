import axios from 'axios';

export const fetchUserLibraryApi = () => (
  axios.get('api/libraries/library')
);

