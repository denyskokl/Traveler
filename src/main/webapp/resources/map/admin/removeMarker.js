function remove_marker(marker) {
    if (marker.getDraggable()) {
        marker.setMap(null);
    }
    else {
        var mLatLang = marker.getPosition().toUrlValue().split(",");
        var myData = {longitude: mLatLang[0], latitude: mLatLang[1]};
        $.ajax({
            type: "POST",
            url: "/remove_marker",
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(myData),
            success: function () {
                marker.setMap(null);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(thrownError);
            }
        });
    }
}