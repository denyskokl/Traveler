$(document).ready(function () {

    var mapCenter = new google.maps.LatLng(49.445077, 32.056129);
    var map;

    map_initialize();


    function map_initialize() {
        var googleMapOptions =
        {
            center: mapCenter,
            zoom: 13,
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            scaleControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("map-canvas"), googleMapOptions);

        $.get("/markers", function (markers) {
            jQuery.each(markers, function (key, value) {
                var name = $(this).attr('message');
                var address = '<p>' + $(this).attr('address') + '</p>';
                var point = new google.maps.LatLng(parseFloat($(this).attr('longitude')), parseFloat($(this).attr('latitude')));
                var contentString = '<div class="marker-info-win">' +
                    '<div class="marker-inner-win"><span class="info-content">' +
                    createdAdminMarkerTitle($(this)) +
                    '</span><button name="remove-marker" class="remove-marker" title="Remove Marker">Remove Marker</button>' +
                    '</div></div>';
                create_marker(point, name, contentString, false, false, map, 'http://localhost:8080/resources/img/pin_green.png');
            });
        });

        google.maps.event.addListener(map, 'rightclick', function (event) {
            var EditForm = '<p><div class="marker-edit">' +
                '<form action="/save_markers" method="POST" name="SaveMarker" id="SaveMarker">' +
                '<label for="pName"><span>Place Name :</span><input type="text" name="pName" class="save-name" placeholder="Enter Title" maxlength="40" /></label>' +
                '<label for="pDesc"><span>Address :</span><textarea name="pDesc" class="save-desc" placeholder="Enter Address" maxlength="150"></textarea></label>' +
                '</form>' +
                '</div></p><button name="save-marker" class="save-marker">Save Marker</button>';
            var contentString = '<div class="marker-info-win">' +
                '<div class="marker-inner-win"><span class="info-content">' +
                '<h1 class="marker-heading">' + 'New Marker' + '</h1>' +
                EditForm +
                '</span><button name="remove-marker" class="remove-marker" title="Remove Marker">Remove Marker</button>' +
                '</div></div>';
            create_marker(event.latLng, 'New Marker', contentString, true, true, map, 'http://localhost:8080/resources/img/pin_blue.png');
        });
    }
});

function createdAdminMarkerTitle(marker) {
    text = '<div class="detailBox">' +
    '<div class="titleBox">' +
    '<label>' + marker.attr('message') + '</label>' +
    '</div>' +
    '<div class="commentBox">' +
    '<p class="taskDescription">' + marker.attr('address') + '</p>' +
    '</div>' +
    '<div class="actionBox">' +
    '<span class="commentList1">' +
    '<ul class="commentList">' +
    commentAdminMarker(marker) +
    '</ul>' +
    '</span>' +
    '<div id="form-inline" class="form-inline" >' +
    '</div>' +
    '</div>' +
    '</div>';
    return text;
}
function commentAdminMarker(marker) {
    var text = '';
    for (var i = marker.attr('comments').length - 1; i >= 0; i--) {
        text += '<li>' +
        '<span class="commentText">' +
        '<p>' + marker.attr('comments')[i].user.login + ': ' + marker.attr('comments')[i].comment +
        '<button id="'+ marker.attr('comments')[i].commentId +'" type="button" class="close commentAdmin" aria-hidden="true">&times;</button></p>' +
        '</span>' +
        '</li>';
    }
    return text;
}
