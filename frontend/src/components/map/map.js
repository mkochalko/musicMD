import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import classes from "./map.module.css";
import Marker from "./marker";
import axios from 'axios';
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
    fetchLocation() {
        axios.get(`/api/map/location?string=${this.props.city}`)
            .then(response => {
                console.log(response.data)
                let latlong = response.data.candidates[0].geometry.location;
                this.setState({
                    center: {
                        lat: latlong.lat,
                        lng: latlong.lng
                    }
                })
            }).catch(error => {
                console.log(error)
            })
    }
    componentDidMount() {
        this.fetchLocation();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.city !== this.props.city) {
            this.fetchLocation();
        }
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
        console.log(this.state.center)
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