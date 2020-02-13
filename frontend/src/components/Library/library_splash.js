import React from 'react';
import LibraryContainer from './library_container';
import classes from './library.module.css';
import navClasses from '../../components/wrapper.module.css';
import NavBarContainer from '../nav/navbar_container';

class LibrarySplash extends React.Component {

    render() {

        return (
            <div className={navClasses.wrapper}>
                <NavBarContainer className={navClasses.navContainer}></NavBarContainer>
                <h1>TEST</h1>

                <LibraryContainer />
            </div>
        )
    }
}

export default LibrarySplash;