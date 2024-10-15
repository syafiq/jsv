function checkAllDtMod(elem, name, staticValue = undefined) {
    var value = staticValue;
    if (document.getElementById('checked_all')) {
        if (elem.checked == true) {
            document.getElementById('checked_all').value = 'true';
        } else {
            document.getElementById('checked_all').value = 'false';
        }
    }
    var res_length = document.getElementById('res_length').value;
    var res_len = document.getElementById('res_len').value;
    var unique_id = res_len.split(',');
    //    alert(name+' '+elem.checked+' '+unique_id);

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
    } else {
        for (var i = 0; i < res_length; i++) {
            if (elem.checked == true) {
                if (document.getElementById(unique_id[i])) {
                    if (staticValue === undefined) value = unique_id[i];
                    $('#hidden_checkboxes').append("<input type=hidden name='" + name + "[" + unique_id[i] + "]' value='" + value + "' data-checkbox-hidden-id='" + unique_id[i] + "' />");
                    document.getElementById(unique_id[i]).checked = true;
                }
            } else {
                if (document.getElementById(unique_id[i])) {
                    $('[data-checkbox-hidden-id=' + unique_id[i] + ']').remove();
                    document.getElementById(unique_id[i]).checked = false;
                }
            }
        }
    }
}