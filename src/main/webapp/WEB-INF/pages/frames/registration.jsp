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
    <script src="${pageContext.request.contextPath}/resources/js/login.js"></script>
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/font-awesome.min.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap-theme.css">
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap-responsive.min.css"
          rel="stylesheet">

    <link href="${pageContext.request.contextPath}/resources/css/login.css"
          rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/indexPage.css"
          rel="stylesheet">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
</head>
<body>
<jsp:include page="menu.jsp"/>

<div class="container">
    <div class="row  pad-top">

        <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <strong>Create account</strong>
                </div>
                <div class="panel-body">
                    <form role="form" action="/registration" method="POST">
                        <br/>
                        <div class="form-group input-group">
                            <span class="input-group-addon"><i class="fa fa-circle-o-notch"  ></i></span>
                            <input type="text" class="form-control" placeholder="login" id="login" name="login" />
                        </div>
                        <div class="form-group input-group">
                            <span class="input-group-addon"><i class="fa fa-tag"  ></i></span>
                            <input type="text" class="form-control" placeholder="nickname" id="nickname" name="nickname" />
                        </div>
                        <div class="form-group input-group">
                            <span class="input-group-addon">@</span>
                            <input type="text" class="form-control" placeholder="email" id="email" name="email"/>
                        </div>
                        <div class="form-group input-group">
                            <span class="input-group-addon"><i class="fa fa-lock"  ></i></span>
                            <input type="password" class="form-control" placeholder="password" id="password" name="password"/>
                        </div>

                        <div class="form-group input-group">
                            <span class="input-group-addon"><i class="fa fa-lock"  ></i></span>
                            <input type="text" class="form-control" placeholder="sex" id="sex" name="sex"/>
                        </div>

                        <div class="form-group input-group">
                            <span class="input-group-addon"><i class="fa fa-lock"  ></i></span>
                            <input type="date" class="form-control" placeholder="birthday" id="birthday" name="birthday"/>
                        </div>


                        <input type="submit" id="submit" value="Create" class="btn btn-success col-md-12">
                        <hr />
                        Already Registered ?  <a href="/login" >Login here</a>
                    </form>
                </div>

            </div>
        </div>


    </div>
</div>


<!-- JAVASCRIPT FILES PLACED AT THE BOTTOM TO REDUCE THE LOADING TIME  -->
<!-- CORE JQUERY  -->
<script src="assets/plugins/jquery-1.10.2.js"></script>
<!-- BOOTSTRAP SCRIPTS  -->
<script src="assets/plugins/bootstrap.js"></script>


<%--<div class="container-fluid">--%>


<%--<div class="row">--%>
<%--<div class="col-lg-12">--%>
<%--<h1 class="page-header">--%>
<%--<small>Registration</small>--%>
<%--</h1>--%>
<%--</div>--%>
<%--</div>--%>

<%--<c:if test="${not empty error}">--%>
<%--<div class="error">${error}</div>--%>
<%--</c:if>--%>
<%--<c:if test="${not empty msg}">--%>
<%--<div class="msg">${msg}</div>--%>
<%--</c:if>--%>
<%--<div class="row">--%>
<%--<form action="/registration" method="POST">--%>
<%--<div class="col-lg-12">--%>
<%--<div class="form-group">--%>
<%--<label for="login">Put login</label>--%>

<%--<div class="input-group">--%>
<%--<input type="text" class="form-control" id="login"--%>
<%--name="login" placeholder="Enter login"/>--%>
<%--</div>--%>
<%--</div>--%>

<%--<div class="form-group">--%>
<%--<label for="password">Put password</label>--%>

<%--<div class="input-group">--%>
<%--<input type="password" class="form-control" id="password"--%>
<%--name="password" placeholder="Enter password"/>--%>
<%--</div>--%>
<%--</div>--%>

<%--<div class="form-group">--%>
<%--<label for="email">Put email</label>--%>

<%--<div class="input-group">--%>
<%--<input type="text" class="form-control" id="email"--%>
<%--name="email" placeholder="Enter email"/>--%>
<%--</div>--%>
<%--</div>--%>



<%--<div class="form-group">--%>
<%--<label for="birthday">Put birthday</label>--%>

<%--<div class="input-group">--%>
<%--<input type="date" class="form-control" id="birthday"--%>
<%--name="birthday" placeholder="Enter birthday"/>--%>
<%--</div>--%>
<%--</div>--%>

<%--<div class="form-group">--%>
<%--<label for="birthday">Put nickname</label>--%>

<%--<div class="input-group">--%>
<%--<input type="text" class="form-control" id="nickname"--%>
<%--name="nickname" placeholder="Enter nickname"/>--%>
<%--</div>--%>
<%--</div>--%>


<%--<div class="form-group">--%>
<%--<label for="birthday">Put sex</label>--%>

<%--<div class="input-group">--%>
<%--<input type="text" class="form-control" id="sex"--%>
<%--name="sex" placeholder="Enter sex"/>--%>
<%--</div>--%>
<%--</div>--%>

<%--<input type="submit" id="submit" value="Create"--%>
<%--class="btn btn-info pull-right">--%>
<%--</div>--%>
<%--</form>--%>
<%--</div>--%>
<%--<h1 class="page-header"></h1>--%>
<%--</div>--%>
</body>
</html>
