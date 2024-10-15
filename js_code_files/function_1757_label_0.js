function checkAllDtModAddDrop(elem, name, staticValue = undefined) {
    var value = staticValue;
    if (document.getElementById('checked_all')) {
        if (elem.checked == true) {
            document.getElementById('checked_all').value = 'true';
        } else {
            document.getElementById('checked_all').value = 'false';
        }
    }

    if (document.getElementById('all_stu_res')) {
        var all_stu_res = document.getElementById('all_stu_res').value;
        var all_stu_ids = all_stu_res.split(',');
        for (var i = 0; i < all_stu_ids.length; i++) {
            if (elem.checked == true) {
                if (staticValue === undefined) value = all_stu_ids[i];
                $('#hidden_checkboxes').append("<input type=hidden name='" + name + "[" + all_stu_ids[i] + "]' value='" + value + "' data-checkbox-hidden-id='" + all_stu_ids[i] + "' />");
                if (document.getElementById(all_stu_ids[i])) {
                    document.getElementById(all_stu_ids[i]).checked = true;
                }
            } else {
                $('[data-checkbox-hidden-id=' + all_stu_ids[i] + ']').remove();
                if (document.getElementById(all_stu_ids[i])) {
                    document.getElementById(all_stu_ids[i]).checked = false;
                }
            }
        }
    }
}