import * as TMAction from "../../actions/songkick_actions";
import { connect } from 'react-redux';
import Map from "./map";

const mapDispatchtoProps = dispatch => ({
    getMetroIdByClick: (latlng) => dispatch(TMAction.getMetroIdByClick(latlng))
})


export default connect(null, mapDispatchtoProps)(Map);