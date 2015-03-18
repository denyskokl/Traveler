<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Content user</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/proba/adminManagement.js"></script>
    <style>
        #content td {
            padding: 5px;

            font-size: 12px;
            font-weight: normal;
            border: 1px solid #fef5d5;
        }

    </style>
</head>
<body>
<jsp:include page="../frames/adminMenu.jsp"/>
<table id="content">

    <th>Login</th>
    <th>Status</th>


</table>
</body>
</html>