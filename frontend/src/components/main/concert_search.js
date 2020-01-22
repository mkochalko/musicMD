import React from 'react';
import Map from "../map/map";
import classes from './concert_search.module.css';

class ConcertSearch extends React.Component {

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
                        <p>events index</p>
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