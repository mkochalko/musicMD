import axios from 'axios';

export const fetchEvents = () => (
    axios.get('/api/users/events')
)