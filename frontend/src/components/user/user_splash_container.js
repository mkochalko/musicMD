import { connect } from 'react-redux';
import React from 'react';
import { fetchEvents } from '../../actions/event_actions';
import userSplash from './user_splash';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    events: state.entities.events
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(userSplash);