import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import classes from "./map.module.css";
import Marker from "./marker";
const MapsAPI = `AIzaSyDCfgh5IMc65PWQRgMbVpFmjhR6vA-l4tg`






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
       
        let lat = e.lat;
        let lng = e.lng;
        this.setState({
            center: {
                lat: lat,
                lng: lng
            }
        })
        this.props.getMetroIdByClick(`${lat},${lng}`).then(this.props.resetState);
    }


    render() {

        return (
            <div className={classes.mapContainer}>
                <GoogleMapReact
                    onClick={this.handleClick}
                    bootstrapURLKeys={{ key: MapsAPI }}
                    center={this.state.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                    />
                </GoogleMapReact>
            </div>
        )
       
    }
}

export default SimpleMap;