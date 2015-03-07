//jQuery(function($) {
//    var script = document.createElement('script');
//    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
//    document.body.appendChild(script);
//});

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var chicago = new google.maps.LatLng(49.445077, 32.056129);
    var mapOptions = {
        zoom: 6,
        center: chicago
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    directionsDisplay.setMap(map);
}

function calcRoute() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var waypts = [];
    var checkboxArray = document.getElementById('waypoints');
    for (var i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray.options[i].selected == true) {
            waypts.push({
                location:checkboxArray[i].value,
                stopover:true});
        }
    }

    $.get("/markers").done(function(data) {
        var vasya = new google.maps.LatLng(data[0].longitude, data[0].latitude);
        var petya = new google.maps.LatLng(data[1].longitude, data[1].latitude);

        var request = {
            origin: vasya,
            destination: end,
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING
        };
            sd = request;
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                var route = response.routes[0];
                var summaryPanel = document.getElementById('directions_panel');
                summaryPanel.innerHTML = '';
                // For each route, display summary information.
                for (var i = 0; i < route.legs.length; i++) {
                    var routeSegment = i + 1;
                    summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>';
                    summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
                    summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
                    summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
                }
            }
        });
    });
}

google.maps.event.addDomListener(window, 'load', initialize);