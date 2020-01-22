import React from 'react';
import UserEventItem from './user_event_item';

class UserSplash extends React.Component {

    constructor(props) { 
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        console.log(this.props);
        return (
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
        )
    }

}

export default UserSplash;