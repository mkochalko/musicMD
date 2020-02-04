import axios from 'axios';

export const fetchUserEventsApi = () => (
    axios.get('api/events/get')
);

export const postEventApi = event => (
    axios.post('/api/events/', event)
);