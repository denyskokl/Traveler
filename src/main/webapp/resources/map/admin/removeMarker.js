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
        var mLatLang = Marker.getPosition().toUrlValue(); //get marker position
        var myData = {del : 'true', latlang : mLatLang}; //post variables
        $.ajax({
            type: "POST",
            url: "map_process.php",
            data: myData,
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
