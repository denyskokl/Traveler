globalMarkers = {};
globalRouteId = -1;

function createHtmlTag(nameTag, attrs) {
    return $("<" + nameTag + "/>", attrs);
}

function initialize() {

    var categoryPanel = document.getElementById('categories');
    $.post("/categories").done(function(categories) {
        var categoryButtons = [];
        $.each(categories, function(index, value) {
            categoryButtons.push('<div class="btn-group" data-toggle="buttons">' +
            '<label class="btn btn-primary">' +
            '<input type="radio" data-toggle="buttons" categoryId=' + value.categoryId +
            ' class="uCategory btn">' + value.category +
            '</label>' +
            '</div>');
        });
        categoryPanel.innerHTML = categoryButtons.join('');

        $.each($(categoryPanel).find('input.uCategory') , function(index, value) {
            google.maps.event.addDomListener(value, "click", function (event) {
                var categoryId = $(this).attr("categoryId");
                $.post("/markersByCategory",  {
                    categoryId : categoryId
                }, function (markers) {
                    globalMarkers = markers;
                    addMarkers(globalMarkers);
                }).fail(function() {
                    alert("error");
                });
            });
        });
    });


    var routePanel = document.getElementById('routes_panel');
    $.post("/routes").done(function (routesId) {
        var routeButtons = [];
        $.each(routesId, function (index, value) {
            var btnGroup = createHtmlTag("div", {class: "btn-group", "data-toggle": "buttons"});
            var btnBtnPrimary = createHtmlTag("label", {class: "btn btn-primary"});
            var inputBtn = createHtmlTag("input", {
                type: "radio",
                "data-toggle": "buttons",
                "routeId": value,
                class: "uRoute btn"
            });
            btnBtnPrimary.appendTo(btnGroup);
            inputBtn.appendTo(btnBtnPrimary);
            inputBtn.after("route ", value);
            routeButtons.push(btnGroup[0].outerHTML);
            return btnGroup[0].outerHTML;
        });
        routePanel.innerHTML = routeButtons.join('');
        $.each($(routePanel).find('input.uRoute'), function (index, value) {
            google.maps.event.addDomListener(value, "click", function (event) {
                showTrip($(this).attr("routeId"));
                globalRouteId = $(this).attr("routeId");
            });
        });
    });

    $.get("/markers").done(function (markers) {
        globalMarkers = markers;
        addMarkers(globalMarkers);
    });

    $('#route_button').click(function () {
        globalRouteId = -1;
        $.post("/routes").done(function (routesId) {
            var routeButtons = [];
            $.each(routesId, function (index, value) {
                var btnGroup = createHtmlTag("div", {class: "btn-group", "data-toggle": "buttons"});
                var btnBtnPrimary = createHtmlTag("label", {class: "btn btn-primary"});
                var inputType = createHtmlTag("input", {
                    type: "radio",
                    "data-toggle": "buttons",
                    routeID: value,
                    class: "uRoute"
                });
                btnBtnPrimary.appendTo(btnGroup);
                inputType.appendTo(btnBtnPrimary);
                inputType.after("route ", value);
                routeButtons.push(btnGroup[0].outerHTML);
                return btnGroup[0].outerHTML;

            });
            routePanel.innerHTML = routeButtons.join('');
            $.each($(routePanel).find('input.uRoute'), function (index, value) {
                google.maps.event.addDomListener(value, "click", function (event) {
                    showTrip($(this).attr("routeId"));
                    globalRouteId = $(this).attr("routeId");
                });
            });
        });
    });
}

var rendererOptions = {
    draggable: true
};


function showTrip(routeId) {
    $.post("/route", {
        routeId: routeId
    }, function (route) {
        calcRoute(route);
    }).fail(function () {
        alert("can't show trip");
    });
}

var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

function addEventClick(mReplace) {
    $(".addComment").click(function () {
        var objId = $(this).attr("objId");
        addComments(globalMarkers[objId], mReplace);
    });

    $(".addToTrip").click(function () {
        var objTrip = $(this).attr("objTrip");
        var routeId = globalRouteId;
        addToTrip(routeId, objTrip);
    });
}

function addMarkers(markers) {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 4,
        center: new google.maps.LatLng(49.445077, 32.056129)
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var infoWindow = new google.maps.InfoWindow(), marker, i;


    for (var i in markers) {
        var position = new google.maps.LatLng(markers[i].longitude, markers[i].latitude);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i].address
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                var userMarkTitle = $(createdUserMarkerTitle(markers[i]));
                var mReplace = userMarkTitle.find('span.commentList1');
                infoWindow.setContent(userMarkTitle[0]);
                infoWindow.open(map, marker);
                addEventClick(mReplace)
            }
        })(marker, i));

        map.fitBounds(bounds);
    }
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });

    directionsDisplay.setMap(map);
}