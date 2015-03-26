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
<div class="container-fluid">
    <jsp:include page="menu.jsp"/>


    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">
                <small>Registration</small>
            </h1>
        </div>
    </div>

    <c:if test="${not empty error}">
        <div class="error">${error}</div>
    </c:if>
    <c:if test="${not empty msg}">
        <div class="msg">${msg}</div>
    </c:if>
    <div class="row">
        <form action="/registration" method="POST">
            <div class="col-lg-12">
                <div class="form-group">
                    <label for="login">Put login</label>

                    <div class="input-group">
                        <input type="text" class="form-control" id="login"
                               name="login" placeholder="Enter login"/>
                    </div>
                </div>

                <div class="form-group">
                    <label for="password">Put password</label>

                    <div class="input-group">
                        <input type="password" class="form-control" id="password"
                               name="password" placeholder="Enter password"/>
                    </div>
                </div>

                <div class="form-group">
                    <label for="email">Put email</label>

                    <div class="input-group">
                        <input type="text" class="form-control" id="email"
                               name="email" placeholder="Enter email"/>
                    </div>
                </div>



                <div class="form-group">
                    <label for="birthday">Put birthday</label>

                    <div class="input-group">
                        <input type="date" class="form-control" id="birthday"
                               name="birthday" placeholder="Enter birthday"/>
                    </div>
                </div>

                <div class="form-group">
                    <label for="birthday">Put nickname</label>

                    <div class="input-group">
                        <input type="text" class="form-control" id="nickname"
                               name="nickname" placeholder="Enter nickname"/>
                    </div>
                </div>


                <div class="form-group">
                    <label for="birthday">Put sex</label>

                    <div class="input-group">
                        <input type="text" class="form-control" id="sex"
                               name="sex" placeholder="Enter sex"/>
                    </div>
                </div>

                <input type="submit" id="submit" value="Create"
                       class="btn btn-info pull-right">
            </div>
        </form>
    </div>
    <h1 class="page-header"></h1>
</div>
</body>
</html>
