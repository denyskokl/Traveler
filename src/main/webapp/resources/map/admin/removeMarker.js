//############### Remove Marker Function ##############
function remove_marker(Marker)
{
    /* determine whether marker is draggable
     new markers are draggable and saved markers are fixed */
    if(Marker.getDraggable())
    {
        Marker.setMap(null); //just remove new marker
    }
    else
    {
        //Remove saved marker from DB and map using jQuery Ajax
        var mLatLang = Marker.getPosition().toUrlValue().split(","); //get marker position
        var myData = {latitude : mLatLang[0], longitude : mLatLang[1]}; //post variables
        $.ajax({
            type: "POST",
            url: "/remove_marker",
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(myData),
            success:function(data){
                Marker.setMap(null);
                alert(data);
            },
            error:function (xhr, ajaxOptions, thrownError){
                alert(thrownError); //throw any errors
            }
        });
    }
}
