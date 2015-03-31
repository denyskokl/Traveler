function addToTable(obj) {
    $('#login').text(obj.login);
    $('#birthday').text(new Date(obj.birthday));
    $('#email').text(obj.email);
    $('#nickname').text(obj.nickname);
    $('#sex').text(obj.sex);
    $('#submit').hide();
}
$(document).ready(function () {

    $.post("/user/user_profile", function (user) {

        addToTable(user);
    });

    // TODO: implement
    $('#edit').click(function() {
        $('#email').replaceWith('<input id="#email" class="form-control">');
        $('#login').replaceWith('<input id="#login" class="form-control">');
        $('#birthday').replaceWith('<input id="#birthday" type="date" class="form-control">');
        $('#sex').replaceWith('<input id="#sex" class="form-control">');
        $('#nickname').replaceWith('<input id="#nickname" class="form-control">');
        $('#submit').show();
    });

    $('#submit').click(function() {
        // TODO: Implement ajax
    });
});



