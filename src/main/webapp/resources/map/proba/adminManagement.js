function addToTable(obj) {
    var typeCheckBox = '';
    if (obj.userStatus === 'ENABLED') {
        typeCheckBox = 'checked = "checked"';
    }
    var str = "<tr>";
    str += "<td>" + obj.login + "</td>";
    str += "<td>" + "<input id ='"+ obj.idUser +"' type='checkbox'" + typeCheckBox + "></td>";
    str += "</tr>";
    return str;
}
$(document).ready(function () {

    $.post("/admin_list", function (data) {
        var contentToTable = '';
        data.forEach(function (el) {

            contentToTable += addToTable(el);
        });
        $("#content").append(contentToTable);


        $("input:checkbox").change(function () {
            if ($(this).is(":checked")) {
                alert("good");
                //$.ajax({
                //    url: '/admin_user_status',
                //    type: 'POST',
                //    data: { idUSer:$(this).attr("user_id"), userStatus:"DISABLED" }
                //});

                var user = {idUser : $(this).attr("id"), userStatus:"ENABLED"};
                returnStatus(user);
            } else {
                alert("basd");

                var user = {idUser : $(this).attr("id"), userStatus:"DISABLED"};

                returnStatus(user);
                //$.ajax({
                //    url: '/admin_user_status',
                //    type: 'POST',
                //    data: { idUSer:$(this).attr("user_id"), userStatus:"ENABLED"}
                //});
            }
        });
    });
});


function returnStatus(user) {
    $.ajax({
        url: "/admin_user_status",
        type: "POST",
        data : JSON.stringify(user),
        contentType: 'application/json',
        dataType: 'json',
        success : function(user){
            alert(user);
        }
    });
}


