function createHtmlTag(nameTag, attrs) {
    return $("<" + nameTag + "/>", attrs);
}
function remove_comment(comment, pieceOfCode) {
    $.ajax({
        type: "POST",
        url: "/remove_comment",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(comment),
        success: function (marker) {
            var text = "";
            for (var i = marker.comments.length - 1; i >= 0; i--) {

                //todo : refactore, don't review comments
                //text +=
                //'<li>' +
                //    '<span class="commentText">' +
                //        '<p>' + marker.comments[i].user.login + ': ' + marker.comments[i].comment +
                //            '<button id="'+ marker.comments[i].commentId +'" type="button" class="close commentAdmin" aria-hidden="true"></button>' +
                //        '</p>' +
                //    '</span>' +
                //'</li>';
                    var li = createHtmlTag("li", {});
                    var commentText = createHtmlTag("span", {class : "commentText"});
                    var p = createHtmlTag("p", {text : marker.comments[i].user.login + ': ' + marker.comments[i].comment});
                    var addButton = createHtmlTag("button", {
                        id : marker.comments[i].commentId,
                        type :"button",
                        class :"close commentAdmin",
                        "aria-hidden" : "true"
                    });
                    commentText.appendTo(li);
                    p.appendTo(commentText);
                    addButton.appendTo(p);
            return li[0].outerHTML;
            }
            pieceOfCode.html(li);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}
