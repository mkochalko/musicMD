import React from 'react';
import UserEventItem from './user_event_item';
import navClasses from '../../components/wrapper.module.css';
import classes from './user.module.css';
import NavBarContainer from '../nav/navbar_container';



class UserSplash extends React.Component {

    constructor(props) { 
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserEvents();
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
                    <div className={classes.userEventItem}>
                        {
                            Object.values(this.props.events).map((event, idx) => (
                                <UserEventItem event={event} key={idx} />
                            ))
                        }
                    </div>
                </div>
            </div>

        )
    }

}

export default UserSplash;