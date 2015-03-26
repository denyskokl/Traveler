function addToTable(obj) {
    var str = "<tr>";
    str += "<td>" + obj.login + "</td>";
    str += "<td>" + obj.email + "</td>";
    str += "<td>" + new Date(obj.birthday) + "</td>";
    str += "<td>" + obj.nickname + "</td>";
    str += "<td>" + obj.sex + "</td>";
    str += "</tr>";

    return str;
}
$(document).ready(function () {

    $.post("/user/user_profile", function (user) {

        $("#content-user").append(addToTable(user));
    });
});


//function returnStatus(user) {
//    $.ajax({
//        url: "/admin/admin_user_status",
//        type: "POST",
//        data : JSON.stringify(user),
//        contentType: 'application/json',
//        dataType: 'json',
//        success: function (user) {
//            alert(user.login + ' is ' + user.userStatus.toLowerCase());
//        }
//    });
//}


