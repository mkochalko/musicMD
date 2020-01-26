import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken, login } from './util/session_api_util';
import { logout } from './actions/session_actions';
import axios from 'axios';
// import { postEvent } from './actions/event_actions';
import {getEvents} from './util/songkick_api_util';
import * as SAU from "./util/setlist_api_util";
import * as DeezerUtil from "./util/deezer_util";
import {getTrackByInfo} from "./actions/deezer_actions";
import { getMetroIdByClick } from './actions/songkick_actions';
import { getSetlist } from './actions/setlist_actions';
import * as ProdKeys from './config/keys_prod';
// import * as DevKeys from './config/keys_dev';



document.addEventListener('DOMContentLoaded', () => {
    let store;

    // if (process.env.NODE_ENV === 'production') {
    //     window.MapsAPI = ProdKeys.MapsAPI
    //     window.SKKey = ProdKeys.SKKey
    //     window.SLKey = ProdKeys.SLKey
    // } else {
    //     window.MapsAPI = DevKeys.MapsAPI
    //     window.SKKey = DevKeys.SKKey
    //     window.SLKey = DevKeys.SLKey
    // }

    window.MapsAPI = ProdKeys.MapsAPI
    window.SKKey = ProdKeys.SKKey
    window.SLKey = ProdKeys.SLKey

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
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.getEvents = getEvents;
    window.getMetroIdByClick = getMetroIdByClick;
    // window.getMetroIdByText = getMetroIdByText;
    window.getTrackByInfo = getTrackByInfo;
    // window.getSetlist = getSetlist;
    // window.postEvent = postEvent;
    window.getSetlist = getSetlist;

    window.SAU = SAU;
    window.DeezerUtil = DeezerUtil;
    ReactDOM.render(<Root store={store} />, root);
});