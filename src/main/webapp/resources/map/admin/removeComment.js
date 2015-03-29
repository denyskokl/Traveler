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
                            '<button id="'+ marker.comments[i].commentId +'" type="button" class="close commentAdmin" aria-hidden="true"></button>' +
                        '</p>' +
                    '</span>' +
                '</li>';
            }
            //todo : NE ZNAYYY pizda typly
            //log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            //for (var j = marker.comments.length - 1; j >= 0; j--) {
            //
            //    var li = $("<li/>", {
            //
            //    });
            //    var commentText = $("<span/>", {
            //        class : "commentText"
            //    });
            //    var p = $("<p/>", {
            //    });
            //    var textFile = $(marker.comments[j].user.login, {
            //        text : ":" + marker.comments[j].comment
            //    });
            //    commentText.appendTo(li);
            //    p.appendTo(commentText);
            //    textFile.appendTo(p);
            //    log(li[0].outerHTML);
            //}
            pieceOfCode.html(text);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}
