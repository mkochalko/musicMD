import React from 'react'
import classes from './library.module.css';
import navClasses from '../../components/wrapper.module.css';
import NavBarContainer from '../nav/navbar_container';
import LibraryIndexItem from './library_index_item';


class LibraryIndex extends React.Component {

    componentDidMount() {
        // this.props.fetchUserLibrary()
    }




    render() {

        return (
            <div className={navClasses.wrapper}>
                <NavBarContainer className={navClasses.navContainer}></NavBarContainer>

                <ul>
                    {   
                        this.props.library > 0 ? (
                            this.props.library.map((song, idx) => (
                                <LibraryIndexItem key={idx} song={song} deleteSong={this.props.deleteSongFromUserLibrary}/>
                            ))
                    ) : ""
                    }
                </ul>
            </div>
        )
    }
}

export default LibraryIndex;