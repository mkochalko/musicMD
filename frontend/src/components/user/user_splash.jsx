import React from 'react';
import UserEventItem from './user_event_item';

class UserSplash extends React.Component {

    constructor(props) { 
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserEvents();
        // let eventArray = Object.values(events).map(eventId => this.props.fetchUserEvent(eventId));
    }

    render() {
        // console.log(this.props.events);
        return (
            <div className="user-splash">
                <div className="user-info">
                    <h3>Hey {this.props.currentUser.username}</h3>
                </div>
                <div className="user-events">
                    <ul>
                        <li>Event</li>
                    </ul>
                </div>

            </div>
        )
    }

}

export default UserSplash;


// {
//     this.props.events.eventIds.map((eventId, idx) => (
//         <UserEventItem
//             eventId={eventId}
//             fetchUserEvent={this.props.fetchUserEvent}
//             key={idx}
//         />
//     ))
// }