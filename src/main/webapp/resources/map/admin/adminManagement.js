function createHtmlTag(nameTag, attrs) {
    return $("<" + nameTag + "/>", attrs);
}
function addToTable(obj) {
    var typeCheckBox = '';
    if (obj.userStatus === 'ENABLED') {
        typeCheckBox = 'checked = "checked"';
    }
    var str = "<tr>";
    str += "<td>" + obj.login + "</td>";
    str += "<td>" + "<input id ='"+ obj.userId +"' type='checkbox'" + typeCheckBox + "></td>";
    str += "</tr>";
    return str;

}
//todo : FINISHED?? review
//    var trStart = createHtmlTag("tr", {});
//    var tdFirst = createHtmlTag("td", {text : obj.login});
//
//    var tdSecond = createHtmlTag("td",{
//        input : {
//            id : obj.userId,
//            type : "checkbox" + typeCheckBox
//        }
//    })
//    tdFirst.appendTo(trStart);
//    tdSecond.append(trStart);

$(document).ready(function () {

    $.post("/admin/admin_list", function (data) {
        var contentToTable = '';
        data.forEach(function (el) {
            contentToTable += addToTable(el);
        });
        $("#content").append(contentToTable);

        $("input:checkbox").change(function () {
            var user;
            if ($(this).is(":checked")) {
                user = {userId : $(this).attr("id"), userStatus:"ENABLED"};
                returnStatus(user);
            } else {
                user = {userId : $(this).attr("id"), userStatus:"DISABLED"};
                returnStatus(user);
            }
        });
    });
});


function returnStatus(user) {
    $.ajax({
        url: "/admin/admin_user_status",
        type: "POST",
        data : JSON.stringify(user),
        contentType: 'application/json',
        dataType: 'json',
        success: function (user) {
            alert(user.login + ' is ' + user.userStatus.toLowerCase());
        }
    });
}






