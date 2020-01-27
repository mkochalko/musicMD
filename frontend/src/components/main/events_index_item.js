import React from 'react';
import classes from './event_idx_item.module.css';

class EventsIndexItem extends React.Component {

    render() {
        return (
            <li className={classes.eventIdxItem} id={this.props.event.id}>
                <div className={classes.eventName}>
                    {this.props.event.name}
                </div>
                <div className={classes.date}>
                    {this.props.event.dates.start.localDate}
                </div>
            </li>

        )
    }
}

export default EventsIndexItem;
