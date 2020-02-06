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
    }

    componentDidMount() {
        this.props.fetchUserEvents();
        
    }

    eventClick(e) {
        console.log(e);
        console.log("hello");

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
        setTimeout(() => {
            events = document.getElementsByClassName("user_eventDiv__2qhai");
            setlistTitle = document.getElementsByClassName("user_setlistTitle__2U5LA")
            for (let i = 0; i < events.length; i++) {
                events[i].addEventListener("click", (e) => {
                    that.setState({songIds: that.props.events[e.currentTarget.id].songIds})
                    console.log(setlistTitle);
                    setlistTitle[0].setAttribute('style', 'display: block;')
                })
            }
        }, 2000);

        
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
                <div className={navClasses.deezer}>
                    <p className={classes.setlistTitle}>Setlist:</p>
                        {
                            this.state.songIds.length > 0 ? (
                                this.state.songIds.map((songId, idx) => {
                                    // console.log(this.state.songIds);
                                    return (
                                        <label key={idx}> 
                                            <iframe className={classes.deezerTrack} title={idx + 1} scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=300&height=60&color=ff0000&layout=dark&size=medium&type=tracks&id=${songId}&app_id=1`} width="300" height="60"></iframe>
                                        </label>
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