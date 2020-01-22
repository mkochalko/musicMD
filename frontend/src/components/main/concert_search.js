import React from 'react';
<<<<<<< HEAD
import * as TMApiUtil from "../../util/ticketmaster_api_util";
import Map from "../map/map_container";

=======
import Map from "../map/map";
import classes from './concert_search.module.css';
>>>>>>> master

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
            <div>
<<<<<<< HEAD
                <h1>Concert Search</h1>
                <Map></Map>
                <button onClick={this.handleClick}>FUCK</button>
                <footer>
                </footer>
=======
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
                        <p>events index</p>
                    </div>
                    <div className={classes.eventShow}>
                        <p>your event</p>
                    </div>
                    <footer>
                    </footer>
                </div>
>>>>>>> master
            </div>
        );
    }
}

export default ConcertSearch;