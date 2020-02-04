import React from 'react';
import classes from './event_index_show_item.module.css';


class EventIndexShowItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { };
        this.prevProps = {event: {id: null}};
        this.configureSetList = this.configureSetList.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    UNSAFE_componentWillMount() {
        // debugger;
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
            this.props.clearTracks();
        }
        // setTimeout(() => {
        //         this.configureSetList().map(song => (
        //                 this.props.getTrackByInfo([this.props.event._embedded.attractions[0].name, song.name])
        //             ));
        //         }, 1000)



    }
            
    componentWillUnmount() {
        this.props.clearTracks();
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
        if (this.props.setListContainer[0] && this.prevProps.event.id !== this.props.event.id && Object.keys(this.props.deezer).length === 0) {
            setTimeout(()=> { this.configureSetList().map(song => (
                this.props.getTrackByInfo([this.props.event._embedded.attractions[0].name, song.name])
            ))},1000)
        }
        console.log(this.props.deezer);
       
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
                    {
                        Object.keys(this.props.deezer).length > 0 ? (Object.values(this.props.deezer).map((song, idx) => {
                            
                            return (
                                <iframe scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=300&height=100&color=ff0000&layout=dark&size=medium&type=tracks&id=${song.id}&app_id=1`} width="300" height="60"></iframe>
                            )
                        })) : ""
                    }
                    {/* { this.configureSetList() ? (
                        this.configureSetList().map((song, idx) => (
                            <li className={classes.song}key={idx}>{song.name}</li>
                        ))) : ""
                    } */}
                </ul>
            </div>
        )
    }
}

export default EventIndexShowItem;