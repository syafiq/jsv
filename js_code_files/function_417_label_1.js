function usercheck_init_staff(i) {

    var obj = document.getElementById('ajax_output_st');
    obj.innerHTML = '';
    document.getElementById('usr_err_check').value = '0';
    if (i.value.length < 1)
        return;

    var err = new Array();
    if (i.value.match(/[^A-Za-z0-9_@.]/))
        err[err.length] = 'Username can only contain letters, numbers, underscores, at the rate and dots';
    if (i.value.length < 3)
        err[err.length] = 'Username Too Short';
    if (err != '') {
        obj.style.color = '#ff0000';
        obj.innerHTML = err.join('<br />');

        if(i.value.length > 1)
        {
            window.$("#staff_username_flag").val("0");
            window.$("#mod_staff_btn").attr("disabled", true);
        }

        return;
    }

    window.$("#staff_username_flag").val("1");
    window.$("#mod_staff_btn").attr("disabled", false);

    ajax_call('Validator.php?u=' + i.value + 'stud', usercheck_callback_staff);
}