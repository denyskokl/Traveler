function createdUserMarkerTitle(marker) {
    text = '<div class="detailBox">' +
    '<div class="titleBox">' +
    '<label>' + marker.message + '</label>' +
    '<button onclick="myFunction()" type="button" class="close" aria-hidden="true" >Add to trip</button>' +
    '</div>' +
    '<div class="commentBox">' +
    '<p class="taskDescription">' + marker.address + '</p>' +
    '</div>' +
    '<div class="actionBox">' +
    '<ul class="commentList">' +
    commentMarker(marker.comments) +
    '</ul>' +
    '<div id="form-inline" class="form-inline" >' +
    '<div class="form-group">' +
    '<input id="form-control" class="form-control" type="text" placeholder="Your comments" />' +
    '</div>' +
    '<div class="form-group">' +
    '<button id="btn-comment" class="btn btn-default">Add</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';
    $(function(){
        $("#btn-comment").click(function(){
        alert($(marker).val());
        });
    });
    return text;
}
function commentMarker(comments) {
    var text = '';
    for (var i = comments.length - 1; i >= 0; i--) {
        text += '<li>' +
        '<div class="commentText">' +
        '<p class="">' + comments[i].comment + '</p>' +
        '</div>' +
        '</li>';
    }
    return text;
}

function addComments() {
    var comment = $('#form-control').val();
    console.log(comment);
    var commentObject = JSON.stringify({comment: comment,
        marker : {latitude : globalMarker.latitude,
            longitude: globalMarker.longitude}});
    console.log(commentObject);
    $.ajax({
        url: "/comment",
        type: "POST",
        contentType: 'application/json',
        accept: 'application/json',
        dataType: 'json',
        data: commentObject,
        success: function (response) {
            alert(response);
        },
        error: function (err) {
            alert(JSON.stringify(err));
        }
    });
}

$(document).ready(function(){
    $("#btn-comment").click(function(){
        alert("aaaa");
    });
});
