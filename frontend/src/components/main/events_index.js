import React from 'react';
import EventsIndexItem from './events_index_item';

class EventsIndex extends React.Component {

    render() {
        return (
            <ul>
                {
                    this.props.events.map((event, idx) => (
                        <EventsIndexItem key={idx} event={event} />
                    ))
                }
            </ul>
        )
    }
}

export default EventsIndex;