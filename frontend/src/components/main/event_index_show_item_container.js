import { connect } from 'react-redux';
import EventIndexShowItem from './event_index_show_item';
import { getSetlist } from '../../actions/setlist_actions';

const mapStateToProps = (state, ownProps) => ({
    event: ownProps.event,
    setList: state.entities.setList
})

const mapDispatchToProps = dispatch => ({
    getSetlist: (artist) => dispatch(getSetlist(artist))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventIndexShowItem);