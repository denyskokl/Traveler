<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt_rt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<html>
<head>
    <title>qwe</title>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>
    <%--<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&language=ru"></script>--%>
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap-responsive.min.css"
          rel="stylesheet">
</head>

<body>
<div class="container">
    <sec:authorize access="isAnonymous()">
        <jsp:include page="frames/menu.jsp"/>
        <jsp:include page="content/contentAnonymous.jsp"    />
    </sec:authorize>

    <sec:authorize access="isAuthenticated() and hasRole('ROLE_ADMIN')">
        <jsp:include page="frames/authorizationMenu.jsp"/>
        <jsp:include page="content/contentAdmin.jsp"/>
    </sec:authorize>

    <sec:authorize access="isAuthenticated() and hasRole('ROLE_USER')">
        <jsp:include page="frames/authorizationMenu.jsp"/>
        <jsp:include page="content/contentUser.jsp"/>
    </sec:authorize>
</div>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">
               вава
            </h1>
        </div>
    </div>
</div>
</body>
</html>

