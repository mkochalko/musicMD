import axios from 'axios';

export const fetchEvents = currentUserId => (
    axios.get('api/libraries', currentUserId)
);

export const postEvent = event => (
    axios.post('/api/events', event)
);