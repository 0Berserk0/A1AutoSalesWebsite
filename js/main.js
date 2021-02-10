// Regular map
function regular_map() {
    var var_location = new google.maps.LatLng(40.725118, -73.997699);

    var var_mapoptions = {
        center: var_location,
        zoom: 14
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "A1 Auto Sales | Roseburg Oregon"
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);

// Carousel options

$('.carousel').carousel({
    interval: 3000,
})