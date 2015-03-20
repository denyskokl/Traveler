<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
    <link href="${pageContext.request.contextPath}/resources/css/showMarkers.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize"></script>
    <script src="${pageContext.request.contextPath}/resources/map/createMap.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/showMarkersToAnonimus.js"></script>
</head>
<body onload="initialize()">
<div id="map-canvas" style="width:100%; height:70%"></div>
</body>
</html>
