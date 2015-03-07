//############### Save Marker Function ##############
function save_marker(Marker, mName, mAddress, replaceWin) {
    //Save new marker using jQuery Ajax
    var lat = Marker.getPosition().toUrlValue().split(",");

    var myData = {"message": mName, "address": mAddress, "longitude": lat[0], "latitude": lat[1]}; //post variables
    console.log(JSON.stringify(myData));

    $.ajax({
        type: "POST",
        url: "/save_marker",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(myData),
        success: function (marker) {
            console.log(marker);
            var v1 = "<h1 class=\"marker-heading\">" + marker.message + "</h1><p>" + marker.address + "</p>"
            replaceWin.html(v1); //replace info window with new html
            Marker.setDraggable(false); //set marker to fixed
            Marker.setIcon('http://babaweb3.alwaysdata.net/lemansdev2014/wp-content/themes/lemansdev/img/pin.png'); //replace icon
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError); //throw any errors
        }
    });
}