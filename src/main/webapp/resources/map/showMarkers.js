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
    '<form class="form-inline" role="form">' +
    '<div class="form-group">' +
    '<input class="form-control" type="text" placeholder="Your comments" />' +
    '</div>' +
    '<div class="form-group">' +
    '<button  onclick="addComments(marker)" class="btn btn-default">Add</button>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>';
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

function addComments(marker) {

    var comment = $('.form-control').val();


    $.ajax({
        url: "/comment",
        type: "GET",
        dataType: "json",
        data: JSON.stringify({comment: comment}),
        ContentType: "application/json",
        success: function (response) {
            alert(JSON.stringify(response));
        },
        error: function (err) {
            alert(JSON.stringify(err));
        }
    });
    console.log(comment);


}
