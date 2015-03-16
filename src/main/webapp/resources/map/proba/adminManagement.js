function addToTable(obj) {
    var str = "<tr>";
    str += "<td>" + obj.login + "</td>";
    str += "<td>" + "<input type='checkbox'>" + "</td>";
    str += "</tr>";
    return str;
}


$(document).ready(function () {
    $("#admin_list").click(function () {
        $.post("/admin_list", function (data) {
            var contentToTable = '';
            data.forEach(function (el) {
                contentToTable += addToTable(el);
            });
            $("#content").append(contentToTable);
            $("input:checkbox").change(function () {
                if ($(this).is(":checked")) {
                    $.ajax({
                        url: '',
                        type: 'POST',
                        data: { strID:$(this).attr("id"), strState:"1" }
                    });
                } else {
                    $.ajax({
                        url: 'on_off.aspx',
                        type: 'POST',
                        data: { strID:$(this).attr("id"), strState:"0" }
                    });
                }
            });
        });


    });
});


