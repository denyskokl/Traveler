function createHtmlTag(nameTag, attrs) {
    return $("<" + nameTag + "/>", attrs);
}

function save_marker(Marker, mName, mAddress, replaceWin) {
    var lat = Marker.getPosition().toUrlValue().split(",");

    var myData = {"message": mName, "address": mAddress, "longitude": lat[0], "latitude": lat[1]};
    console.log(JSON.stringify(myData));

    $.ajax({
        type: "POST",
        url: "/save_marker",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(myData),
        success: function (marker) {
            var markerHeading = createHtmlTag("h1", {class : "marker-heading", text : marker.message});
            var markerAddress = createHtmlTag("p", {test : marker.address});
            markerAddress.appendTo(markerHeading);
            replaceWin.html(markerHeading);
            return markerHeading[0].outerHTML;
            Marker.setDraggable(false);
            Marker.setIcon('http://localhost:8080/resources/img/pin_green.png');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });

}