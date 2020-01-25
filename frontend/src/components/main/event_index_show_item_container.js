import { connect } from 'react-redux';
import EventIndexShowItem from './event_index_show_item';
import { getSetlist } from '../../actions/setlist_actions';
import { postEvent } from '../../actions/event_actions';
import { fetchSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => ({
    event: ownProps.event,
    setListContainer: state.entities.setlist,
    deezer: state.entities.deezer
})

const mapDispatchToProps = dispatch => ({
    getSetlist: (artist) => dispatch(getSetlist(artist)),
    postEvent: (event) => dispatch(postEvent(event)),
    fetchSong: (song) => dispatch(fetchSong(song))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventIndexShowItem);