function addToTable(obj) {
    $('#login').text(obj.login);
    $('#birthday').text(new Date(obj.birthday));
    $('#email').text(obj.email);
    $('#nickname').text(obj.nickname);
    $('#sex').text(obj.sex);
}
$(document).ready(function () {

    $.post("/user/user_profile", function (user) {

        addToTable(user);
    });

    // TODO: implement
    $('#edit').click(function() {
        $('#email').replaceWith('<input id="#email">');
        $('#email').replaceWith('<input id="#login">');
    });
});



