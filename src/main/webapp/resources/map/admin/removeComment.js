function remove_comment(comment, pieceOfCode) {
    $.ajax({
        type: "POST",
        url: "/remove_comment",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(comment),
        success: function (marker) {
            var text = '';
            for (var i = marker.comments.length - 1; i >= 0; i--) {
                text +=
                    '<li>' +
                        '<span class="commentText">' +
                            '<p>' + marker.comments[i].user.login + ': ' + marker.comments[i].comment +
                                '<button id="'+ marker.comments[i].commentId +'" type="button" class="close commentAdmin" aria-hidden="true">&times;</button>' +
                            '</p>' +
                        '</span>' +
                    '</li>';
            }
            pieceOfCode.html(text);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}