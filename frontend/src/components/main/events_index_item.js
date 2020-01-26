import React from 'react';
import classes from './event_idx_item.module.css';

class EventsIndexItem extends React.Component {

    render() {
        return (
            <li className={classes.eventIdxItem} id={this.props.event.id}>
                {this.props.event.name}
            </li>
        )
    }
}

export default EventsIndexItem;
