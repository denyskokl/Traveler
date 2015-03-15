function remove_comment(comment) {
    $.ajax({
        type: "POST",
        url: "/remove_comment",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(comment),
        success: function (Httpstatus) {
            alert('deleted');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}
