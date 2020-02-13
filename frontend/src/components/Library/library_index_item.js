import React from 'react';
import classes from '../user/user.module.css';

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
            <li>
                <label>
                    <iframe className={classes.deezerTrack} scrolling="no" frameBorder="0" allowtransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=300&height=60&color=ff0000&layout=dark&size=medium&type=tracks&id=${this.props.song}&app_id=1`} width="300" height="60"></iframe>
                </label>
                <button id={this.props.song} onClick={this.deleteSong}>Remove Song</button>
            </li>
        )
    }
}

export default LibraryIndexItem;