Music MD: When your doctor can't cure you, it's time to get a second opinion. 

## [MusicMD](https://musicmd.herokuapp.com/#/)

## Overview

Music MD is the gateway to your next show. Whether you're a seasoned concert-goer or getting your metaphorical feet wet for the first time, we have everything you need to find concerts, check out tunes from the artists you're interested in, and save both the concert details and songs into your personal library.  

### How it works? 

The application provides the user with a way to generate upcoming concerts based on a specific location search! The search populates a list of upcoming shows and allows the user to click any one of them, revealing event details and a list of songs. If the user opts to save the event, the concert and playlist will be added to their profile; they then have quick access to concert details and can easily revisit the playlist at their leisure. Each user also has a master library to keep track of song they want to keep listening to; with the simple click of a button, songs can be added and removed from the library with ease.

## Features

### Search Function

Our search function will allow the user to either click on our map or use our text bar to search locations for events. On a search we call the Ticketmaster API to compile a list of concerts and events. This allows users to see the specific details for any upcoming events. Using API calls to setlist.fm and deezer, we are able to populate the event setlist and playable songs for the user to listen to. 

![Search Page](https://github.com/mkochalko/musicMD/blob/master/frontend/public/SearchFeature.png)

The code below shows the code for our event info and setlist component when a user selects a searched event. This was a critical part of our application becaue of the multiple api calls we were required to make in sequence before we are able to render the proper information on the page. 

```import React from 'react';
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
            document.getElementById('going').innerHTML = 'Get Prescription';
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


        if (this.props.event.dates.start.localDate) {
            return (
                <div className={classes.searchShowPage}>
                    <div className={classes.eventDetails}>
                        <div className={classes.eventName}>
                            <h1 className={classes.nameHeading}>{this.props.event.name}</h1>
                            <br />
                            <img height="180" width="320" src={this.props.event.images[0].url} alt={this.props.event.name} />
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
                                    this.props.event.dates.start.localTime.split(':')[1] + ':' +
                                    this.props.event.dates.start.localTime.split(':')[2]
                            }
                        </div>
                        <div>
                            <button className={classes.goingButton} id="going" onClick={this.handleClick}></button>
                        </div>
                    </div>
                    <br />
                    <div className={classes.setlistcontainer}>
                        <p className={classes.setlistTitle}>Setlist</p>
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
                        <p className={classes.setlistfm}>Song titles provided by Setlist.fm</p>
                    </div>
                </div>
            )
        } else {
            alert("Error")
        }
    }

}

export default EventIndexShowItem;
```

![](https://github.com/mkochalko/musicMD/blob/master/frontend/public/images/MusicMDGif.gif)

## Group Members
#### Backend Lead - [Jon Lai](https://github.com/jonjonlai) (Backend Team)
#### Flex - [Kit Patel](https://github.com/ankitspatel1145) (Backend Team)
#### Frontend Lead - [Barrett Helzel](https://github.com/bhelzel) (Frontend Team)
#### Team Lead - [Matt Kochalko](https://github.com/mkochalko) (Frontend Team)

## Technologies Used

### MERN Stack
This project is build using the MERN stack(MongoDB, Express.js, React and Node.js). MERN stack allows us to use mainly JavaScript to create a well designed interactive website with great UX/UI. 

### Multiple API Implementation
* #### Google Maps API
  * Display search results on the page for events in a specific location with markers on each location
* #### Ticketmaster API
  * Gather upcoming concert information to list all upcoming events
* #### SetList API
  * Populate the most recent set list for a specific artist to then generate a playlist for the user to listen to
* #### Deezer API
  * Once a setlist is populated, Deezer will allow for music to be shown and played directly from the site for great user experience.


### Git Workflow
* As new software developers, this is our first experience working with a team. We all see the importance of being very meticulous with our workflow to make sure there are no issues. Our individual roles on the team mean the git workflow is a huge part of this project. Using a proper git workflow and checking in with each over whenever a question arises, has lead to a successful workflow throughout the project.
