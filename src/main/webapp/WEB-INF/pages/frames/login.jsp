<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
    <script src="${pageContext.request.contextPath}/resources/bootstrap/js/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/login.js"></script>
    <script src="https://apis.google.com/js/plus.js"></script>
    <script src="https://apis.google.com/js/client:plus.js"></script>
    <script src="https://apis.google.com/js/plus.js?onload=OnLoadCallback"></script>



    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/star-rating.min.css" media="all"
          rel="stylesheet"
          type="text/css"/>
    <link href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap-responsive.min.css"
          rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/login.css"
          rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/indexPage.css"
          rel="stylesheet">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>

</head>
<body>
<jsp:include page="../frames/menu.jsp"/>

<div class="container">
    <div class="row vertical-offset-100">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Please sign in</h3>
                </div>
                <div class="panel-body" style="margin-bottom: -15px;">
                    <form accept-charset="UTF-8" role="form" id="form" action="/j_spring_security_check"
                          method="POST" onsubmit="return checkForm()">
                        <c:if test="${not empty error}">
                            <div class="error">${error}</div>
                        </c:if>
                        <c:if test="${not empty msg}">
                            <div class="msg">${msg}</div>
                        </c:if>

                        <fieldset>
                            <div class="form-group">
                                <input type="text" id="us_name" class="form-control" placeholder="username" name="username" required autofocus>
                            </div>
                            <div class="form-group">
                                <input type="password" id="us_pass" name="password" class="form-control" placeholder="password" required>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input name="remember" type="checkbox" value="Remember Me"> Remember Me
                                </label>
                            </div>
                            <input class="btn btn-lg btn-success btn-block" type="submit" value="Login"> <br>
                            <span id="signinButton">
      <span
              class="g-signin"
              data-callback="signinCallback"
              data-clientid="384049767054-d7j646gk9h5rrerbh6o15gcig46rgsen.apps.googleusercontent.com"
              data-cookiepolicy="single_host_origin"
              data-requestvisibleactions="http://schemas.google.com/AddActivity"
              data-scope="https://www.googleapis.com/auth/plus.login">
      </span>
    </span>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    (function() {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js?onload=OnLoadCallback';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();
</script>
<script type="text/javascript">
    function disconnectUser(access_token) {
        var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' +
                access_token;

        // Выполните асинхронный запрос GET.
        $.ajax({
            type: 'GET',
            url: revokeUrl,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(nullResponse) {
                // Выполните любое действие после отключения пользователя
                // Ответ всегда неопределенный.
            },
            error: function(e) {
                // Обработайте ошибку
                // console.log(e);
                // Вы можете предложить пользователю отключится вручную
                // https://plus.google.com/apps
            }
        });
    }
    // Отключение может быть выполнено при нажатии на кнопку
    $('#revokeButton').click(disconnectUser);
</script>
</body>
</html>
