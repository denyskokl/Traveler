<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt_rt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<html>
<head>
    <title>Welcome to Traveler</title>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap-responsive.min.css"
          rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/indexPage.css"
          rel="stylesheet">

</head>
<body>
    <sec:authorize access="isAnonymous()">
        <jsp:include page="frames/menu.jsp"/>
        <div class="content-index">
            HELLO, TRAVEL WITH US!
        </div>
        <div class="sign-up-index" onclick="location.href='/registration'">
            Sign Up!
        </div>
    </sec:authorize>

    <sec:authorize access="isAuthenticated() and hasRole('ROLE_ADMIN')">
        <jsp:include page="frames/adminMenu.jsp"/>
        <jsp:include page="content/contentAdmin.jsp"/>
    </sec:authorize>

    <sec:authorize access="isAuthenticated() and hasRole('ROLE_USER')">
        <jsp:include page="frames/userMenu.jsp"/>
        <jsp:include page="content/contentUser.jsp"/>
    </sec:authorize>

    <div aria-hidden="true" aria-labelledby="myModalLabel" class="modal fade" id="myModal" role="dialog" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content modal_w">
                <div class="modal-header m_head">
                    <h4 class="modal-title" id="myModalLabel">
                        Sign In
                    </h4>
                </div>
                <div class="modal-body">
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
        </div>
    </div>


</body>
</html>