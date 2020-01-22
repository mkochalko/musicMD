import { connect } from 'react-redux';
import EventsIndex from './events_index';

const eventsObj = {
    0: {
        venue: 'Chase',
        artist: 'Iron Maiden',
        date: '01/30/20'
    },
    1: {
        venue: 'Oracle',
        artist: 'Dead and Co',
        date: '01/28/20'
    }
}

const mapStateToProps = state => ({
    events: Object.values(eventsObj)
})

const mapDispatchToPros = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToPros
)(EventsIndex)