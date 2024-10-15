function toggle_div_visibility(param, val, json_field) {

    var field_ids = document.getElementById(json_field).value;
    field_ids = JSON.parse(field_ids);


    if (val.checked == true) {
        $('#' + param).css({ 'display': 'inline-block' });
    } else {
        for (var i = 0; i < field_ids.length; i++)
            document.getElementById(field_ids[i]).checked = false;
        document.getElementById(param).style.display = "none";

    }
}