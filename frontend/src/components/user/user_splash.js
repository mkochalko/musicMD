import React from 'react';
import EventIndexItem from '../main/events_index_item';

class UserSplash extends React.Component {

    constructor({ currentUser, events, fetchEvents }) { 
        super({ currentUser, events, fetchEvents });
    }

    componentDidMount() {
        this.fetchEvents();
    }

    render() {
        return (
            <div className="user-splash">
                <div className="user-info">
                    <h3>Hey {this.currentUser.username}</h3>
                </div>
                <div className="user-events">
                    <ul>
                        {
                            this.events.map((event, idx) => (
                                <EventIndexItem event={event} key={idx} />
                            ))
                        }
                    </ul>
                </div>

            </div>
        )
    }

}

export default UserSplash;