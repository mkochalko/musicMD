import React from 'react';

class EventIndexShowItem extends React.Component {


    componentDidMount() {

        // this.props.getSetList(this.props.event)
    }

    render() {
        let test = this.props.event.performance
        console.log(test)
        return (
            <div>
                {this.props.event.displayName}

            </div>
        )
    }
}

export default EventIndexShowItem;