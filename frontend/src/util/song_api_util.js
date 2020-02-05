import axios from 'axios';

export const postSong = song => (
    axios.post('/api/songs/', song)
);
