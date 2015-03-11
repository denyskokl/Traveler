//jQuery(function($) {
//    var script = document.createElement('script');
//    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
//    document.body.appendChild(script);
//});
globalMarkers = {};
function initialize() {
    $.get("/markers").done(function(markers) {
        globalMarkers = markers;
        addMarkers(globalMarkers);
        addEventClick();
    });
}
var rendererOptions = {
    draggable: true
};

var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
function addEventClick() {
    $(".addComment_js").click(function() {
        var objId = $(this).attr("objId");
        addComments(globalMarkers[objId]);
    })
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


    for (var i in markers) {
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
                addEventClick()
            }
        })(marker, i));

        map.fitBounds(bounds);
    }

    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });

    directionsDisplay.setMap(map);
}