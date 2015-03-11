function createdUserMarkerTitle(marker) {
    text = '<div class="detailBox">' +
    '<div class="titleBox">' +
        '<label>' + marker.message + '</label>' +
    '</div>' +
    '<div class="commentBox">' +
    '<p class="taskDescription">' + marker.address + '</p>' +
    '</div>' +
    '<div class="actionBox">' +
         '<ul class="commentList">' +
          commentMarker(marker.comments) +
        '</ul>' +
    '</div>' +
    '</div>';
    return text;
}
function commentMarker(comments){
    var text = '';
    for (var i =  comments.length - 1; i >= 0;  i --) {
        text += '<li>' +
        '<div class="commentText">' +
        '<p class="">'+ comments[i].comment +'</p>' +
        '</div>' +
        '</li>' ;
    }
    return text;
}





//
//function createdUserMarkerTitle(marker) {
//    //todo як навісити на кнопку id="btn-comment" подію з передачею обьекта(маркера)
//    globalMarkers = marker;
//    text = '<div class="detailBox">' +
//    '<div class="titleBox">' +
//    '<label>' + marker.message + '</label>' +
//    '<button onclick="myFunction()" type="button" class="close" aria-hidden="true" >Add to trip</button>' +
//    '</div>' +
//    '<div class="commentBox">' +
//    '<p class="taskDescription">' + marker.address + '</p>' +
//    '</div>' +
//    '<div class="actionBox">' +
//    '<ul class="commentList">' +
//    commentMarker(marker) +
//    '</ul>' +
//    '<div id="form-inline" class="form-inline" >' +
//    '<div class="form-group">' +
//    '<input id="form-control" class="form-control" type="text" placeholder="Your comments" />' +
//    '</div>' +
//    '<div class="form-group">' +
//    '<button id="btn-comment" onclick="addComments()" class="btn1 btn btn-default">Add</button>' +
//    '</div>' +
//    '</div>' +
//    '</div>' +
//    '</div>';
//    return text;
//}
//function commentMarker(marker) {
//    var text = '';
//    for (var i = marker.comments.length - 1; i >= 0; i--) {
//        text += '<li>' +
//        '<div class="commentText">' +
//        '<p class="">' + marker.comments[i].user.login + ': '+ marker.comments[i].comment + '</p>' +
//        '</div>' +
//        '</li>';
//    }
//    return text;
//}
//
//function addComments() {
//    var comment = $('#form-control').val();
//    console.log(comment);
//    var commentObject = JSON.stringify({comment: comment,
//        marker : {latitude : globalMarkers.latitude,
//            longitude: globalMarkers.longitude}});
//    console.log(commentObject);
//    $.ajax({
//        url: "/comment",
//        type: "POST",
//        contentType: 'application/json',
//        accept: 'application/json',
//        dataType: 'json',
//        data: commentObject,
//        success: function (response) {
//            alert(response);
//        },
//        error: function (err) {
//            alert(JSON.stringify(err));
//        }
//    });
//}