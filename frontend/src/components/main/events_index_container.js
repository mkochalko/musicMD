import { connect } from 'react-redux';
import EventsIndex from './events_index';

const mapStateToProps = state => ({
    events: Object.values(state.entities.songkick)
});

const mapDispatchToPros = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToPros
)(EventsIndex);