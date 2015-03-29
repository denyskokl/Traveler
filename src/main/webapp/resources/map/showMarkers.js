function log() { // todo: delete after development
    console.log.apply(console, arguments);
}

function createdUserMarkerTitle(marker) {

    var detailBox = createHtmlTag("div", {class : "detailBox"});
    var titleBox = createHtmlTag("div", {class : "titleBox"});
    var messageLabel = createHtmlTag("label", {text: marker.message});
    var buttonAddToTrip = createHtmlTag("button", {
       objTrip : marker.markerId,
        class : "addToTrip close",
        "aria-hidden" : true,
        text : "Add to trip"
    });
    var commentBox = createHtmlTag("div", {class : "commentBox"});
    var taskDescription = createHtmlTag("p", {
       class : "taskDescription",
        text : marker.address
    });
    var actionBox = createHtmlTag("div", {
       class : "actionBox"
    });
    var commentList1 = createHtmlTag("span", {class : "commentList1"});
    var ul = createHtmlTag("ul", {
        class : "commentList"
    });
    var divForm = createHtmlTag("div", {
        id : "form-inline",
        class : "form-inline"
    });
    var formGroup = createHtmlTag("div", {class : "form-group"});
    var inputForm = createHtmlTag("input", {
       id : "form-control",
        class : "form-control",
        type : "text",
        placeholder : "Your comments"
    });
    var divFormGroupButton = createHtmlTag("div", {class : "form-group"});
    var add = createHtmlTag("button", {
        objId : marker.markerId,
        class : "btn1 addComment btn btn-default",
        text : "Add"
    });
    titleBox.appendTo(detailBox);
    messageLabel.appendTo(titleBox);
    buttonAddToTrip.appendTo(titleBox);
    commentBox.appendTo(detailBox);
    taskDescription.appendTo(commentBox);
    actionBox.appendTo(detailBox);
    commentList1.appendTo(actionBox);
    commentMarker(marker, ul);
    ul.appendTo(commentList1);
    divForm.appendTo(actionBox);
    formGroup.appendTo(divForm);
    inputForm.appendTo(formGroup);
    divFormGroupButton.appendTo(divForm);
    add.appendTo(divFormGroupButton);
    return detailBox[0].outerHTML;
}

function createHtmlTag(nameTag, attrs) {
    return $("<" + nameTag + "/>", attrs);
}

function commentMarker(marker, parentElement) { //TODO rename
    //todo send current user to frontend and change name
    for (var i = marker.comments.length - 1; i >= 0; i--) {
        var li = createHtmlTag("li", {});
        var commentText = createHtmlTag("span", {class: "commentText"});
        var someUSer = createHtmlTag("p", {
            class: "",
            text: "some user : " + marker.comments[i].comment
        });
        someUSer.appendTo(commentText);
        commentText.appendTo(li);
        li.appendTo(parentElement);
    }
}

function addComments(marker, pieceOfCode) {
    var valueElement = $('#form-control');
    var comment = $.trim(valueElement.val());
    if (comment.length <= 0) {
    } else {
        var commentObject = JSON.stringify({
            comment: comment,
            marker: {
                latitude: marker.latitude,
                longitude: marker.longitude
            }
        });
        marker.comments.push({comment: comment});
        $.ajax({
            url: "/comment",
            type: "POST",
            contentType: 'application/json',
            data: commentObject
        });
        $(".commentList").empty();
        $(commentMarker(marker, $(".commentList")));
    }
    valueElement.val(""); // clear input
}

function addToTrip(routeId, markerId) {
    $.post("/routeByMarker",  {
        routeId : routeId,
        markerId : markerId
    }, function (route) {
        globalRouteId = route.routeId;
        calcRoute(route);
    }).fail(function() {
        alert("error");
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

