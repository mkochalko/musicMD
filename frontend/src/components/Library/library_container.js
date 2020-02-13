import { connect } from 'react-redux';
import LibraryIndex from './library_index';
import { fetchUserLibrary, deleteSongFromUserLibrary} from '../../actions/library_actions';

const mapStateToProps = state => ({
    library: Object.values(state.entities.library)
})

const mapDispatchToProsp = dispatch => ({
    fetchUserLibrary: () => dispatch(fetchUserLibrary),
    deleteSongFromUserLibrary: (songId) => dispatch(deleteSongFromUserLibrary(songId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProsp
)(LibraryIndex);