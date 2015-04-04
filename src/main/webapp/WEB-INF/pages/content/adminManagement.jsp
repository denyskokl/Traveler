<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %>--%>
<%--<html>--%>
<%--<head>--%>
<%--<title>Content user</title>--%>
<%--<meta name="viewport" content="initial-scale=1.0, user-scalable=no">--%>
<%--<meta charset="utf-8">--%>
<%--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>--%>
<%--<script src="${pageContext.request.contextPath}/resources/map/admin/adminManagement.js"></script>--%>
<%--<script src="${pageContext.request.contextPath}/resources/js/handlebars-v3.0.0.js"></script>--%>
<%--<link href="${pageContext.request.contextPath}/resources/css/adminManagment.css"--%>
<%--rel="stylesheet">--%>
<%--<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/login.css">--%>

<%--</head>--%>
<%--<body>--%>
<%--<jsp:include page="../frames/adminMenu.jsp"/>--%>
<%--<div class="container-fluid">--%>

<%--<div class="row">--%>
<%--<div class="col-md-11">--%>
<%--<table id="content" class="table table-bordered table-custom table-hover">--%>

<%--<th>Login</th>--%>
<%--<th>Password</th>--%>
<%--<th>E-mail</th>--%>
<%--<th>Nickname</th>--%>
<%--<th>Birthday</th>--%>
<%--<th>Status</th>--%>

<%--</table>--%>
<%--</div>--%>
<%--</div>--%>
<%--</div>--%>
<%--</body>--%>
<%--</html>--%>


<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Content user</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/admin/adminManagement.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/handlebars-v3.0.0.js"></script>
    <link href="${pageContext.request.contextPath}/resources/css/adminManagment.css"
          rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/login.css">

</head>
<body>
<jsp:include page="../frames/adminMenu.jsp"/>
<div class="container-fluid">

    <div class="row">
        <div class="col-md-11">
            <table id="content" class="table table-bordered table-custom table-hover">
            </table>
        </div>
    </div>

    <script id="adminManagement-template" type="text/x-handlebars-template">
        {{#each this}}
        <tr>
            <th>{{login}}</th>
            <th>{{password}}</th>
            <th>{{email}}</th>
            <th>{{nickname}}</th>
            <th>{{birthday}}</th>
            <th><input id ={{userId}} type="checkbox"></th>
        </tr>

        {{/each}}
    </script>
</div>
</body>
</html>


