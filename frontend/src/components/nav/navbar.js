import React from 'react';
import { Link } from 'react-router-dom';
import classes from './nav.module.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className={classes.navBar}>
                    <div className={classes.musicMD}></div>
                    <Link to={'/'} className={classes.splashLink}></Link>
                    <p className={classes.navIcon}>Home</p>
                    <Link to={'/prescriptions'} className={classes.profileLink}></Link>
                    <p className={classes.navIcon}>Profile</p>
                    <Link to={'/library'} className={classes.libraryLink}></Link>
                    <p className={classes.navIcon}>Library</p>
                    <Link to={'/about'} className={classes.aboutLink}></Link>
                    <p className={classes.navIcon}>About</p>
                    <button
                        onClick={this.logoutUser}
                        className={classes.logoutButton}
                    ></button>
                    <p className={classes.logoutIcon}>Logout</p>
                       
                </div>
            );
        } else {
            return (
                <div className={classes.navBar}>
                    <Link to={'/signup'}><div id="signup-button">SIGN UP</div></Link>
                    <Link to={'/'}><div id="login-button">LOG IN</div></Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;