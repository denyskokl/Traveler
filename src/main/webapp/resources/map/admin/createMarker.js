function create_marker(MapPos, MapTitle, MapDesc, InfoOpenDefault, DragAble, map, iconPath) {
    var marker = new google.maps.Marker({
        position: MapPos,
        map: map,
        draggable: DragAble,
        animation: google.maps.Animation.DROP,
        title: MapTitle,
        icon: iconPath
    });


    var contentString = $(MapDesc);

    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(contentString[0]);

    var removeBtn = contentString.find('button.remove-marker')[0];

    var saveBtn = contentString.find('button.save-marker')[0];

    var deleteCommentBtns = contentString.find('button.commentAdmin');

    google.maps.event.addDomListener(removeBtn, "click", function (event) {
        if(confirm("You really wont delete marker?")) {
            remove_marker(marker);
        }

    });

    if (typeof deleteCommentBtns !== 'undefined') {
        $.each(deleteCommentBtns, function(index, value ) {
            google.maps.event.addDomListener(value, "click", function (event) {
                var commentId = $(this).attr("id");
                var mLatLang = marker.getPosition().toUrlValue().split(",");
                var myData = {longitude: mLatLang[0], latitude: mLatLang[1]};
                var comment = {commentId: commentId, marker: myData};

                remove_comment(comment, contentString.find('span.commentList1'))
            });
        });
    }

    if (typeof saveBtn !== 'undefined') {
        google.maps.event.addDomListener(saveBtn, "click", function (event) {
            var mReplace = contentString.find('span.info-content');
            var mName = contentString.find('input.save-name')[0].value;
            var mDesc = contentString.find('textarea.save-desc')[0].value;

            if (mName == '' || mDesc == '') {
                alert("Please enter Name and Description!");
            } else {
                save_marker(marker, mName, mDesc, mReplace);
            }
        });
    }

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
    });

    if (InfoOpenDefault) {
        infoWindow.open(map, marker);
    }
}