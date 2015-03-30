function createHtmlTag(nameTag, attrs) {
    return $("<" + nameTag + "/>", attrs);
}
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
                var markerInfWin = createHtmlTag("div", {class: "marker-info-win"});
                var markerInnerWin = createHtmlTag("div", {class: "marker-inner-win"});
                var infoContent = createHtmlTag("span", {class: "info-content"});
                var removeMarkerButton = createHtmlTag("button", {
                    name: "remove-marker",
                    class: "remove-marker",
                    title: "Remove Marker",
                    text: "Remove marker"
                });
                markerInnerWin.appendTo(markerInfWin);
                infoContent.appendTo(markerInnerWin);
                infoContent.append(createdAdminMarkerTitle($(this)));
                removeMarkerButton.appendTo(markerInnerWin);
                create_marker(point, name, markerInfWin[0].outerHTML, false, false, map, 'http://localhost:8080/resources/img/pin_green.png');
                return markerInfWin[0].outerHTML;
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
//            log("-------------------");
//
//                var markerEdit = $("<div/>", {
//                    class: "marker-edit"
//                });
//                var formAction = $("<form/>", {
//                    action: "/save_markers",
//                    method: "POST",
//                    name: "SaveMarker",
//                    id: "SaveMarker"
//                });
//                var sizeForm = $("<div/>", {
//                    class: "col-md-12 col-xs-12 col-lg-12"
//                });
//                var formGroup = $("<div/>", {
//                    class: "form-group"
//                });
//                var pName = $("<label/>", {
//                    for: "pName"
//                });
//                var title = $("<input/>", {
//                    type: "text",
//                    name: "pName",
//                    class: "save-name form-control",
//                    placeholder: "Enter Title",
//                    maxlength: "40"
//                });
//                var formGroupArea = $("<div/>", {
//                    class: "form-group"
//                });
//                var pDesc = $("<label/>", {
//                    for: "pDesc"
//                });
//                var textArea = $("<textarea/>", {
//                    name: "pDesc",
//                    style: "resize: none",
//                    class: "save-desc form-control",
//                    placeholder: "Enter Address",
//                    maxlength: "150"
//                });
//                var saveButton = $("<button/>", {
//                    name: "save-marker",
//                    class: "save-marker btn btn-primary",
//                    text: "Save Marker"
//                });
//
//
//                log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
//                formAction.appendTo(markerEdit);
//                sizeForm.appendTo(formAction);
//                formGroup.appendTo(sizeForm);
//                pName.appendTo(formGroup);
//                title.appendTo(pName);
//                formGroupArea.appendTo(sizeForm);
//                pDesc.appendTo(formGroupArea);
//                textArea.appendTo(pDesc);
//                saveButton.appendTo(markerEdit);
//                log(markerEdit[0].outerHTML);
//                textByForm = markerEdit[0].outerHTML;
//                return textByForm ;



            var markerInfoWinText = $("<div/>", {
                class: "marker-info-win"
            });

            var markerInnerWin = $("<div/>", {
                class: "marker-inner-win"
            });
            var infoContent = $("<span/>", {
                class: "info-content"
            });
            var markerHeading = $("<h1/>", {
                class: "marker-heading",
                text: "New Marker"
            });
            var removeMarkerButton = $("<button/>", {
                name: "remove-marker",
                class: "remove-marker btn btn-danger",
                title: "Remove Marker",
                text: "Remove Marker"
            });
            markerInnerWin.appendTo(markerInfoWinText);
            infoContent.appendTo(markerInnerWin);
            markerHeading.append(EditForm);
            markerHeading.appendTo(infoContent);
            removeMarkerButton.appendTo(markerInnerWin);
            create_marker(event.latLng, 'New Marker', markerInfoWinText, true, true, map, 'http://localhost:8080/resources/img/pin_blue.png');
            return markerInfoWinText.outerHTML;
        });
    }
});

function createdAdminMarkerTitle(marker) {
    var detailBox = createHtmlTag("div", {
        class: "detailBox"
    });
    var titleBox = createHtmlTag("div", {
        class: "titleBox"
    });
    var markerAttr = createHtmlTag("label", {
        text: marker.attr('message')
    });
    var commentBox = createHtmlTag("div", {
        class: "commentBox"
    });
    var taskDescription = createHtmlTag("p", {
        class: "taskDescription",
        text: marker.attr('address')
    });
    var actionBox = createHtmlTag("div", {
        class: "actionBox"
    });
    var commentList1 = createHtmlTag("span", {
        class: "commentList1"
    });
    var commentList = createHtmlTag("ul", {
        class: "commentList"
    });
    var formInline = createHtmlTag("div", {
        class: "form-inline"
    });

    titleBox.appendTo(detailBox);
    markerAttr.appendTo(titleBox);
    commentBox.appendTo(detailBox);
    taskDescription.appendTo(commentBox);
    actionBox.appendTo(detailBox);
    commentList.append(commentAdminMarker(marker));
    commentList1.appendTo(actionBox);
    commentList.appendTo(commentList1);
    formInline.appendTo(actionBox);
    return detailBox[0].outerHTML
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


        //todo : cant see remove comment!!!!
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
        //return li[0].outerHTML;
        //console.log(li[0].outerHTML);


    }
    return text;
}
