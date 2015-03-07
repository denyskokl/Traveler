<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Content user</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <%--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>--%>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>
    <%--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>--%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>


    <script src="${pageContext.request.contextPath}/resources/map/showMarkers.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/createTrip.js"></script>

</head>
<body onload="initialize()">
<div id="map-canvas" style="float:left;width:70%;height:100%;"></div>
<div id="control_panel" style="float:right;width:30%;text-align:left;padding-top:20px">
    <div style="margin:20px;border-width:2px;">
        <b>Start:</b>
        <select id="start">
            <option value="Smilyans'ka 31, Cherkasy, UA">McDonald's market</option>
        </select>
        <br>
        <b>Waypoints:</b> <br>
        <i>(Ctrl-Click for multiple selection)</i> <br>
        <select multiple id="waypoints">
            <option value="Ostafiya Dashkovycha 19, Cherkasy, UA">Kreshatik-City</option>
            <option value="Baidy Vyshnevets'koho 19, Cherkasy, UA">Kontrabas</option>
            <option value="Shevchenka 145, Cherkasy, UA">Plazma</option>
        </select>
        <br>
        <b>End:</b>
        <select id="end">
            <option value="Shevchenka 460, Cherkasy, UA">CHDTY</option>
            <option value="Shevchenka 208/1,Cherkasy, UA">Lubava</option>
            <option value="Shevchenka 345, Cherkasy, UA">Runok Sedova</option>
        </select>
        <br>
        <input type="submit" onclick="calcRoute();">
    </div>
    <div id="directions_panel" style="margin:20px;background-color:#FFEE77;"></div>
</div>
</body>
</html>