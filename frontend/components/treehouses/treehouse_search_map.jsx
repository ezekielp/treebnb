import React from 'react';
import MarkerManager from '../../util/marker_manager';

class TreehouseSearchMap extends React.Component {
    constructor(props) {
        super(props);

        this.listenForMove = this.listenForMove.bind(this);
    }

    componentDidMount() {
        const firstTreehouseLocation = {
            lat: this.props.treehouses[0].lat,
            lng: this.props.treehouses[0].lng,
        }

        const mapOptions = {
            center: firstTreehouseLocation,
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.treehouses)
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.treehouses);
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