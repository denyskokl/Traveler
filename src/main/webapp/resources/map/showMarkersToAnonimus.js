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
