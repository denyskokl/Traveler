<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
    <%--<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&language=ru"></script>--%>
    <%--<script type="text/javascript" src="${pageContext.request.contextPath}/resources/map/array.js"></script>--%>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <%--<link href="${pageContext.request.contextPath}/resources/map/array.css"/>--%>
    <script src="${pageContext.request.contextPath}/resources/map/createMap.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/showMarkers.js"></script>
    <style>
        #bodyContent {
            overflow: scroll; /* Добавляем полосы прокрутки */
            width: 300px; /* Ширина блока */
            height: 150px; /* Высота блока */
            padding: 5px; /* Поля вокруг текста */
            border: solid 1px black; /* Параметры рамки */
        }
    </style>

</head>
<body onload="initialize()">
<h1>Kava</h1>

<%--<div id="map_wrapper">--%>
    <%--<div id="map_canvas" class="mapping"></div>--%>
<%--</div>--%>
<div id="map-canvas" style="width:100%; height:70%"></div>


</body>
</html>
