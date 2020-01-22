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
                    <Link to={'/'}>Event Map</Link>
                    <Link to={'/prescriptions'}>Profile</Link>
                    <button 
                        onClick={this.logoutUser}
                        className={classes.logoutButton}
                        >Logout</button>
                </div>
            );
        } else {
            return (
                <div className={classes.navBar}>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
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