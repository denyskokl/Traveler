function log() { // todo: delete after development
    console.log.apply(console, arguments);
}

function createdUserMarkerTitle(marker) {
    text =

        '<div class="detailBox">' +
            '<div class="titleBox">' +
                '<label>' + marker.message + '</label>' +
                    "<button objTrip=\"" + marker.markerId+ "\" class=\"addToTrip close\" aria-hidden=\"true\">Add to trip</button>" +
            '</div>' +
            '<div class="commentBox">' +
                '<p class="taskDescription">' + marker.address + '</p>' +
            '</div>' +
            '<div class="actionBox">' +
                '<span class="commentList1">' +
                    '<ul class="commentList">' +
                        commentMarker(marker) +
                    '</ul>' +
                '</span>' +
                '<div id="form-inline" class="form-inline" >' +
                    '<div class="form-group">' +
                        '<input id="form-control" class="form-control" type="text" placeholder="Your comments" />' +
                    '</div>' +
                    '<div class="form-group">' +
                        "<button objId=\"" + marker.markerId + "\" class=\"btn1 addComment btn btn-default\">Add</button>" +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    //todo FINISHED!!
    //var detailBox = $("<div/>", {
    //    class : "detailBox"
    //});
    //var titleBox = $("<div/>", {
    //   class : "titleBox"
    //});
    //var messageLabel = $("<label/>", {
    //   text: marker.message
    //});
    //var buttonAddToTrip = $("<button/>", {
    //   objTrip : marker.markerId,
    //    class : "addToTrip close",
    //    "aria-hidden" : true,
    //    text : "Add to trip"
    //});
    //var commentBox = $("<div/>", {
    //   class : "commentBox"
    //});
    //var taskDescription = $("<p/>", {
    //   class : "taskDescription",
    //    text : marker.address
    //});
    //var actionBox = $("<div/>", {
    //   class : "actionBox"
    //});
    //var commentList1 = $("<span/>", {
    //    class : "commentList1"
    //
    //});
    //var ul = $("<ul/>", {
    //    class : "commentList" + commentMarker(marker)
    //});
    //var divForm = $("<div/>", {
    //    id : "form-inline",
    //    class : "form-inline"
    //});
    //var formGroup = $("<div/>", {
    //   class : "form-group"
    //});
    //var inputForm = $("<input/>", {
    //   id : "form-control",
    //    class : "form-control",
    //    type : "text",
    //    placeholder : "Your comments"
    //
    //});
    //var divFormGroupButton = $("<div/>", {
    //   class : "form-group"
    //});
    //
    //var add = $("<button/>", {
    //    objId : marker.markerId,
    //    class : "btn1 addComment btn btn-default",
    //    text : "Add"
    //});
    //
    //
    //
    //log("____________________");
    //titleBox.appendTo(detailBox);
    //messageLabel.appendTo(titleBox);
    //buttonAddToTrip.appendTo(titleBox);
    //commentBox.appendTo(detailBox);
    //taskDescription.appendTo(commentBox);
    //actionBox.appendTo(detailBox);
    //commentList1.appendTo(actionBox);
    //ul.appendTo(commentList1);
    //divForm.appendTo(actionBox);
    //formGroup.appendTo(divForm);
    //inputForm.appendTo(formGroup);
    //divFormGroupButton.appendTo(divForm);
    //add.appendTo(divFormGroupButton);
    //log(detailBox[0].outerHTML);
    return text;
}

function commentMarker(marker) {
    var text = '';
    //todo send current user to frontend and change name
    for (var i = marker.comments.length - 1; i >= 0; i--) {
        text += '<li>' +
        '<span class="commentText">' +
        '<p class="">' + "some user" + ': ' + marker.comments[i].comment + '</p>' +
        '</span>' +
        '</li>';
    }
    //todo  finished!!!!
    //for (var i = marker.comments.length - 1; i >= 0; i--) {
    //
    //    var li = $("<li/>", {});
    //
    //    var commentText = $("<span/>", {
    //        class: "commentText"
    //    });
    //    var someUSer = $("<p/>", {
    //        class: "",
    //        text: "some user : " + marker.comments[i].comment
    //
    //    });
    //
    //
    //    log("@@@@@@@@@@@@@@@@@@@@");
    //
    //    someUSer.appendTo(commentText);
    //    commentText.appendTo(li);
    //    log(li[0].outerHTML);
    //}
    return text;
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
        $(commentMarker(marker)).appendTo($(".commentList"));
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

