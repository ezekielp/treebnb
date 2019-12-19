import React from 'react';
import MarkerManager from '../../util/marker_manager';

class TreehouseSearchMap extends React.Component {
    constructor(props) {
        super(props);

        this.listenForMove = this.listenForMove.bind(this);
    }

    componentDidMount() {

        let startingLocation, theTreehouses;
        if (this.props.treehouses.length > 0) {
            // this.props.fetchAllTreehouses();
            startingLocation = {
                lat: this.props.treehouses[0].lat,
                lng: this.props.treehouses[0].lng
            }
        } else {
            startingLocation = {
                lat: 41.850033,
                lng: -87.6500523
            }
        }

        const mapOptions = {
            center: startingLocation,
            zoom: 10
        };

        // debugger;
        this.map = new google.maps.Map(this.mapNode);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.treehouses)

        // debugger;
        // this.markers = Object.values(this.MarkerManager.markers);
        // let bounds = new google.maps.LatLngBounds();
        // for (let i = 0; i < this.markers.length; i++) {
        //     bounds.extend(this.markers[i]);
        // }
        // this.map.fitBounds(bounds);
        // debugger;
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.treehouses);
        this.markers = Object.values(this.MarkerManager.markers);
        let bounds = new google.maps.LatLngBounds();
        // debugger;
        for (let i = 0; i < this.markers.length; i++) {
            // bounds.extend(this.markers[i]);
            let point = {
                lat: this.markers[i].position.lat(),
                lng: this.markers[i].position.lng()
            }
            bounds.extend(point);
        }
        this.map.fitBounds(bounds);
    }

    componentWillUnmount() {
        // this.CleanMarkerManager = new MarkerManager(null);
        // this.CleanMarkerManager.updateMarkers(this.props.treehouses);
        // this.MarkerManager.removeMarkers();
        // debugger;
    }

    listenForMove() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const boundsInstance = this.map.getBounds();
            let bounds = {
                northEast: {
                    lat: boundsInstance.getNorthEast().lat(),
                    lng: boundsInstance.getNorthEast().lng()
                },
                southWest: {
                    lat: boundsInstance.getSouthWest().lat(),
                    lng: boundsInstance.getSouthWest().lng()
                }
            };
            this.props.updateBounds(bounds);
        })
    }

    render() {
        return (
            <div
                id="map-container"
                ref={ map => this.mapNode = map }
            >
            </div>
        )
    }
}

export default TreehouseSearchMap;