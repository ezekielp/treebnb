export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    createMarkerFromTreehouse(treehouse) {
        let { lat, lng } = treehouse;
        let marker = new google.maps.Marker({
            position: { lat, lng },
            map: this.map
        });
        this.markers[treehouse.id] = marker;
    }

    updateMarkers(treehouses) {
        treehouses.forEach(treehouse => {
            if (!this.markers[treehouse.id]) {
                this.createMarkerFromTreehouse(treehouse);
            }
        });
    }
}



