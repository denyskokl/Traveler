$(document).ready(function () {
    $.post("/admin/admin_list", function (data) {
        var template = $("#adminManagement-template").html();

        var hb = Handlebars.compile(template);
        var objects = hb(data);
        $("#content").html(objects);

        $("input:checkbox").change(function () {
            var user;
            if ($(this).is(":checked")) {
                user = {userId: $(this).attr("id"), enabled: true};
                returnStatus(user);
            } else {
                user = {userId: $(this).attr("id"), enabled: false};
                returnStatus(user);
            }
        });
    });
});


function returnStatus(user) {
    $.ajax({
        url: "/admin/admin_user_status",
        type: "POST",
        data: JSON.stringify(user),
        contentType: 'application/json',
        dataType: 'json',
        success: function (user) {
            alert(user.username + ' is ' + user.enabled);
        }
    });
}













