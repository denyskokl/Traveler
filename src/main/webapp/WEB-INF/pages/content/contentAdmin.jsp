<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Content user</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&language=ru"></script>
    <script src="${pageContext.request.contextPath}/resources/map/admin/putFunction.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/admin/createMarker.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/admin/removeMarker.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/admin/saveMarker.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/admin/removeComment.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/showMarkers.js"></script>
    <link href="${pageContext.request.contextPath}/resources/css/contentAdmin.css"
          rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/login.css">
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 col-xs-12 col-lg-12">
            <div id="map-canvas" class="map"></div>
        </div>
    </div>
</div>
</body>
</html>
