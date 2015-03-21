globalMarkers = {};
function initialize() {
    $.post("/routes").done(function(routesId) {
        var routePanel = document.getElementById('routes_panel');
        var routeButtons = [];
        $.each(routesId, function(index, value) {
            routeButtons.push('<button routeId=' + value + ' class="uRoute">route' + value + '</button>');
        });
        routePanel.innerHTML = routeButtons.join('');
        $.each($(routePanel).find('button.uRoute') , function(index, value) {
            google.maps.event.addDomListener(value, "click", function (event) {
                showTrip($(this).attr("routeId"));
            });
        });
    });

    $.get("/markers").done(function(markers) {
        globalMarkers = markers;
        addMarkers(globalMarkers);
    });

    $('#route_button').click(function() {
        rId = null;
        alert('yra');
    });
}

var rendererOptions = {
    draggable: true
};


function showTrip(routeId) {
    $.post("/route",  {
        routeId : routeId
    }, function (route) {
        calcRoute(route);
    }).fail(function() {
        alert("can't show trip");
    });
}

var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

function addEventClick(mReplace) {
    $(".addComment").click(function() {
        var objId = $(this).attr("objId");
        addComments(globalMarkers[objId], mReplace);
    });

    $(".addToTrip").click(function() {
        var objTrip = $(this).attr("objTrip");
        var routeId = 1;
        addToTrip(routeId, objTrip);
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


    for (var i in markers) {
        var position = new google.maps.LatLng(markers[i].longitude, markers[i].latitude);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i].address
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                var userMarkTitle = $(createdUserMarkerTitle(markers[i]));
                var mReplace = userMarkTitle.find('span.commentList1');
                infoWindow.setContent(userMarkTitle[0]);
                infoWindow.open(map, marker);
                addEventClick(mReplace)
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