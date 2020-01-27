import React from 'react';
import UserEventItem from './user_event_item';
import navClasses from '../../components/wrapper.module.css';
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
                <div className="user-splash">
                    <div className="user-info">
                        <h3>Hey {this.props.currentUser.username}</h3>
                    </div>
                    <div className="user-events">
                        <ul>
                            {
                                Object.values(this.props.events).map((event, idx) => (
                                    <UserEventItem event={event} key={idx} />
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>

        )
    }

}

export default UserSplash;