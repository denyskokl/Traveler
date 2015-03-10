function createdUserMarkerTitle(marker) {
    //todo як навісити на кнопку id="btn-comment" подію з передачею обьекта(маркера)
    globalMarker = marker;
    text = '<div class="detailBox">' +
    '<div class="titleBox">' +
    '<label>' + marker.message + '</label>' +
    '<button onclick="addToTrip()" type="button" class="close" aria-hidden="true" >Add to trip</button>' +
    '</div>' +
    '<div class="commentBox">' +
    '<p class="taskDescription">' + marker.address + '</p>' +
    '</div>' +
    '<div class="actionBox">' +
    '<ul class="commentList">' +
    commentMarker(marker) +
    '</ul>' +
    '<div id="form-inline" class="form-inline" >' +
    '<div class="form-group">' +
    '<input id="form-control" class="form-control" type="text" placeholder="Your comments" />' +
    '</div>' +
    '<div class="form-group">' +
    '<button id="btn-comment" onclick="addComments()" class="btn1 btn btn-default">Add</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';
    return text;
}
function commentMarker(marker) {
    var text = '';
    for (var i = marker.comments.length - 1; i >= 0; i--) {
        text += '<li>' +
        '<div class="commentText">' +
        '<p class="">' + marker.comments[i].user.login + ': ' + marker.comments[i].comment + '</p>' +
        '</div>' +
        '</li>';
    }
    return text;
}

function addComments() {
    var comment = $('#form-control').val();
    console.log(comment);
    var commentObject = JSON.stringify({
        comment: comment,
        marker: {
            latitude: globalMarker.latitude,
            longitude: globalMarker.longitude
        }
    });
    console.log(commentObject);
    $.ajax({
        url: "/comment",
        type: "POST",
        contentType: 'application/json',
        accept: 'application/json',
        dataType: 'json',
        data: commentObject,
        success: function (response) {
            alert(response);
        },
        error: function (err) {
            alert(JSON.stringify(err));
        }
    });
}

function addToTrip() {
    $.ajax({
        url: "/getAllRoute",
        type: "POST",
        contentType: 'application/json',
        accept: 'application/json',
        dataType: 'json',
        data: JSON.stringify(globalMarker),
        success: function (route) {
            calcRoute(route)
        },
        error: function (err) {
            alert(JSON.stringify(err));
        }
    });
}

function calcRoute(route) {
    var directionsService = new google.maps.DirectionsService();

    if (route.markers.length > 1) {
        var start = new google.maps.LatLng(route.markers[0].longitude, route.markers[0].latitude);
        var end = new google.maps.LatLng(route.markers[route.markers.length - 1]
            .longitude, route.markers[route.markers.length - 1].latitude);

        if (route.markers.length > 2) {
            var waypts = [];
            for (var i = 1; i < route.markers.length - 1; i++) {
                waypts.push({
                    location: new google.maps.LatLng(route.markers[i]
                        .longitude, route.markers[i].latitude),
                    stopover: true
                });
            }
        }

        var request = {
            origin: start,
            destination: end,
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.WALKING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                var route = response.routes[0];
                var summaryPanel = document.getElementById('directions_panel');
                summaryPanel.innerHTML = '';
                for (var i = 0; i < route.legs.length; i++) {
                    var routeSegment = i + 1;
                    summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>';
                    summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
                    summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
                    summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
                }
            }
        });
    }
}

