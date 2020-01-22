import React from 'react';
import EventIndexItem from '../main/events_index_item';

class UserSplash extends React.Component {

    constructor(props) { 
        super(props);
    }

    componentDidMount() {
        // this.fetchEvents();
    }

    render() {
        console.log(this.props)
        return (
            <div className="user-splash">
                <div className="user-info">
                    <h3>Hey {this.props.currentUser.username}</h3>
                </div>
                <div className="user-events">
                    <ul>
                        {
                            Object.values(this.props.events).map((event, idx) => (
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