var tmp = Handlebars.compile($.trim($('#myTemplate').html()));
$('div.view').append(tmp(aImgs));