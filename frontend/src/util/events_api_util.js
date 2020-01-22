import axios from 'axios';

export const fetchEvents = currentUser => (
    axios.get('api/libraries/library', currentUser)
);

export const postEvent = event => (
    axios.post('/api/events', event)
);