import React from 'react';
import LibraryContainer from './library_container';
import classes from './library.module.css';
import navClasses from '../../components/wrapper.module.css';
import NavBarContainer from '../nav/navbar_container';


class LibrarySplash extends React.Component {

    render() {
        console.log(this.props.currentUser)
        let dateJoined = new Date(this.props.currentUser.date.slice(0, 10))
        let configuredDateJoined = dateJoined.toString().slice(0, 16)
        return (
            <div className={classes.wrapper}>
                <NavBarContainer className={navClasses.navContainer}></NavBarContainer>
                <div className={classes.libraryContainer}>
                    <div className={classes.libraryHeaderSection}>
                        <h1>Library</h1>
                        <div className={classes.userInfoSection}>
                            <div className={classes.userInfo}>
                                <h3>Username: </h3>
                                <h3>Email: </h3>
                                <h3>Date Joined: </h3>
                                <h3>Total Songs: </h3>
                            </div>
                            <div className={classes.userInfoResponse}>
                                <h3>{this.props.currentUser.username}</h3>
                                <h3>{this.props.currentUser.email}</h3>
                                <h3>{configuredDateJoined}</h3>
                                <h3>{this.props.library.length}</h3>
                            </div>
                        </div>
                    </div>

                    <LibraryContainer />
                </div>
            </div>
        )
    }
}

export default LibrarySplash;