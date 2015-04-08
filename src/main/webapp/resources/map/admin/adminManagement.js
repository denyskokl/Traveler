$(document).ready(function () {
    $.post("/admin/admin_list", function (data) {
        var template = $("#adminManagement-template").html();

        var hb = Handlebars.compile(template);
        var objects = hb(data);
        $("#content").html(objects);

        $("input:checkbox").change(function () {
            var user;
            if ($(this).is(":checked")) {
                user = {userId: $(this).attr("id"), userStatus: "ENABLED"};
                returnStatus(user);
            } else {
                user = {userId: $(this).attr("id"), userStatus: "DISABLED"};
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
            alert(user.login + ' is ' + user.userStatus.toLowerCase());
        }
    });
}













