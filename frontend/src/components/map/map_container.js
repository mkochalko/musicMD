import * as TMAction from "../../actions/ticketmaster_actions";
import { connect } from 'react-redux';
import React from 'react';
import Map from "./map";

const mapDispatchtoProps = dispatch => ({
    getEvents: (latlng) => dispatch(TMAction.getEvents(latlng))
})


export default connect(null, mapDispatchtoProps)(Map);