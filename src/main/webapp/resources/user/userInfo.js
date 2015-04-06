$(document).ready(function () {

    $.get("/user/user_profile", function (user) {
        $('#user-edit-form').hide();
        var template = $("#user-template").html();
        var hbar = Handlebars.compile(template);
        var data = {
            login : user.login,
            birthday: new Date(user.birthday),
            email: user.email,
            nickname: user.nickname,
            sex: user.sex
        };
        var templates = hbar(data);
        $("#user-content").html(templates);
    });

    $('#edit').click(function() {
        $("#user-info").hide();
        $('#user-edit-form').show();
    });

    $('#profile').click(showProfileData);

    $('#submit').click(function() {
        $.post("/user/edit_user", {
            birthday: $("#birthday").val(),
            email: $("#email").val(),
            nickname: $("#nickname").val(),
            sex: $("#sex").val()
        }, function () {
        showProfileData();

        });
    });

    function showProfileData() {
        $("#user-info").show();
        $('#user-edit-form').hide();
    }
});



