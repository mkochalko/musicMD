import React from 'react';
import Map from "../map/map_container";
import classes from './concert_search.module.css';
import navClasses from '../../components/wrapper.module.css';

import EventsIndexContainer from './events_index_container';
import EventIndexShowItemContainer from './event_index_show_item_container';
import NavBarContainer from '../nav/navbar_container';
import axios from 'axios';
import { timingSafeEqual } from 'crypto';


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
        this.setState({events: this.props.events})
    }

   

    componentWillMount() {
        let loading = document.getElementById("loading");
        if (loading) {
            loading.setAttribute("style", "display: block");

            setTimeout(() => {

                loading.setAttribute("style", "display: none");
            }, 4000)
        }
        if (this.props.event) {
            let artist = this.props.event._embedded.attractions[0].name;
            this.props.getSetlist(artist);
        }
      
    }

    resetState() {
        this.setState({selectedEvent: 0})
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let target = e.target;
        let that = this;
        this.props.getMetroIdByText(this.state.search)
            .then((data) => {
                console.log(data)
                if (data.length > 0) {
                    that.resetState()
                    let city = target.innerHTML.split(`value="`)[1].split(`">`)[0];
                    console.log(city)
                    that.setState({ city: city })
                }
            })
    } 

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleEventClick(e) { 
        let selectedEventId = e.target.id;
        for (let i = 0; i < this.props.events.length; i++) {
            if (selectedEventId === this.props.events[i].id ) {
                this.setState({selectedEvent: i})
            }
        }
    }


    render() {
       
        return (
            <div className={navClasses.wrapper}>
                <NavBarContainer className={navClasses.navContainer}></NavBarContainer>
                <div className={classes.indexSearchContainer}>
                    <div className={classes.titleDiv}>Music MD</div>
                    <div className={classes.searchBar} onSubmit={this.handleSubmit}>
                    <form >
                        <input
                            type="text"
                            placeholder="Search by City!"
                            className={classes.searchInput}
                            onChange={this.update('search')}
                            value={this.state.search}
                        />
                        <input className={classes.submit} type="submit" value="SEARCH" />
                    </form>

                    </div>
                    <div className={classes.searchPage}>
                        <div className={classes.map}>
                            <Map city={this.state.city} resetState={this.resetState}></Map>
                        </div>
                        <div className={classes.eventIndex} onClick={this.handleEventClick}>
                            {this.props.events.length > 0 ? <EventsIndexContainer events={this.state.events} /> : <div>No Events Found</div>}
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
