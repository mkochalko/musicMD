import React from 'react';
import EventsIndexItem from './events_index_item';
import classes from './event_idx_item.module.css';

class EventsIndex extends React.Component {

    render() {
        return (
            <ul className={classes.eventItemContainer}>
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