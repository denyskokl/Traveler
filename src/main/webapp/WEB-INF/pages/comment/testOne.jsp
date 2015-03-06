<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta charset=utf-8>
  <title>Comment</title>
  <script src="${pageContext.request.contextPath}/resources/comment/imgs.js"></script>
  <script src="${pageContext.request.contextPath}/resources/bootstrap/js/handlebars/handlebars-v3.0.0.js" type="text/javascript"></script>
  <link href="${pageContext.request.contextPath}/resources/bootstrap/css/pictureModel.css" rel="stylesheet">
  <link href="${pageContext.request.contextPath}/resources/bootstrap/css/createComment.css" rel="stylesheet">
  <link href="${pageContext.request.contextPath}/resources/bootstrap/css/111.css" rel="stylesheet">

  <script id = "myTemplate" type="text/x-handlebars-template">
    <ul>
      {{#each this}}
        <li><img src = '{{src}}' alt = '{{alt}}'></li>
      {{/each}}
    </ul>
  </script>
</head>
<body>
<div class = 'view'></div>
<div id ='show'>
  <button id = 'prev'>Prev</button>
  <button id = 'next'>Next</button>
</div>

<div class="detailBox">
  <div class="titleBox">
    <label>Comment Box</label>
    <button type="button" class="close" aria-hidden="true">&times;</button>
  </div>
  <div class="commentBox">

    <p class="taskDescription">Mymba younba</p>
  </div>
  <div class="actionBox">
    <ul class="commentList">
      <li>
        <div class="commenterImage">
          <img src="http://lorempixel.com/50/50/people/6" />
        </div>
        <div class="commentText">
          <p class="">Hello this is a test comment.</p>

        </div>
      </li>
      <li>
        <div class="commenterImage">
          <img src="http://lorempixel.com/50/50/people/7" />
        </div>
        <div class="commentText">
          <p class="">Hello this is a test comment and this comment is particularly very long and it goes on and on and on.</p>

        </div>
      </li>
      <li>
        <div class="commenterImage">
          <img src="http://lorempixel.com/50/50/people/9" />
        </div>
        <div class="commentText">
          <p class="">la bla 3.</p>

        </div>
      </li>
    </ul>
    <form class="form-inline" role="form">
      <div class="form-group">
        <input class="form-control" type="text" placeholder="Your comments" />
      </div>
      <div class="form-group">
        <button class="btn btn-default">Add</button>
      </div>
    </form>
  </div>
</div>



<script type="text/javascript" src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/comment/addPhoto.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/comment/slideShow.js"></script>
</body>
</html>
