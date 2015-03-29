<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Content user</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/map/admin/adminManagement.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/handlebars-v3.0.0.js"></script>
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
    <jsp:include page="../frames/adminMenu.jsp"/>
    <table id="content">

        <th>Login</th>
        <th>Status</th>
        <tr>
            <td></td>
            <td></td>
        </tr>


    </table>

    <script id="some-template" type="text/x-handlebars-template"> <table>
        <thead>
        <th>Name</th>
        <th>Job Title</th>
        <th>Twitter</th>
        </thead>
        <tbody>
        <tr>
            <td>{{login}}</td>
            <td>{{jobTitle}}</td>
            <td><a href="https://twitter.com/{{twitter}}">@{{twitter}}</a></td>
        </tr>
        {{/users}}
        </tbody>
    </table>
    </script>

</div>
</body>
</html>