import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { MapsAPI } from "../../config/keys";
// const MapsAPI = require('../../config/keys').MapsAPI
import classes from "./map.module.css";
import Marker from "./marker";



class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 37.7749,
            lng: -122.4194
        },
        zoom: 11
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = this.props;
    }
    
    handleClick(e) {
        // e.preventDefault();

        // console.log(e);
        let lat = e.lat;
        let lng = e.lng;
        this.setState({
            center: {
                lat: lat,
                lng: lng
            }
        })
        this.props.getMetroIdByClick(`${lat},${lng}`).then(this.props.resetState);
        // console.log(this.props.getMetroIdByClick(`${lat},${lng}`));

        // this.props.getEvents(`${lat},${lng}`)
    }

    handleMarker(e) {
        e.preventDefault();

        let lat = e.lat;
        let lng = e.lng;
        console.log(e.lat);
        console.log(e.lng);
        
    }


    render() {
        return (
            // Important! Always set the container height explicitly
            <div className={classes.mapContainer}>
                <GoogleMapReact
                    onClick={this.handleClick}
                    bootstrapURLKeys={{ key: window.MapsAPI }}
                    center={this.state.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        // onClick={this.handleMarker}
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        // text="Trailer Park"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;