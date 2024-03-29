import React from 'react';
import UserEventItem from './user_event_item';
import navClasses from '../../components/wrapper.module.css';
import classes from './user.module.css';
import NavBarContainer from '../nav/navbar_container';



class UserSplash extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {songIds: []};
        this.addSong = this.addSong.bind(this);

        this.formatTodaysDate = this.formatTodaysDate.bind(this);
        this.convertDateToNum = this.convertDateToNum.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserEvents().then(() => {
            this.props.fetchSongs()

            let events = document.getElementsByClassName("user_eventDiv__2qhai");
            let loading = document.getElementById("loading");
            // let setlist = document.getElementsByClassName("user_deezer__2UEMn")
            let setlistTitle = document.getElementsByClassName("user_setlistTitle__2U5LA")
            for (let i = 0; i < events.length; i++) {
                events[i].addEventListener("click", (e) => {
                    loading.setAttribute("style", "display: block");

                    setTimeout(() => {

                        loading.setAttribute("style", "display: none");
                    }, 6000)
                    let buttons = document.getElementsByClassName("library-add-song")
                    for (let j = 0; j < buttons.length; j++) {
                        buttons[j].innerHTML = "Add To Library"
                    }
                    this.setState({ songIds: this.props.events[e.currentTarget.id].songIds })
                    setlistTitle[0].setAttribute('style', 'display: block;')
                })
            }
        });
        
    }

    formatTodaysDate() {
        let d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return parseInt(`${year.toString()}${month}${day}`);
    }

    convertDateToNum(date) {
        return parseInt(date.split('-').join(''))
    }



    addSong(e) {
        this.props.addSongToUserLibrary(e.currentTarget.id)
        let button = document.getElementById(e.currentTarget.id)
        button.innerHTML = "✓"
    }

    render() {
        return (

            <div className={navClasses.wrapper}>
                <div id="loading">
                    <div id="record"></div>
                </div>
                <NavBarContainer className={navClasses.navContainer}></NavBarContainer>
                <div className={classes.profile}>

                
                    <div className={classes.userevents}>
                        <div className={classes.greetingDiv}>
                            <p className={classes.userGreeting}>Hey {this.props.currentUser.username[0].toUpperCase() + this.props.currentUser.username.slice(1)}!</p>
                            <p className={classes.userMessage}>Your Events:</p>
                        </div>
                        <div className={classes.userSplash}>
                            
                            <div className={classes.userEventItem} >
                                {
                                    Object.values(this.props.events).map((event, idx) => {
                                        if (this.formatTodaysDate() < this.convertDateToNum(event.date)) {
                                            return (
                                                <div key={idx}>
                                                    <UserEventItem onClick={this.eventClick} event={event} id={idx} />
    
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>

                        </div>

                    </div>
                    <div className={classes.deezer}>
                        <p className={classes.setlistTitle}>Show Setlist:</p>
                            <div className={classes.deezerContainer}>
                                {
                                    this.state.songIds.length > 0 ? (
                                        this.state.songIds.map((songId, idx) => {
                                            return (
                                                <div key={idx} className={classes.trackContainer}>
                                                    <label> 
                                                        <iframe className={classes.deezerTrack} title={idx + 1} scrolling="no" frameBorder="0" allowtransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=90&color=ff0000&layout=dark&size=medium&type=tracks&id=${songId}&app_id=1`} width="700" height="90"></iframe>
                                                    </label>
                                                    <button className={classes.addSong} id={songId} onClick={this.addSong}>Add to Library</button>
                                                </div>
                                            )
                                        })
                                    ) : <p className={classes.notSelected}>Click Event To View Songs</p>
                                }
                            </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default UserSplash;