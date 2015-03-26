<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Content user</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/user/userInfo.js"></script>
    <style>
        #content td {
            padding: 5px;

            font-size: 12px;
            font-weight: normal;
            border: 1px solid #fef5d5;
        }
        #content th{

            padding: 10px;

        }
        #content {
            margin-left: 30px;
        }
    </style>
</head>
<body>
<div class="container-fluid">
    <jsp:include page="../frames/userMenu.jsp"/>
    <table id="content-user">

        <th>User name</th>
        <th>Email</th>
        <th>Birthday</th>
        <th>Nickname</th>
        <th>Sex</th>



    </table>
</div>
</body>
</html>