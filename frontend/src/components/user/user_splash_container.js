import { connect } from 'react-redux';
import { fetchUserEvents } from '../../actions/event_actions';
import userSplash from './user_splash';
import { addSongToUserLibrary } from '../../actions/library_actions';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    events: state.entities.events
});

const mapDispatchToProps = dispatch => ({
    fetchUserEvents: () => dispatch(fetchUserEvents()),
    addSongToUserLibrary: (songId) => dispatch(addSongToUserLibrary(songId)),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(userSplash);