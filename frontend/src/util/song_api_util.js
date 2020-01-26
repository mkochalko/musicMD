import axios from 'axios';

export const postSong = song => (
    axios.post('/api/songs/', song)
);

// export const  = event => (
//     axios.post('/api/events/', event)
// );