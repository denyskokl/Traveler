//############### Save Marker Function ##############
function save_marker(Marker, mName, mAddress, replaceWin)
{
    //Save new marker using jQuery Ajax
    var lat = Marker.getPosition().toUrlValue();
    console.log(latitude = lat.substring(0, 9));
    console.log(longitude = lat.substr(10, 20));

    var myData = {"message" : mName, "address" : mAddress, "latitude" : latitude, "longitude" : longitude}; //post variables
    console.log(JSON.stringify(myData));

    $.ajax({
        type: "POST",
        url: "/save_markers",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(myData),
        success: function(data) {
            console.log(data);
                //replaceWin.html(data); //replace info window with new html
                Marker.setDraggable(false); //set marker to fixed
                Marker.setIcon('http://babaweb3.alwaysdata.net/lemansdev2014/wp-content/themes/lemansdev/img/pin.png'); //replace icon
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });
}