import React from 'react';
import * as TMApiUtil from "../../util/ticketmaster_api_util";
import Map from "../map/map_container";
import classes from './concert_search.module.css';
import EventsIndexContainer from './events_index_container';


class ConcertSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        TMApiUtil.getEvents();
    }


    render() {
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
                    <div className={classes.eventIndex}>
                        <EventsIndexContainer />
                    </div>
                    <div className={classes.eventShow}>
                        <p>your event</p>
                    </div>
                    <footer>
                    </footer>
                </div>
            </div>
        );
    }
}

export default ConcertSearch;