import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import ConcertSearchContainer from './main/concert_search_container';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import classes from './wrapper.module.css';
import './reset.css';
import UserSplashContainer from '../components/user/user_splash_container';



const App = () => (
    <div className={classes.wrapper}>
        {/* <NavBarContainer className={classes.navContainer}/> */}
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/" component={ConcertSearchContainer} />
            <ProtectedRoute exact path="/prescriptions" component={UserSplashContainer} />
        </Switch>
    </div>
);

export default App;