<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta charset=utf-8>
  <title>Слайд-шоу</title>
  <script src="${pageContext.request.contextPath}/resources/comment/imgs.js"></script>
  <script src="${pageContext.request.contextPath}/resources/bootstrap/js/handlebars/handlebars-v3.0.0.js" type="text/javascript"></script>
  <link href="${pageContext.request.contextPath}/resources/bootstrap/css/pictureModel.css" rel="stylesheet">

  <script id = "myTemplate" type="text/x-handlebars-template">
    <ul>
      {{#each this}}
        <li><img src = '{{src}}' alt = '{{alt}}'></li>
      {{/each}}
    </ul>
  </script>
</head>
<body>
<div class = 'view'>
</div>
<div id ='show'>
  <button id = 'prev'>Prev</button>
  <button id = 'next'>Next</button>
</div>

<script type="text/javascript" src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>

<script type="text/javascript">
  var tmp = Handlebars.compile($.trim($('#myTemplate').html()));
  $('div.view').append(tmp(aImgs));
</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/comment/slideShow.js"></script>
</body>
</html>