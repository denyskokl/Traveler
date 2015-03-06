function create_marker(MapPos, MapTitle, MapDesc, InfoOpenDefault, DragAble, map, iconPath)
{
    //new marker
    var marker = new google.maps.Marker({
        position: MapPos,
        map: map,
        draggable: DragAble,
        animation: google.maps.Animation.DROP,
        title:"Hello World!",
        icon: iconPath
    });

    //marker = new google.maps.Marker({
    //    position: position,
    //    map: map,
    //    title: markers[i][0]
    //});

    //Content structure of info Window for the Markers
    var contentString = $('<div class="marker-info-win">'+
    '<div class="marker-inner-win"><span class="info-content">'+
    '<h1 class="marker-heading">'+MapTitle+'</h1>'+
    MapDesc +
    '</span><button name="remove-marker" class="remove-marker" title="Remove Marker">Remove Marker</button>'+
    '</div></div>');


    //Create an infoWindow
    var infowindow = new google.maps.InfoWindow();
    //set the content of infoWindow
    infowindow.setContent(contentString[0]);

    //Find remove button in infoWindow
    var removeBtn   = contentString.find('button.remove-marker')[0];

    //Find save button in infoWindow
    var saveBtn     = contentString.find('button.save-marker')[0];

    //add click listner to remove marker button
    google.maps.event.addDomListener(removeBtn, "click", function(event) {
        //call remove_marker function to remove the marker from the map
        remove_marker(marker);
    });

    if(typeof saveBtn !== 'undefined') //continue only when save button is present
    {
        //add click listner to save marker button
        google.maps.event.addDomListener(saveBtn, "click", function(event) {
            var mReplace = contentString.find('span.info-content'); //html to be replaced after success
            var mName = contentString.find('input.save-name')[0].value; //name input field value
            var mDesc  = contentString.find('textarea.save-desc')[0].value; //description input field value

            if(mName =='' || mDesc =='')
            {
                alert("Please enter Name and Description!");
            }else{
                //call save_marker function and save the marker details
                save_marker(marker, mName, mDesc, mReplace);
            }
        });
    }

    //add click listner to save marker button
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker); // click on marker opens info window
    });

    if(InfoOpenDefault) //whether info window should be open by default
    {
        infowindow.open(map,marker);
    }
}