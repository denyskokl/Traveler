//############### Save Marker Function ##############
function save_marker(Marker, mName, mAddress, mType, replaceWin)
{
    //Save new marker using jQuery Ajax
    var mLatLang = Marker.getPosition().toUrlValue(); //get marker position
    var myData = {name : mName, address : mAddress, latlang : mLatLang, type : mType }; //post variables
    console.log(replaceWin);
    $.ajax({
        type: "POST",
        url: "map_process.php",
        data: myData,
        success:function(data){
            replaceWin.html(data); //replace info window with new html
            Marker.setDraggable(false); //set marker to fixed
            Marker.setIcon('http://PATH-TO-YOUR-WEBSITE-ICON/icons/pin_blue.png'); //replace icon
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });
}