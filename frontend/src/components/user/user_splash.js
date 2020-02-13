import React from 'react';
import UserEventItem from './user_event_item';
import navClasses from '../../components/wrapper.module.css';
import classes from './user.module.css';
import NavBarContainer from '../nav/navbar_container';



class UserSplash extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {songIds: []};
        this.eventClick = this.eventClick.bind(this);
        this.addSong = this.addSong.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserEvents().then(() => {
            this.props.fetchSongs()

            let events = document.getElementsByClassName("user_eventDiv__2qhai");
            let setlistTitle = document.getElementsByClassName("user_setlistTitle__2U5LA")
            for (let i = 0; i < events.length; i++) {
                events[i].addEventListener("click", (e) => {
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

    componentDidUpdate(prevProps) {
    }

    eventClick(e) {
        console.log(e);
        console.log("hello");

    }

    addSong(e) {
        this.props.addSongToUserLibrary(e.currentTarget.id)
        let button = document.getElementById(e.currentTarget.id)
        button.innerHTML = "Added!"

        //Toggle button
    }

    // getDeezer(array) {
    //     for (let i=0; i < array.length; i++) {
    //         return (
    //         <iframe scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=300&height=200&color=ff0000&layout=dark&size=medium&type=tracks&id=${songId}&app_id=1`} width="300" height="200"></iframe>

    //     }
    // }

    render() {
        let events;
        let that = this;
        let setlistTitle;
        // setTimeout(() => {
        //     events = document.getElementsByClassName("user_eventDiv__2qhai");
        //     setlistTitle = document.getElementsByClassName("user_setlistTitle__2U5LA")
        //     for (let i = 0; i < events.length; i++) {
        //         events[i].addEventListener("click", (e) => {
        //             that.setState({songIds: that.props.events[e.currentTarget.id].songIds})
        //             console.log(setlistTitle);
        //             setlistTitle[0].setAttribute('style', 'display: block;')
        //         })
        //     }
        // }, 2000);

        
        return (
            <div className={navClasses.wrapper}>
                <NavBarContainer className={navClasses.navContainer}></NavBarContainer>
                <div className={classes.greetingDiv}>
                    <p className={classes.userGreeting}>Hey {this.props.currentUser.username[0].toUpperCase() + this.props.currentUser.username.slice(1)}</p>
                    <p className={classes.userMessage}>Your prescriptions:</p>
                </div>
                <div className={classes.userSplash}>
                    
                    <div className={classes.userEventItem} >
                        {
                            Object.values(this.props.events).map((event, idx) => (
                                <UserEventItem onClick={this.eventClick} event={event} key={idx} id={idx} />
                            ))
                        }
                    </div>

                </div>
                <div className={classes.deezer}>
                    <p className={classes.setlistTitle}>Setlist:</p>
                        {
                            this.state.songIds.length > 0 ? (
                                this.state.songIds.map((songId, idx) => {
                                    // console.log(this.state.songIds);
                                    return (
                                        <div key={idx}>
                                            <label> 
                                                <iframe className={classes.deezerTrack} title={idx + 1} scrolling="no" frameBorder="0" allowtransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=300&height=60&color=ff0000&layout=dark&size=medium&type=tracks&id=${songId}&app_id=1`} width="300" height="60"></iframe>
                                            </label>
                                            <button className="library-add-song" id={songId} onClick={this.addSong}>Add To Library</button>
                                        </div>
                                    )
                                })
                            ): "hello"
                        }
                </div>
            </div>

        )
    }
}


export default UserSplash;