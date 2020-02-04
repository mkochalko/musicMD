import React from 'react';
import * as TMApiUtil from "../../util/songkick_api_util";
import Map from "../map/map_container";
import classes from './concert_search.module.css';
import navClasses from '../../components/wrapper.module.css';

import EventsIndexContainer from './events_index_container';
import EventIndexShowItemContainer from './event_index_show_item_container';
import NavBarContainer from '../nav/navbar_container';


class ConcertSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selectedEvent: 0 }
        this.state.search = ""; 
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    componentDidMount() {
        let latlng = '37.7749,-122.4194'
        this.props.getMetroIdByClick(latlng)
    }

    // componentDidUpdate(prevProps) {
    //     // debugger
    //     console.log(prevProps)
    //     if (prevProps.events.length === 0 && this.props.events.length !== 0) {
    //         this.setState({ selectedEvent: this.props.events[0] })
    //     }
    // }

    resetState() {
        this.setState({selectedEvent: 0})
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.getMetroIdByText(this.state.search).then(this.props.resetState);;

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleEventClick(e) { 
        e.preventDefault();
        // debugger;
        console.log(e.target)
        let selectedEventId = e.target.id;
        for (let i = 0; i < this.props.events.length; i++) {
            if (selectedEventId == this.props.events[i].id ) {
                this.setState({selectedEvent: i})
            }
        }
    }


    render() {
        // debugger
        // console.log(this.props.events.length)
        // console.log(this.props.events[this.state.selectedEvent])
        return (
            <div className={navClasses.wrapper}>
                <NavBarContainer className={navClasses.navContainer}></NavBarContainer>
                <div className={classes.indexSearchContainer}>
                    <div className={classes.searchBar} onSubmit={this.handleSubmit}>
                        <form >
                            <input
                                type="text"
                                placeholder="Search for concerts by city!"
                                className={classes.searchInput}
                                onChange={this.update('search')}
                                value={this.state.search}
                            />
                            <input type="submit" value="SEARCH" />
                        </form>

                    </div>
                    <div className={classes.searchPage}>
                        <div className={classes.map}>
                            <Map resetState={this.resetState}></Map>
                        </div>
                        <div className={classes.eventIndex} onClick={this.handleEventClick}>
                            {this.props.events.length > 0 ? <EventsIndexContainer /> : null}
                        </div>
                        <div className={classes.eventShow}>
                            {this.props.events.length > 0 && Object.values(this.props.setlist) ? <EventIndexShowItemContainer event={this.props.events[this.state.selectedEvent]} /> : null}
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ConcertSearch;