
$(document).ready(function() {

    var mapCenter = new google.maps.LatLng(49.445077, 32.056129); //Google map Coordinates
    var map;

    map_initialize(); // initialize google map

    //############### Google Map Initialize ##############
    function map_initialize()
    {
        var googleMapOptions =
        {
            center: mapCenter, // map center
            zoom: 13, //zoom level, 0 = earth view to higher value
            panControl: true, //enable pan Control
            zoomControl: true, //enable zoom control
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL //zoom control size
            },
            scaleControl: true, // enable scale control
            mapTypeId: google.maps.MapTypeId.ROADMAP // google map type
        };

        map = new google.maps.Map(document.getElementById("map-canvas"), googleMapOptions);

        //Load Markers from the XML File, Check (map_process.php)
        $.get("/markers", function (data) {
            $(data).each(function() {
                //Get user input values for the marker from the form
                var name      = $(this).attr('message');
                var address   = '<p>'+ $(this).attr('address') +'</p>';
                //var type      = $(this).attr('type');
                var point     = new google.maps.LatLng(parseFloat($(this).attr('longitude')),parseFloat($(this).attr('latitude')));
                //call create_marker() function for xml loaded maker
                create_marker(point, name, address, false, false, map);
            });
        });

        //$.get("/markers").done(function(data) {
        //    var markers = [];
        //
        //    for (var i = 0; i < data.length; i++) {
        //        var marker = [];
        //        marker.push(data[i].address);
        //        marker.push(data[i].longitude);
        //        marker.push(data[i].latitude);
        //        marker.push(data[i].message);
        //        markers.push(marker);
        //    }
        //
        //});

        //drop a new marker on right click
        google.maps.event.addListener(map, 'rightclick', function(event) {
            //Edit form to be displayed with new marker
            var EditForm = '<p><div class="marker-edit">'+
                '<form action="ajax-save.php" method="POST" name="SaveMarker" id="SaveMarker">'+
                '<label for="pName"><span>Place Name :</span><input type="text" name="pName" class="save-name" placeholder="Enter Title" maxlength="40" /></label>'+
                '<label for="pDesc"><span>Description :</span><textarea name="pDesc" class="save-desc" placeholder="Enter Address" maxlength="150"></textarea></label>'+
                '<label for="pType"><span>Type :</span> <select name="pType" class="save-type"><option value="restaurant">Rastaurant</option><option value="bar">Bar</option>'+
                '<option value="house">House</option></select></label>'+
                '</form>'+
                '</div></p><button name="save-marker" class="save-marker">Save Marker Details</button>';

            //call create_marker() function
            create_marker(event.latLng, 'New Marker', EditForm, true, true, map, 'http://PATH-TO-YOUR-WEBSITE-ICON/icons/pin_blue.png');
        });
    }
});

