import React from 'react';
import classes from '../user/user.module.css';
import libraryClasses from './library.module.css';

class LibraryIndexItem extends React.Component {

    constructor(props) {
        super(props)

        this.deleteSong = this.deleteSong.bind(this);
    }

    deleteSong(e) {
        this.props.deleteSong(e.target.id)
    }

    render() {
        console.log(this.props)
        return (
            <li className={libraryClasses.librarySongIndexItem}>
                <iframe className={libraryClasses.deezerTrack} scrolling="no" frameBorder="0" allowtransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=92&color=ff0000&layout=dark&size=medium&type=tracks&id=${this.props.song}&app_id=1`} width="700" height="92"></iframe> 
                <button id={this.props.song} className={classes.rembut} onClick={this.deleteSong}>Remove Song</button>
            </li>
        )
    }
}

export default LibraryIndexItem;