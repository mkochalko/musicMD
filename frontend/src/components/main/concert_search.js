import React from 'react';
import * as TMApiUtil from "../../util/ticketmaster_api_util";
import Map from "../map/map_container";


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
                <h1>Concert Search</h1>
                <Map></Map>
                <button onClick={this.handleClick}>FUCK</button>
                <footer>
                </footer>
            </div>
        );
    }
}

export default ConcertSearch;