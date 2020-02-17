import React from 'react';
import classes from './event_index_show_item.module.css';


class EventIndexShowItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { };
        this.prevProps = {event: {id: null}};
        this.configureSetList = this.configureSetList.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.fetchAllMusicInfo = this.fetchAllMusicInfo.bind(this);
    }


    componentDidMount() {
        this.fetchAllMusicInfo()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.event.id !== this.props.event.id) {
            this.props.clearTracks();
            this.fetchAllMusicInfo();
            // document.getElementById('going').innerHTML = 'Add To Your Events';
        }
    }
            
    componentWillUnmount() {
        this.props.clearTracks();
    }

    configureSetList(setlist) {
        if (setlist === undefined) {
            return []
        } else if (setlist[0]) {
            let newSetlist;
            for (let i = 0; i < setlist.length; i++) {
                if (setlist[i].sets.set.length > 0) {
                    newSetlist = setlist[i].sets.set[0].song;
                }
            }
            return newSetlist;
        }
    }

    fetchAllMusicInfo() {
        if (this.props.event._embedded.attractions[0]) {
            let artist = this.props.event._embedded.attractions[0].name;
            this.props.getSetlist(artist).then(setlist => {
                let newSetlist = this.configureSetList(setlist.data.setlist)
                if (newSetlist) {
                    newSetlist.map(song => (
                        this.props.getTrackByInfo([this.props.event._embedded.attractions[0].name, song.name])
                    ))
                }
            });
            let loading = document.getElementById("loading");
            if (loading) {
                loading.setAttribute("style", "display: block");

                setTimeout(() => {

                    loading.setAttribute("style", "display: none");
                }, 2000)
            }
        } else {
            alert("No Songs Found")
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

        document.getElementById('going').innerHTML = 'Going!';
    }

    render() {

        console.log(this.props.events)
        if (this.props.event.dates.start.localDate) {
            return (
                <div className={classes.searchShowPage}>
                    <div className={classes.eventDetails}>
                        <div className={classes.eventName}>
                            <h1 className={classes.nameHeading}>{this.props.event.name}</h1>
                            <br />
                            <img className={classes.eventPic} height="180" width="320" src={this.props.event.images[0].url} alt={this.props.event.name} />
                            <br />
                            <h3>{this.props.event._embedded.venues[0].name}</h3>
                        </div>
                        <div className={classes.eventLocation}>
                            <p>{this.props.event._embedded.venues[0].address.line1}, {this.props.event._embedded.venues[0].city.name}, {this.props.event._embedded.venues[0].state.stateCode}</p>
                        </div>
                        <br />
                        <div className={classes.dateTime}>
                            Date: {
                                this.props.event.dates.start.localDate.split('-')[1] + '/' +
                                this.props.event.dates.start.localDate.split('-')[2] + '/' +
                                this.props.event.dates.start.localDate.split('-')[0]
                            }
                            <br />
                            <br />
                            Time: {
                                this.props.event.dates.start.localTime.split(':')[0] <= 12 ?
                                    this.props.event.data.start.localTime :
                                    (this.props.event.dates.start.localTime.split(':')[0] - 12) + ':' +
                                    this.props.event.dates.start.localTime.split(':')[1] + 'PM' 
                                    // this.props.event.dates.start.localTime.split(':')[2]
                            }
                        </div>
                        <div>
                            <button className={classes.goingButton} id="going" onClick={this.handleClick}><span>Add to Your Events</span></button>
                        </div>
                    </div>
                    
                    <div className={classes.setlistcontainer}>
                        <p className={classes.setlistTitle}>Setlist*</p>
                        <ul className={classes.setList}>
                            {Object.keys(this.props.deezer).length > 0 ? (
                                Object.values(this.props.deezer).map((song, idx) => (
                                    <label key={idx} >
                                        <iframe title={idx + 1} scrolling="no" frameBorder="0" allowtransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=300&height=60&color=ff0000&layout=dark&size=medium&type=tracks&id=${song.id}&app_id=1`} width="300" height="60" className={classes.deezerTracks}></iframe>
                                    </label>
                                ))) : <div>
                                    <h1>Setlist Information Not Found!</h1>
                                    <div>Setlist information is based on user suggestions</div>
                                    <div>Current setlist did not return any information</div>
                                    <div>Please Try Again Later</div>
                                </div>
                            }
                        </ul>
                        <p className={classes.setlistfm}>*Song titles provided by Setlist.fm</p>
                    </div>
                </div>
            )
        } else {
            alert("Error")
        }
    }

}

export default EventIndexShowItem;