import React from 'react';
import * as TMApiUtil from "../../util/songkick_api_util";
import Map from "../map/map_container";
import classes from './concert_search.module.css';
import EventsIndexContainer from './events_index_container';
import EventIndexShowItemContainer from './event_index_show_item_container';

class ConcertSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selectedEvent: {} }

        this.handleClick = this.handleClick.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
    }

    componentDidMount() {
        let latlng = '37.7749,-122.4194'
        this.props.getMetroIdByClick(latlng)
        // THE BLEOW IS NOT RIGHT, we should change this but jus wanted to get it working for testing purposes -Matt
        setTimeout( () => this.setState({ selectedEvent: this.props.events[0] }), 1000)
    }

    handleClick(e) {
        e.preventDefault();
        TMApiUtil.getMetroIdByClick();
    }

    handleEventClick(e) {
        e.preventDefault();
        let selectedEventId = e.target.id;
        for (let i = 0; i < this.props.events.length; i++) {
            if (selectedEventId == this.props.events[i].id ) {
                this.setState({selectedEvent: this.props.events[i]})
            }
        }
    }


    render() {
        // console.log(this.props)
        // console.log(this.state.selectedEvent)
        return (
            <div className={classes.indexSearchContainer}>
                <div className={classes.searchBar}>
                    <input 
                        type="text" 
                        placeholder="Search for concerts in your area!"
                        className={classes.searchInput}
                    />
                </div>
                <div className={classes.searchPage}>
                    <div className={classes.map}>
                        <Map></Map>
                    </div>
                    <div className={classes.eventIndex} onClick={this.handleEventClick}>
                        {this.props.events.length > 0 ? <EventsIndexContainer /> : null }
                    </div>
                    <div className={classes.eventShow}>
                        <EventIndexShowItemContainer event={this.state.selectedEvent} /> 
                    </div>
                </div>
            </div>
        );
    }
}

export default ConcertSearch;