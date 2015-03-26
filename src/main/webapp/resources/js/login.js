$(document).ready(function () {

    $(document).mousemove(function (event) {

        TweenLite.to($('body'), .5, {
            css: {
                backgroundPosition: "" + parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / '12') + "px, " + parseInt(event.pageX / '15') + "px " + parseInt(event.pageY / '15') + "px, " + parseInt(event.pageX / '30') + "px " + parseInt(event.pageY / '30') + "px"
            }
        });
    });
});

function checkForm() {
    var u_login = document.forms['form']['us_name'].value;
    var pass = document.forms['form']['us_pass'].value;
    if (u_login == null || u_login == '') {
        document.forms['form']['us_name'].focus();
        return false;
    }
    if (pass == null || pass == '') {
        document.forms['form']['us_name'].focus();
        return false;
    }
    return true;
}
