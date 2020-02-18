import React from 'react'
import LibraryIndexItem from './library_index_item';
import classes from './library.module.css';



class LibraryIndex extends React.Component {

    componentDidMount() {
        this.props.fetchUserLibrary()
    }




    render() {
        return (
            <div className={classes.librarySongIndex}>
                <ul className={classes.librarySongIndexList}>
                    {   
                        this.props.library.length > 0 ? (
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