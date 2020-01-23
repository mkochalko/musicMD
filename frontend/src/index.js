import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken, login } from './util/session_api_util';
import { logout } from './actions/session_actions';
import axios from 'axios';
import {getEvents} from './util/songkick_api_util';
import * as SAU from "./util/setlist_api_util";
import * as DeezerUtil from "./util/deezer_util";
import { getMetroIdByClick, getMetroIdByText } from './actions/songkick_actions';
import {MapsAPI, SKKey, SLKey} from './config/keys';



document.addEventListener('DOMContentLoaded', () => {
    let store;
    window.MapsAPI = MapsAPI
    window.SKKey = SKKey
    window.SLKey = SLKey

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
    window.getEvents = getEvents;
    window.getMetroIdByClick = getMetroIdByClick;
    window.getMetroIdByText = getMetroIdByText;
    window.SAU = SAU;
    window.DeezerUtil = DeezerUtil;
    ReactDOM.render(<Root store={store} />, root);
});