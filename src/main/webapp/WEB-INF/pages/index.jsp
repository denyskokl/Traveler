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
    <link href="${pageContext.request.contextPath}/resources/css/login.css"
          rel="stylesheet">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/login.js"></script>

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
    <jsp:include page="content/contentUser.jsp"/>
</sec:authorize>

</body>
</html>