import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken, login } from './util/session_api_util';
import { logout } from './actions/session_actions';
import axios from 'axios';
<<<<<<< HEAD
import * as SAU from "./util/setlist_api_util";
import * as DeezerUtil from "./util/deezer_util";
=======
<<<<<<< HEAD
import { getMetroIdByClick, getMetroIdByText } from './actions/songkick_actions';
=======
import { fetchEvents } from './actions/event_actions';
>>>>>>> master
import { getMetroIdByClick, getMetroIdByText } from './actions/ticketmaster_actions';
>>>>>>> master


document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);

        const decodedUser = jwt_decode(localStorage.jwtToken);

        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }
    const root = document.getElementById('root');

    window.axios = axios;
    window.login = login;
    window.logout = logout;
    // window.dispatch = dispatch;
    window.getState = store.getState;
    window.fetchEvents = fetchEvents;
    window.getMetroIdByClick = getMetroIdByClick;
    window.getMetroIdByText = getMetroIdByText;
    window.SAU = SAU;
    window.DeezerUtil = DeezerUtil;
    ReactDOM.render(<Root store={store} />, root);
});