import * as TMAction from "../../actions/ticketmaster_actions";
import { connect } from 'react-redux';
import React from 'react';
import ConcertSearch from './concert_search.jsx';

const mapStateToProps = state => ({
    events: state.entities.ticketmaster
})

const mapDispatchtoProps = dispatch => ({
    getMetroId: (latlng) => dispatch(TMAction.getMetroId(latlng))
})


export default connect(mapStateToProps, mapDispatchtoProps)(ConcertSearch);