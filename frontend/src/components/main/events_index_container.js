import { connect } from 'react-redux';
import EventsIndex from './events_index';

const mapStateToProps = state => ({
    events: state.entities.ticketmaster
})

const mapDispatchToPros = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToPros
)(EventsIndex)