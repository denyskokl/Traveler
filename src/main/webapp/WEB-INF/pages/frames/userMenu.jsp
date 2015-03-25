<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<html>
<head>
  <title>Admin page</title>
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap-theme.min.css">
  <script src="${pageContext.request.contextPath}/resources/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<%--<nav class="navbar navbar-default">--%>
  <%--<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">--%>
    <%--<ul class="nav navbar-nav">--%>
      <%--<li>--%>
        <%--<a href="/">Main page</a>--%>
      <%--</li>--%>
      <%--<li>--%>
        <%--<a href="/j_spring_security_logout">Logout </a>--%>
      <%--</li>--%>
    <%--</ul>--%>
  <%--</div>--%>
<%--</nav>--%>

<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Traveler</a>
        </div>


            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <%--Замінить слово DropDown на ім'я користувача--%>
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> USERNAME HERE <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="/j_spring_security_logout">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

</body>
</html>
