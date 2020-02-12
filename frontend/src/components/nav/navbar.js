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
                    <a href="https://github.com/mkochalko/musicMD" target="_blank" className={classes.gitIcon}></a>
                    <p className={classes.iconName}>Repo</p>
                    <a href="https://www.linkedin.com/in/mkochalko/" target="_blank" className={classes.linkedInIcon}></a>
                    <p className={classes.iconName}>Matt</p>
                    <a href="https://www.linkedin.com/in/ankit-patel-aa5216133/" target="_blank" className={classes.linkedInIcon}></a>
                    <p className={classes.iconName}>Kit</p>
                    <a href="https://www.linkedin.com/in/jonjonlai/" target="_blank" className={classes.linkedInIcon}></a>
                    <p className={classes.iconName}>Jon</p>
                    <a href="https://github.com/mkochalko/musicMD" target="_blank" className={classes.linkedInIcon}></a>
                    <p className={classes.iconName}>Barrett</p>
                    <button
                        onClick={this.logoutUser}
                        className={classes.logoutButton}
                    ></button>
                    <p className={classes.navIcon}>Logout</p>
                       
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