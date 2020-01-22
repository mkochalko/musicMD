import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { MapsAPI } from "../../config/keys";
// const MapsAPI = require('../../config/keys').MapsAPI
import classes from "./map.module.css";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 44.6488,
            lng: -63.5752
        },
        zoom: 11
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.
    }
    
    handleClick(e) {
        // e.preventDefault();

        console.log(e);
        let lat = e.lat;
        let lng = e.lng;
        this.props.getMetroIdByClick(`${lat},${lng}`);
        console.log(this.props.getMetroIdByClick(`${lat},${lng}`));

        // this.props.getEvents(`${lat},${lng}`)
    }


    render() {
        return (
            // Important! Always set the container height explicitly
            <div className={classes.mapContainer}>
                <GoogleMapReact
                    onClick={this.handleClick}
                    bootstrapURLKeys={{ key: MapsAPI }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                        text="Trailer Park"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;