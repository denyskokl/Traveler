$(document).ready(function () {

    var mapCenter = new google.maps.LatLng(49.445077, 32.056129);
    var map;

    map_initialize();

    function map_initialize() {
        var googleMapOptions =
        {
            center: mapCenter,
            zoom: 13,
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            scaleControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("map-canvas"), googleMapOptions);

        $.get("/markers", function (markers) {
            jQuery.each(markers, function (key, value) {
                var name = $(this).attr('message');
                var address = '<p>' + $(this).attr('address') + '</p>';
                var point = new google.maps.LatLng(parseFloat($(this).attr('longitude')), parseFloat($(this).attr('latitude')));
                var contentString =
                    '<div class="marker-info-win">' +
                        '<div class="marker-inner-win">' +
                    '       <span class="info-content">' +
                                createdAdminMarkerTitle($(this)) +
                            '</span>' +
                            '<button name="remove-marker" class="remove-marker" title="Remove Marker">Remove Marker</button>' +
                        '</div>' +
                    '</div>';

                //todo: FINICHED! checkout
                //var markerInfiWin = $("<div/>", {
                //    class : "marker-info-win"
                //});
                //var markerInnnewiWin = $("<div/>", {
                //    class : "marker-inner-win"
                //});
                //var infoContent = $("<span/>", {
                //    class : "info-content" +  createdAdminMarkerTitle($(this))
                //});
                //var removeMarkerButton = $("<button/>", {
                //    name : "remove-marker",
                //    class : "remove-marker",
                //    title : "Remove Marker",
                //    text : "Remove marker"
                //});
                //
                //removeMarkerButton.appt(markerInfiWin);
                //infoContent.appendTo(markerInnnewiWin);
                //markerInnnewiWin.appendTo(markerInfiWin);


                create_marker(point, name, contentString, false, false, map, 'http://localhost:8080/resources/img/pin_green.png');
            });
        });

        google.maps.event.addListener(map, 'rightclick', function (event) {
            var EditForm =
                '<div class="marker-edit">' +
                    '<form action="/save_markers" method="POST" name="SaveMarker" id="SaveMarker">' +
                        '<div class="col-md-12 col-xs-12 col-lg-12>' +
                            '<div class="form-group>' +
                                '<label for="pName">' +
                                    '<input type="text" name="pName" class="save-name form-control" placeholder="Enter Title" maxlength="40" />' +
                                '</label>' +
                            '</div>' +
                            '<div class = "form-group">' +
                                '<label for="pDesc">' +
                                    '<textarea name="pDesc" style="resize: none;" class="save-desc form-control" placeholder="Enter Address" maxlength="150"></textarea>' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                    '</form>' +
                '</div>' +
                '<button name="save-marker" class="save-marker btn btn-primary">Save Marker</button>';
//todo : додати ше кнопку button
            //var markerEdit = $("<div/>", {
            //       class : "marker-edit"
            //    });
            //var formAction = $("<form/>", {
            //    action : "/save_markers",
            //    method : "POST",
            //    name : "SaveMarker",
            //    id : "SaveMarker"
            //});
            //var sizeForm = $("<div/>", {
            //   class : "col-md-12 col-xs-12 col-lg-12"
            //});
            //var formGroup = $("<div/>", {
            //   class : "form-group"
            //});
            //var pName = $("<label/>", {
            //   for : "pName"
            //});
            //var title = $("<input/>", {
            //   type : "text",
            //    name : "pName",
            //    class : "save-name form-control",
            //    placeholder : "Enter Title",
            //    maxlength : "40"
            //});
            //var formGroupArea = $("<div/>", {
            //    class : "form-group"
            //});
            //var pDesc = $("<label/>", {
            //    for : "pDesc"
            //});
            //var textArea = $("<textarea/>", {
            //    name : "pDesc",
            //    style : "resize: none",
            //    class : "save-desc form-control",
            //    placeholder : "Enter Address",
            //    maxlength : "150"
            //});
            //var saveButton = $("<button/>", {
            //   name : "save-marker",
            //    class : "save-marker btn btn-primary",
            //    text : "Save Marker"
            //});
            //
            //
            //log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
            //formAction.appendTo(markerEdit);
            //sizeForm.appendTo(formAction);
            //formGroup.appendTo(sizeForm);
            //pName.appendTo(formGroup);
            //title.appendTo(pName);
            //formGroupArea.appendTo(sizeForm);
            //pDesc.appendTo(formGroupArea);
            //textArea.appendTo(pDesc);
            //saveButton.appendTo();
            //
            //log(markerEdit[0].outerHTML);
            var contentString =
                '<div class="marker-info-win">' +
                    '<div class="marker-inner-win">' +
                        '<span class="info-content">' +
                            '<h1 class="marker-heading">' + 'New Marker' + '</h1>' + EditForm +
                        '</span>' +
                        '<button name="remove-marker" class="remove-marker btn btn-danger" title="Remove Marker">Remove Marker</button>' +
                    '</div>' +
                '</div>';
//todo: не можу провірити
            //var markerInfoWinText = $("<div/>", {
            //   class : "marker-info-win"
            //});
            //
            //var markerInnerWin = $("<div/>", {
            //    class : "marker-inner-win"
            //});
            //var infoContent = $("<span/>", {
            //    class : "info-content" + EditForm
            //});
            //var markerHeading = $("<h1/>", {
            //   class : "marker-heading" + "New Marker"
            //});
            //var removeMarkerButton = $("<button/>", {
            //    name : "remove-marker",
            //    class : "remove-marker btn btn-danger",
            //    title:"Remove Marker",
            //    text : "Remove Marker"
            //});
            //console.log("########################")
            //markerInnerWin.appendTo(markerInfoWinText);
            //infoContent.appendTo(markerInnerWin);
            //markerHeading.appendTo(infoContent);
            //removeMarkerButton.appendTo(markerInnerWin);
            //
            //console.log(markerInfoWinText[0].outerHTML);
            create_marker(event.latLng, 'New Marker', contentString, true, true, map, 'http://localhost:8080/resources/img/pin_blue.png');
        });
    }
});

function createdAdminMarkerTitle(marker) {
    text =
        '<div class="detailBox">' +
            '<div class="titleBox">' +
                '<label>' + marker.attr('message') + '</label>' +
            '</div>' +
            '<div class="commentBox">' +
                '<p class="taskDescription">' + marker.attr('address') + '</p>' +
            '</div>' +
            '<div class="actionBox">' +
                '<span class="commentList1">' +
                    '<ul class="commentList">' + commentAdminMarker(marker) +
                    '</ul>' +
                '</span>' +
                '<div id="form-inline" class="form-inline" >' + '</div>' +
            '</div>' +
        '</div>';

    //todo: finished!!!!
    //var detailBox = $("<div/>", {
    //   class : "detailBox"
    //});
    //var titleBox = $("<div/>", {
    //    class : "titleBox"
    //});
    //var markerAttr = $("<label/>", {
    //    text : marker.attr('message')
    //});
    //var commentBox = $("<div/>", {
    //    class : "commentBox"
    //});
    //var taskDescription = $("<p/>", {
    //    class : "taskDescription",
    //    text : marker.attr('address')
    //});
    //var actionBox = $("<div/>", {
    //    class : "actionBox"
    //});
    //var commentList1 = $("<span/>", {
    //   class : "commentList1"
    //});
    //var commentList = $("<ul/>", {
    //    class : "commentList"
    //    //todo: cant add function
    //      //commentAdminMarker(marker)
    //
    //});
    //var formInline = $("<div/>", {
    //    class : "form-inline"
    //});
    //log("!!!!!!!!!!!!!!!!!! ");
    //titleBox.appendTo(detailBox);
    //markerAttr.appendTo(titleBox);
    //commentBox.appendTo(detailBox);
    //taskDescription.appendTo(commentBox);
    //actionBox.appendTo(detailBox);
    //commentList1.appendTo(actionBox);
    //commentList.appendTo(commentList1);
    //formInline.appendTo(actionBox);
    //console.log(detailBox[0].outerHTML);

    return text;
}
function commentAdminMarker(marker) {
    var text = '';
    for (var i = marker.attr('comments').length - 1; i >= 0; i--) {
        text +=
            '<li>' +
                '<span class="commentText">' +
                    '<p>' + marker.attr('comments')[i].user.login + ': ' + marker.attr('comments')[i].comment +
                        '<button id="' + marker.attr('comments')[i].commentId + '" type="button" class="close commentAdmin" aria-hidden="true">&times;</button>' +
                    '</p>' +
                '</span>' +
            '</li>';
        //todo : FINISHED all
        //var li = $("<li/>", {
        //
        //})
        //var commentText = $("<span/>", {
        //   class : "commentText"
        //});
        //var comments = $("<p/>", {
        //   text :  marker.attr('comments')[i].user.login + ': ' + marker.attr('comments')[i].comment
        //});
        //var buttonId = $("<button/>", {
        //    id : marker.attr('comments')[i].commentId,
        //    type : "button",
        //    class : "close commentAdmin",
        //    "aria-hidden" : "true"
        //});
        //commentText.appendTo(li);
        //comments.appendTo(commentText);
        //buttonId.appendTo(comments);
        //console.log(li[0].outerHTML);


    }
    return text;
}
