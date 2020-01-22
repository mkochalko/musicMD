import React from 'react';

class EventIndexShowItem extends React.Component {

    render() {
        // console.log(this.props.event)
        return (
            <div>
                {this.props.event.name}
            </div>
        )
    }
}

export default EventIndexShowItem;