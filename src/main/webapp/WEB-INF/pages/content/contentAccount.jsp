<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Content user</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/handlebars-v3.0.0.js"></script>
    <script src="${pageContext.request.contextPath}/resources/user/userInfo.js"></script>
    <link href="${pageContext.request.contextPath}/resources/css/contentAccount.css"
          rel="stylesheet">

</head>
<body>

<jsp:include page="../frames/userMenu.jsp"/>

<div class="container">
    <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >


            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title"><a id="profile">My profile</a> </a> <a class="pull-right" id="edit">Edit</a></h3>

                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=100" class="img-circle"> </div>

                        <div class=" col-md-9 col-lg-9 ">
                            <div id="edit-form"></div>
                            <table id="user-info" class="table table-user-information">
                                <tbody id="user-content">
                                <script id="user-template" type="text/x-handlebars-template">
                                    <tr>
                                        <td>Login:</td>
                                        <td>{{username}}</td>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth</td>
                                        <td>{{birthday}}</td>
                                    </tr>
                                    <tr>
                                        <td>Sex</td>
                                        <td>{{sex}}</td>
                                    </tr>
                                    <tr>
                                        <td>Nickname</td>
                                        <td>{{nickname}}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{{email}}</td>
                                    </tr>
                               </script>
                                <div class="edit-form" id="user-edit-form">
                                    <div class="form-group">
                                        <input class="form-control" id="email" placeholder="E-mail">
                                    </div>
                                    <div class="form-group">
                                        <input id="birthday" type="date" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input id="sex" class="form-control" placeholder="Sex">
                                    </div>
                                    <div class="form-group">
                                        <input id="nickname" class="form-control" placeholder="Nickname">
                                    </div>

                                    <div class="form-group">
                                        <input type="button" id="submit" class="btn btn-success" value="Save">
                                    </div>
                                </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

</body>
</html>