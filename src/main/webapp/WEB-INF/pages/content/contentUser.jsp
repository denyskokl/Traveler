<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Content user</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/createMap.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/showMarkers.js"></script>
    <link href="${pageContext.request.contextPath}/resources/css/showMarkers.css" rel="stylesheet" type="text/css">
    <link href="${pageContext.request.contextPath}/resources/css/contentUser.css"
          rel="stylesheet">
    <script src="${pageContext.request.contextPath}/resources/js/handlebars-v3.0.0.js"></script>
</head>

<body onload="initialize()">
<jsp:include page="../frames/userMenu.jsp"/>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-4 col-lg-4 panel-body pan">

            <p class="head">Categories:</p>
            <div id="categories">
                <script id="categories-template" type="text/x-handlebars-template">
                    {{#each this}}
                    <div class="btn-group" data-toggle="buttons">
                        <label class="btn btn-primary btn-custom">
                            <input type="radio" data-toggle="buttons" categoryId="{{categoryId}}" class="uCategory btn btn-custom">
                            {{category}}
                        </label>
                    </div>
                    {{/each}}
                </script>
            </div>
            <p class="head">Routes: </p>
            <button id="route_button" class='btn newRouteBtn route-add' aria-hidden='true' >Add new route</button>
            <br/>
            <br/>
            <div id="routes-panel">
                <script id = "routes-template" type="text/x-handlebars-template">
                    {{#each this}}
                    <div class="btn-group" data-toggle="buttons">
                        <label class="btn btn-primary btn-custom">
                            <input type="radio" data-toggle="buttons" routeId={{this}} class="uRoute btn"> route {{this}} </input>
                        </label>
                    </div>
                    {{/each}}
                </script>
            </div>
            <div id="directions_panel" class="adr"></div>
        </div>
        <div class="col-md-8 col-lg-8 col-xs-12">
            <div id="map-canvas"></div>
        </div>
    </div>
</div>
</body>
</html>