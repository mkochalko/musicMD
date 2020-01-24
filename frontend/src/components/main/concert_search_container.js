import * as TMAction from "../../actions/songkick_actions";
import { connect } from 'react-redux';
import React from 'react';
import ConcertSearch from './concert_search.jsx';

const mapStateToProps = state => ({
    events: state.entities.songkick
})

const mapDispatchtoProps = dispatch => ({
    getMetroIdByClick: (latlng) => dispatch(TMAction.getMetroIdByClick(latlng))
})


export default connect(mapStateToProps, mapDispatchtoProps)(ConcertSearch);