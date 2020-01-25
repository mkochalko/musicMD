import { connect } from 'react-redux';
import EventIndexShowItem from './event_index_show_item';
import { getSetlist } from '../../actions/setlist_actions';
import { postEvent } from '../../actions/event_actions';
import { fetchSong } from '../../actions/song_actions';
import {getTrackByInfo} from "../../actions/deezer_actions";
import { findTrack } from "../../util/deezer_util";


const mapStateToProps = (state, ownProps) => ({
    event: ownProps.event,
    setListContainer: state.entities.setlist,
    deezer: state.entities.deezer
})

const mapDispatchToProps = dispatch => ({
    getSetlist: (artist) => dispatch(getSetlist(artist)),
    postEvent: (event) => dispatch(postEvent(event)),
    fetchSong: (song) => dispatch(fetchSong(song)),
    getTrackByInfo: (trackInfo) => dispatch(getTrackByInfo(trackInfo)),
    findTrack: (trackInfo) => dispatch(findTrack(trackInfo))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventIndexShowItem);