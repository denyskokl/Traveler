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
<div class="container-fluid">
    <jsp:include page="../frames/adminMenu.jsp"/>
    <table id="content">

        <th>Login</th>
        <th>Status</th>
        <tr>
            <td></td>
            <td></td>
        </tr>


    </table>

</div>
</body>
</html>