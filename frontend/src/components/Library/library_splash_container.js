import { connect } from 'react-redux';
import LibrarySplash from './library_splash';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    library: Object.values(state.entities.library)
})

// const mapDispatchToProps = dispatch => ({

// })

export default connect(
    mapStateToProps, null
)(LibrarySplash)