import React from 'react';

class EventsIndexItem extends React.Component {

    render() {
        return (
            <li id={this.props.event.id}>
                {this.props.event.name}
                {this.props.event._embedded.venues[0].name}
            </li>
        )
    }
}

export default EventsIndexItem;
