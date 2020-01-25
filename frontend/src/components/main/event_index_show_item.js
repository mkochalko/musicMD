import React from 'react';
import classes from './event_index_show_item.module.css';

class EventIndexShowItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = { }
        this.configureSetList = this.configureSetList.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        // console.log(this.props.event)
        if (this.props.event) {
            let artist = this.props.event._embedded.attractions[0].name;
            // console.log(artist)
            this.props.getSetlist(artist)
        }

            
    }

    componentDidUpdate(prevProps) {
        if (prevProps.event.id !== this.props.event.id) {
            let artist = this.props.event._embedded.attractions[0].name;
            this.props.getSetlist(artist)
        }
    }

    configureSetList() {
        if (this.props.setListContainer[0]) {
            // console.log(this.props.setListContainer[0].sets)
        
            let setlist;
            for (let i = 0; i < this.props.setListContainer.length; i++) {
                if (this.props.setListContainer[i].sets.set.length > 0) {
                    setlist = this.props.setListContainer[i].sets.set[0].song;
                }
            }
            return setlist
        }
    }

    handleClick() {
        let songIds = [];

        let otherSongIds = [];

        this.configureSetList().map(song => (
            songIds.push({artist: this.props.event._embedded.attractions[0].name, songName: song.name})
        ));

        // console.log(this.props.getTrackByInfo(["In The End"]))

        // console.log(this.props.findTrack(["Master Exploder"]))


        let event = {
            venue: this.props.event._embedded.venues[0].name,
            artist: this.props.event._embedded.attractions[0].name,
            address: `${this.props.event._embedded.venues[0].address.line1}, ${this.props.event._embedded.venues[0].city.name}, ${this.props.event._embedded.venues[0].state.stateCode}`,
            songIds: songIds,
            date: this.props.event.dates.start.localDate
        }
        this.props.postEvent(event)

        songIds.forEach(songInfo => {
            
            this.props.getTrackByInfo([songInfo.artist, songInfo.songName])
        
        })

    }

    render() {
        console.log(this.state.setList)
        console.log(this.props.event)
        // console.log(this.configureSetList())
        return (
            <div className={classes.searchShowPage}>
                {this.props.event.name}
                <br/>
                {this.props.event._embedded.venues[0].name}
                <br/>
                {this.props.event._embedded.attractions[0].name}
                <br/>
                {this.props.event._embedded.venues[0].address.line1}
                <br/>
                {this.props.event._embedded.venues[0].city.name}, {this.props.event._embedded.venues[0].state.stateCode}
                <br/>
                {this.props.event.dates.start.localDate}
                <br />
                {this.props.event.dates.start.localTime}
                <br />
                <button onClick={this.handleClick}>I'm Going</button>
                <ul>
                    { this.configureSetList() ? (
                        this.configureSetList().map((song, idx) => (
                            <li key={idx}>{song.name}</li>
                        ))) : ""
                    }
                </ul>
            </div>
        )
    }
}

export default EventIndexShowItem;