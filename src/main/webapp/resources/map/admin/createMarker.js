function create_marker(MapPos, MapTitle, MapDesc, InfoOpenDefault, DragAble, map, iconPath) {
    var marker = new google.maps.Marker({
        position: MapPos,
        map: map,
        draggable: DragAble,
        animation: google.maps.Animation.DROP,
        title: "Hello World!",
        icon: iconPath
    });


    var contentString = $('<div class="marker-info-win">' +
    '<div class="marker-inner-win"><span class="info-content">' +
    '<h1 class="marker-heading">' + MapTitle + '</h1>' +
    MapDesc +
    '</span><button name="remove-marker" class="remove-marker" title="Remove Marker">Remove Marker</button>' +
    '</div></div>');


    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent(contentString[0]);

    var removeBtn = contentString.find('button.remove-marker')[0];

    var saveBtn = contentString.find('button.save-marker')[0];

    google.maps.event.addDomListener(removeBtn, "click", function (event) {
        remove_marker(marker);
    });

    if (typeof saveBtn !== 'undefined') {
        google.maps.event.addDomListener(saveBtn, "click", function (event) {
            var mReplace = contentString.find('span.info-content');
            var mName = contentString.find('input.save-name')[0].value;
            var mDesc = contentString.find('textarea.save-desc')[0].value;

            if (mName == '' || mDesc == '') {
                alert("Please enter Name and Description!");
            } else {
                save_marker(marker, mName, mDesc, mReplace);
            }
        });
    }

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

    if (InfoOpenDefault) {
        infowindow.open(map, marker);
    }
}