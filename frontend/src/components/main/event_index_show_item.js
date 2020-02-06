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
        let loading = document.getElementById("loading");
        if (loading) {
            loading.setAttribute("style", "display: block");

            setTimeout(() => {

                loading.setAttribute("style", "display: none");
            }, 2000)
        }
        if (this.props.event) {
            let artist = this.props.event._embedded.attractions[0].name;
            this.props.getSetlist(artist);
        }
    }


    componentDidMount() {
     
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
            let loading = document.getElementById("loading");
            if (loading) {
                loading.setAttribute("style", "display: block");

                setTimeout(() => {

                    loading.setAttribute("style", "display: none");
                }, 2000)
            }
        }
    }
            
    componentWillUnmount() {
        this.props.clearTracks();
    }

    configureSetList() {
        if (this.props.setListContainer[0]) {
        
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
        let songIds = [];


        for (let i = 0; i < Object.keys(this.props.deezer).length; i++) {
            songIds.push(Object.values(this.props.deezer)[i].id)
            let songObject = {
                artist: Object.values(this.props.deezer)[i].artist.name,
                songId: Object.values(this.props.deezer)[i].id,
                songName: Object.values(this.props.deezer)[i].title,
                userId: this.props.currentUser.id
            }
            this.props.createSong(songObject)
        }

        let event = {
            venue: this.props.event._embedded.venues[0].name,
            artist: this.props.event._embedded.attractions[0].name,
            address: `${this.props.event._embedded.venues[0].address.line1}, ${this.props.event._embedded.venues[0].city.name}, ${this.props.event._embedded.venues[0].state.stateCode}`,
            songIds: songIds,
            date: this.props.event.dates.start.localDate,
            userId: this.props.currentUser.id
        }
        this.props.postEvent(event)

      

    }

    render() {
        
        if (this.props.setListContainer[0] && this.prevProps.event.id !== this.props.event.id && Object.keys(this.props.deezer).length === 0) {
            let that = this;
            if (this.configureSetList()) {
                console.log(this.configureSetList());
                console.log(that.configureSetList());
                setTimeout(()=> { that.configureSetList().map(song => (
                    that.props.getTrackByInfo([that.props.event._embedded.attractions[0].name, song.name])
                ))},1500)
            }
        }
       
        return (
            <div className={classes.searchShowPage}>
                <div className={classes.eventDetails}>
                    <div className={classes.eventName}>
                        <h1>{this.props.event.name}</h1>
                        <br/>
                        <img height="180" width="320" src={this.props.event.images[0].url} alt={this.props.event.name}/> 
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
                        <button className={classes.goingButton} onClick={this.handleClick}>Get Prescription</button>
                    </div> 
                </div>
                <br />
                <ul className={classes.setList}>
                    { Object.keys(this.props.deezer).length > 0 ? (
                        Object.values(this.props.deezer).map((song, idx) => (
                            <label key={idx} >
                            <iframe title={idx + 1} scrolling="no" frameBorder="0" allowtransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=300&height=60&color=ff0000&layout=dark&size=medium&type=tracks&id=${song.id}&app_id=1`} width="300" height="60" className={classes.deezerTracks}></iframe>
                            </label>
                        ))) : ""
                    }
                </ul>
            </div>
        )
    }
}

export default EventIndexShowItem;