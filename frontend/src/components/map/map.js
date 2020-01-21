import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Key from "./keys";
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

    render() {
        return (
            // Important! Always set the container height explicitly
            <div className={classes.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: Key }}
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