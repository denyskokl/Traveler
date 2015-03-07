jQuery(function ($) {
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});
function initialize() {
    $.get("/markers").done(function (markers) {
        addMarkers(markers);
    });
}

function addMarkers(markers) {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 4,
        center: new google.maps.LatLng(49.445077, 32.056129)
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var infoWindow = new google.maps.InfoWindow(), marker, i;


    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i].longitude, markers[i].latitude);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: createdUserMarkerTitle(markers[i])
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow.setContent(marker.title);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        map.fitBounds(bounds);
    }

    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
}