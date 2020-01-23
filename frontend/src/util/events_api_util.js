import axios from 'axios';

export const fetchUserEvents = () => (
    axios.get('api/libraries/library')
);

export const postEvent = event => (
    axios.post('/api/events', event)
);