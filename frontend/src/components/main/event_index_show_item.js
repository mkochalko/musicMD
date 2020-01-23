import React from 'react';

class EventIndexShowItem extends React.Component {
    constructor(props) {
        super(props)

        // this.state = { artist: {}}
    }


    componentDidMount() {
        console.log(this.props.event.performance)
        if (this.props.event.performance.length > 0) {
            let artist = this.props.event.performance[0].displayName;
            console.log(this.props)
            console.log(this.props.getSetlist([artist]))
        }
    }

    render() {
        // let test = this.props.event.performance
        return (
            <div>
                {/* {this.props.event.displayName} */}
                test
            </div>
        )
    }
}

export default EventIndexShowItem;