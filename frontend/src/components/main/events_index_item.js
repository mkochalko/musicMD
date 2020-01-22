import React from 'react';

class EventsIndexItem extends React.Component {

    render() {

        return (
            <li>
                {this.props.event.artist}
            </li>
        )
    }
}

export default EventsIndexItem;
