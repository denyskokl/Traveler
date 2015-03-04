<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title></title>
    <script src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>
    <script src="${pageContext.request.contextPath}/resources/bootstrap/js/bootstrap.js"></script>
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap-theme.css">
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap-responsive.min.css"
          rel="stylesheet">
</head>
<body>
<div class="container">
    <jsp:include page="menu.jsp"/>
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">
                <small>Registration</small>
            </h1>
        </div>
    </div>
    <div class="row">
        <form action="/registration" method="POST">
            <div class="col-lg-12">
                <div class="form-group">
                    <label for="login">Введіть логін</label>

                    <div class="input-group">
                        <input type="text" class="form-control" id="login"
                                    name="login" placeholder="enter login"/>
                    </div>
                </div>

                <div class="form-group">
                    <%--<label for="password"><spring:message text="Пароль"/></label>--%>

                    <div class="input-group">
                        <input type="password" class="form-control" id="password"
                                    name="password" placeholder=""/>
                    </div>
                </div>
                <input type="submit" id="submit" value="Створити"
                       class="btn btn-info pull-right">
            </div>
        </form>
    </div>
    <h1 class="page-header"></h1>

</div>
</div>
</body>
</html>
