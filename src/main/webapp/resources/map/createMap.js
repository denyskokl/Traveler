jQuery(function($) {
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});
function initialize() {
    $.get("/markers").done(function(data) {
        var markers = [];

        for (var i = 0; i < data.length; i++) {
            var marker = [];
            marker.push(data[i].address);
            marker.push(data[i].longitude);
            marker.push(data[i].latitude);
            marker.push(data[i].message);
            markers.push(marker);
        }
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
    map.setTilt(45);


    function infoWindowContent(locationName,description){
        var pattern = '<div class="info_content">' +
            '<button onclick="myFunction()">Click me</button>' +
            '<h3>'+locationName+'</h3>' +
            '<a href="https://www.google.com">'+description+'</a>' +
            '<p>'+locationName+'</p>' + '</div>'
    }

    var infoWindowContent = [
        ['<div class="info_content">' +
        '<button onclick="myFunction()">Click me</button>' +
        '<h3>Lubava</h3>' +
        '<a href="https://www.google.com">=)-------</a>' +
        '<p>lubava</p>' + '</div>'],
        ['<div class="info_content">' +
        '<button onclick="myFunction()">Click me</button>' +
        '<h3>Kontrabas</h3>' +
        '<p>kontrabas</p>' +
        '</div>']
    ];

    var infoWindow = new google.maps.InfoWindow(), marker, i;


    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i][0]);
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