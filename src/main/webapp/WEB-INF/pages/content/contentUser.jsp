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
</head>
<body onload="initialize()">
<div id="map-canvas" style="float:left;width:70%;height:100%;"></div>
<div id="control_panel" style="float:right;width:30%;text-align:left;padding-top:20px"></div>
<div id="directions_panel" style="margin:20px;background-color:#FFEE77;"></div>
</body>
</html>