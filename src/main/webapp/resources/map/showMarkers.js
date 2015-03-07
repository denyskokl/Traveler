function createdUserMarkerTitle (marker) {
    var text = '<h1 id="firstHeading" class="firstHeading">' +
        marker.address + '</h1>'+
        '<div id="bodyContent">'+
        marker.message +
        '</div>' +
        '';


    return text;
}