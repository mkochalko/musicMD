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
                    <div className={classes.musicMD}>
                        Music MD
                    </div>
                    <Link to={'/'} className={classes.navLink}>Event Map</Link>
                    <Link to={'/prescriptions'} className={classes.navLink}>Profile</Link>
                    <button 
                        onClick={this.logoutUser}
                        className={classes.logoutButton}
                        >Logout</button>
                    <a href="https://github.com/mkochalko/musicMD" className={classes.gitIcon}></a>
                    <a href="https://github.com/mkochalko/musicMD" className={classes.linkedInIcon}></a>
                    <a href="https://github.com/mkochalko/musicMD" className={classes.linkedInIcon}></a>
                    <a href="https://github.com/mkochalko/musicMD" className={classes.linkedInIcon}></a>
                    <a href="https://github.com/mkochalko/musicMD" className={classes.linkedInIcon}></a>
                       
                </div>
            );
        } else {
            return (
                <div className={classes.navBar}>
                    <Link to={'/signup'}><div id="signup-button">SIGN UP</div></Link>
                    <Link to={'/login'}><div id="login-button">LOG IN</div></Link>
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