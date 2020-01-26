import React from 'react';
import classes from './event_index_show_item.module.css';

class EventIndexShowItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = { }
        this.prevProps = {}
        this.configureSetList = this.configureSetList.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    UNSAFE_componentWillMount() {
        if (this.props.event) {
            let artist = this.props.event._embedded.attractions[0].name;
            console.log(artist)
            this.props.getSetlist(artist)
        }
    }


    componentDidMount() {
        // console.log(this.props.event)
        // if (this.props.event) {
        //     let artist = this.props.event._embedded.attractions[0].name;
        //     // console.log(artist)
        //     this.props.getSetlist(artist)
        // }
        if (this.props.setListContainer[0] && this.props.deezer.length === 0) {
            this.configureSetList().map(song => (
                this.props.getTrackByInfo([this.props.event._embedded.attractions[0].name, song.name])
            ));
        }
    }

    componentDidUpdate(prevProps) {
        this.prevProps = prevProps
        if (prevProps.event.id !== this.props.event.id) {
            let artist = this.props.event._embedded.attractions[0].name;
            this.props.getSetlist(artist)
            // this.props.clearTracks();
        }
        // setTimeout(() => {
        //     this.configureSetList().map(song => (
        //         this.props.getTrackByInfo([this.props.event._embedded.attractions[0].name, song.name])
        //     ));
        // }, 1000)
    }

    componentWillUnmount() {
        // this.props.clearTracks();
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

        // let otherSongIds = [];
        debugger;
        this.props.deezer.map(songObj => (
            this.props.fetchSong({ artist: songObj, songName: songObj, songLink: songObj})
        ));
        
        
        // this.props.fetchSong({artist: "Blink-182", songName: "First Date"})
        console.log(this.props.event.dates.start.localDate)

        // console.log(this.props.getTrackByInfo(["In The End"]))

        // console.log(this.props.findTrack(["Master Exploder"]))


        let event = {
            venue: this.props.event._embedded.venues[0].name,
            artist: this.props.event._embedded.attractions[0].name,
            address: `${this.props.event._embedded.venues[0].address.line1}, ${this.props.event._embedded.venues[0].city.name}, ${this.props.event._embedded.venues[0].state.stateCode}`,
            songIds: songIds,
            date: this.props.event.dates.start.localDate
        }

        // songIds.map((song) => this.props.fetchSong(song))
        this.props.postEvent(event)

        // songIds.forEach(songInfo => {
            
        //     let test = this.props.getTrackByInfo([songInfo.artist, songInfo.songName])
        //     console.log(test)
        // })

    }

    render() {
        // console.log(this.state.setList)
        // console.log(this.props.event)
        // console.log(this.configureSetList())
        // console.log(this.props.setListContainer)
        // console.log(this.props.deezer)
        // if (this.props.setListContainer.length === 0) {
        //     this.configureSetList().map(song => (
        //         this.props.getTrackByInfo([this.props.event._embedded.attractions[0].name, song.name])
        //     ));
        // }
        // debugger;
        // let prevProps;
        // if (Object.keys(this.prevProps).length > 0) {
        //     prevProps = this.prevProps
        // }
        // console.log(this.prevProps)
        if (Object.keys(this.prevProps).length > 0) {
            if (this.props.setListContainer[0] && this.prevProps.event.id !== this.props.event.id) {
                console.log("test")
                console.log(this.prevProps)
                console.log(this.props.event.id)
                this.configureSetList().map(song => (
                    this.props.getTrackByInfo([this.props.event._embedded.attractions[0].name, song.name])
                ));
            }
        }

        if (this.props.setListContainer[0] && Object.keys(this.props.deezer).length === 0) {
            console.log("test")
            console.log(this.prevProps)
            console.log(this.props.event.id)
            this.configureSetList().map(song => (
                this.props.getTrackByInfo([this.props.event._embedded.attractions[0].name, song.name])
            ));
        }
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
                        this.configureSetList().map((song, idx) => {
                            debugger;
                            return (
                                <li key={idx}>{song.name}</li>
                            )
                        })) : ""
                    }
                </ul>
            </div>
        )
    }
}

export default EventIndexShowItem;