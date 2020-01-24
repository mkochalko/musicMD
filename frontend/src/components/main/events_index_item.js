import React from 'react';

class EventsIndexItem extends React.Component {

    render() {
        return (
            <li id={this.props.event.id}>
                {this.props.event.name}
            </li>
        )
    }
}

export default EventsIndexItem;
