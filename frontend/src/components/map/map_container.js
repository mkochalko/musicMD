import * as TMAction from "../../actions/ticketmaster_actions";
import { connect } from 'react-redux';
import React from 'react';
import Map from "./map";

const mapDispatchtoProps = dispatch => ({
    getMetroId: (latlng) => dispatch(TMAction.getMetroId(latlng))
})


export default connect(null, mapDispatchtoProps)(Map);