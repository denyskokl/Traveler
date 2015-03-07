function remove_marker(Marker) {
    if (Marker.getDraggable()) {
        Marker.setMap(null);
    }
    else {
        var mLatLang = Marker.getPosition().toUrlValue().split(",");
        var myData = {longitude: mLatLang[0], latitude: mLatLang[1]};
        $.ajax({
            type: "POST",
            url: "/remove_marker",
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(myData),
            success: function (data, Httpstatus) {
                Marker.setMap(null);
                alert(Httpstatus);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(thrownError);
            }
        });
    }
}
