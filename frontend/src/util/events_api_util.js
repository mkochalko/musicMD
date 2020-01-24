import axios from 'axios';

export const fetchUserEventsApi = () => (
    axios.get('api/libraries/library')
);

export const postEventApi = event => (
    axios.post('/api/events/', event)
);