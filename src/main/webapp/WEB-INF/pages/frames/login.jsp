<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
    <script src="${pageContext.request.contextPath}/resources/bootstrap/js/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/star-rating.min.css" media="all"
          rel="stylesheet"
          type="text/css"/>
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap-responsive.min.css"
          rel="stylesheet">
</head>
<body>
<%--<jsp:include page="menu.jsp"/>--%>
<div class="container-fluid">
    <jsp:include page="menu.jsp"/>
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">
                <small>Login</small>
            </h1>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 well">
            <form class="form-signin" id="form" action="/j_spring_security_check"
                  method="POST" onsubmit="function checkForm() {
                    var u_login = document.forms['form']['us_name'].value;
                    var pass = document.forms['form']['us_pass'].value;
                    if (u_login == null || u_login == '') {
                         document.forms['form']['us_name'].focus(); return false;
                    } if (pass == null || pass == '') {document.forms['form']['us_name'].focus();
                         return false;
                    } return true;
                  }

            return checkForm()">
                <c:if test="${not empty error}">
                    <div class="error">${error}</div>
                </c:if>
                <c:if test="${not empty msg}">
                    <div class="msg">${msg}</div>
                </c:if>
                <label for="us_name">Login</label>
                <input type="text" id="us_name" class="form-control" placeholder="" name="username" required
                       autofocus></br>
                <label for="us_pass">Password</label>
                <input type="password" id="us_pass" name="password" class="form-control" placeholder="" required>

                <div align="right" style="margin-top: 15px">
                    <label for="remember">Remember me:</label>
                    <input type="checkbox" id="remember" name="_spring_security_remember_me">
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </form>
        </div>
    </div>
    <hr>
</div>
</body>
</html>
