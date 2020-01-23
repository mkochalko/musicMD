import React from 'react';

class EventsIndexItem extends React.Component {

    render() {
        // console.log(this.props.event)
        return (
            <li id={this.props.event.id}>
                {this.props.event.displayName}
            </li>
        )
    }
}

export default EventsIndexItem;
