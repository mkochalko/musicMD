import React from 'react';
import UserEventItem from './user_event_item';
import navClasses from '../../components/wrapper.module.css';
import classes from './user.module.css';
import NavBarContainer from '../nav/navbar_container';



class UserSplash extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {eventId: 0}
        this.eventClick = this.eventClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserEvents();
    }

    eventClick(e) {
        // console.log(e.currentTarget)
    }

    render() {
        
        return (
            <div className={navClasses.wrapper}>
                <NavBarContainer className={navClasses.navContainer}></NavBarContainer>
                <div className={navClasses.userSplash}>
                    <div className={classes.greetingDiv}>
                        <p className={classes.userGreeting}>Hey {this.props.currentUser.username[0].toUpperCase() + this.props.currentUser.username.slice(1)}</p>
                        <p className={classes.userMessage}>Your prescriptions:</p>
                    </div>
                    <div className={classes.userEventItem} >
                        {
                            Object.values(this.props.events).map((event, idx) => (
                                <UserEventItem onClick={this.eventClick} event={event} key={idx} />
                            ))
                        }
                    </div>
                </div>
                <div>
                        {
                            // this.props.events[this.state.eventId]
                        }
                </div>
            </div>

        )
    }

}

export default UserSplash;