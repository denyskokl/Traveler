<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta charset=utf-8>
  <title>Слайд-шоу</title>
  <script src="${pageContext.request.contextPath}/resources/comment/imgs.js"></script>
  <style>
    *{margin: 0; padding: 0}
    #show{
      display: none;
      margin-top: 1em
    }
    #show button{
      padding: 1em;
      margin-right: 1em;
      cursor: pointer;
    }
    body{width: 400px; margin: 100px auto 0}
    .view{
      width: inherit;
      height: 200px;
      overflow: scroll;
    }
    .view ul{
      list-style: none;
      width: 10000px
    }
    .view li{float: left}
  </style>
  <script id = "myTemplate" type = "jquery/template">
    <li><img src = '{{src}}' alt = '{{alt}}'></li>
  </script>
</head>
<body>
<div class = 'view'>
  <ul>
    <li><img src='../img/red.gif' alt =''></li>
    <li><img src='../img/green.gif' alt =''></li>
    <li><img src='../img/yellow.gif' alt =''></li>
    <li><img src='../img/blue.gif' alt =''></li>
  </ul>
</div>
<div id ='show'>
  <button id = 'prev'>Prev</button>
  <button id = 'next'>Next</button>
</div>

<script type="text/javascript" src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/comment/slideShow.js"></script>
<script type="text/javascript">
  var template = $.trim($('#myTemplate').html());
  $.each(aImgs, function(key, val) {
    var tmp = template.replace(/{{src}}/ig, val.src);
    console.log(tmp);
  });
</script>
</body>
</html>