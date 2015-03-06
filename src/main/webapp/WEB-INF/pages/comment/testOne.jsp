<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta charset=utf-8>
  <title>Слайд-шоу</title>
  <script src="${pageContext.request.contextPath}/resources/comment/imgs.js"></script>
  <script src="${pageContext.request.contextPath}/resources/bootstrap/js/handlebars/handlebars-v3.0.0.js" type="text/javascript"></script>

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

    <%--<li><img src='${pageContext.request.contextPath}/resources/img/red.gif' alt =''></li>--%>
    <%--<li><img src='${pageContext.request.contextPath}/resources/img/blue.gif' alt =''></li>--%>
    <%--<li><img src='${pageContext.request.contextPath}/resources/img/green.gif' alt =''></li>--%>

    <%--<li><img src='${pageContext.request.contextPath}/resources/img/yellow.gif' alt =''></li>--%>

  <%--</ul>--%>
</div>
<div id ='show'>
  <button id = 'prev'>Prev</button>
  <button id = 'next'>Next</button>
</div>

<script type="text/javascript" src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.js"></script>

<script type="text/javascript">
  var tmp = Handlebars.compile($.trim($('#myTemplate').html()));
  $('div.view').append(tmp(aImgs));
//  var template = $.trim($('#myTemplate').html());
//  var text = '';
//  $.each(aImgs, function(key, val) {
//    text += template.replace(/{{src}}/ig, val.src)
//            .replace(/{{alt}}/ig, val.alt);
//  });

</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/comment/slideShow.js"></script>
</body>
</html>