import React from 'react';
import classes from './event_index_show_item.module.css';


class EventIndexShowItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { };
        this.prevProps = {};
        this.configureSetList = this.configureSetList.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    UNSAFE_componentWillMount() {
        if (this.props.event) {
            let artist = this.props.event._embedded.attractions[0].name;
            this.props.getSetlist(artist);
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
        this.prevProps = prevProps;
        if (prevProps.event.id !== this.props.event.id) {
            let artist = this.props.event._embedded.attractions[0].name;
            this.props.getSetlist(artist);
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
            return setlist;
        }
    }

    handleClick() {
        let songName = [];


        for (let i = 0; i < this.props.deezer.length; i++) {
            songName.push(this.props.deezer.artistName)
            this.props.createSong(this.props.deezer.artistName)
        }


        let event = {
            venue: this.props.event._embedded.venues[0].name,
            artist: this.props.event._embedded.attractions[0].name,
            address: `${this.props.event._embedded.venues[0].address.line1}, ${this.props.event._embedded.venues[0].city.name}, ${this.props.event._embedded.venues[0].state.stateCode}`,
            songName: songName,
            date: this.props.event.dates.start.localDate,
            userId: this.props.currentUser.id
        }
        this.props.postEvent(event)

        console.log(this.props)

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
                this.configureSetList().map(song => (
                    this.props.getTrackByInfo([this.props.event._embedded.attractions[0].name, song.name])
                ));
            }
        }

        if (this.props.setListContainer[0] && Object.keys(this.props.deezer).length === 0) {
            this.configureSetList().map(song => (
                this.props.getTrackByInfo([this.props.event._embedded.attractions[0].name, song.name])
            ));
        }
        
        return (
            <div className={classes.searchShowPage}>
                <div className={classes.eventDetails}>
                    <div className={classes.eventName}>
                        <h1>{this.props.event.name}</h1>
                        <br/>
                        <img height="180" width="320" src={this.props.event.images[0].url} /> 
                        <br />
                        <h3>{this.props.event._embedded.venues[0].name}</h3>   
                    </div> 
                    <div className={classes.eventLocation}>
                        <p>{this.props.event._embedded.venues[0].address.line1}, {this.props.event._embedded.venues[0].city.name}, {this.props.event._embedded.venues[0].state.stateCode}</p>
                    </div>
                    <br />
                    <div className={classes.dateTime}>
                        Date: {this.props.event.dates.start.localDate}
                        <br/>
                        <br/>
                        Time: {this.props.event.dates.start.localTime}
                    </div>
                    <div>
                        <button className={classes.goingButton} onClick={this.handleClick}>I'm Going</button>
                    </div> 
                </div>
                <br />
                <ul className={classes.setList}>
                    { this.configureSetList() ? (
                        this.configureSetList().map((song, idx) => (
                            <li className={classes.song}key={idx}>{song.name}</li>
                        ))) : ""
                    }
                </ul>
            </div>
        )
    }
}

export default EventIndexShowItem;