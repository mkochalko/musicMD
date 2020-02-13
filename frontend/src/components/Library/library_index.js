import React from 'react'
import LibraryIndexItem from './library_index_item';


class LibraryIndex extends React.Component {

    componentDidMount() {
        this.props.fetchUserLibrary()
    }




    render() {
        console.log(this.props.library)
        return (
            <div>

                <ul>
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