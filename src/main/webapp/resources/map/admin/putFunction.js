$(document).ready(function () {

    var mapCenter = new google.maps.LatLng(49.445077, 32.056129); //Google map Coordinates
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

        $.get("/markers", function (data) {
            $(data).each(function () {
                var name = $(this).attr('message');
                var address = '<p>' + $(this).attr('address') + '</p>';
                var point = new google.maps.LatLng(parseFloat($(this).attr('longitude')), parseFloat($(this).attr('latitude')));
                create_marker(point, name, address, false, false, map);
            });
        });

        google.maps.event.addListener(map, 'rightclick', function (event) {
            var EditForm = '<p><div class="marker-edit">' +
                '<form action="/save_markers" method="POST" name="SaveMarker" id="SaveMarker">' +
                '<label for="pName"><span>Place Name :</span><input type="text" name="pName" class="save-name" placeholder="Enter Title" maxlength="40" /></label>' +
                '<label for="pDesc"><span>Address :</span><textarea name="pDesc" class="save-desc" placeholder="Enter Address" maxlength="150"></textarea></label>' +
                '</form>' +
                '</div></p><button name="save-marker" class="save-marker">Save Marker</button>';

            create_marker(event.latLng, 'New Marker', EditForm, true, true, map, 'http://localhost:8080/resources/img/pin_blue.png');
        });
    }
});

