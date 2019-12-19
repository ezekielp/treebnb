export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    // createTreehouseInfoWindow(treehouse) {
    //     let content = '<div id="content">' +
    //         '<div id="siteNotice">' +
    //         '</div>' +
    //         `<h1 id="firstHeading" class="firstHeading">${treehouse.name}</h1>` +
    //         '<div id="bodyContent">'
    //         // `<div className="treehouse-idx-photo">` +
    //         // `<div className="treehouse-idx-photo-child" style={{ backgroundImage: `url(${ treehouse.photoUrls[0] })`}}>
    //         //         </div>
    //         //     </div>` +
    //         // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    //         // 'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    //         // '(last visited June 22, 2009).</p>' +
    //         // '</div>' +
    //         // '</div>';
    // }

    createMarkerFromTreehouse(treehouse) {
        let { lat, lng } = treehouse;
        let marker = new google.maps.Marker({
            position: { lat, lng },
            map: this.map
        });
        this.markers[treehouse.id] = marker;
        // let infoWindow = this.createTreehouseInfoWindow(treehouse);
        // Add the event listener
    }

    updateMarkers(treehouses) {
        treehouses.forEach(treehouse => {
            this.createMarkerFromTreehouse(treehouse);
            // if (!this.markers[treehouse.id]) {
            //     this.createMarkerFromTreehouse(treehouse);
            // }
        });
        // debugger;
    }

    removeMarkers() {
        // debugger;
        // THE BELOW DOESN'T WORK BECAUSE "THIS" IS UNDEFINED
        // INSIDE THE FOREACH APPARENTLY
        Object.keys(this.markers).forEach(treehouseId => {
            // debugger;
            if (this.markers[treehouseId]) {
                this.markers[treehouseId].setMap(null);
            }
            this.markers = {};
        })
    }
}