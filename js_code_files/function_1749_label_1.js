function cp_toggle(chk)
{
    if (chk.checked == true)
    {
        document.getElementById(chk.id + '_period').disabled = false;

        document.getElementById(chk.id + '_room').disabled = false;
        document.getElementById(chk.id + '_does_attendance').disabled = false;

    }
    else
    {
        document.getElementById(chk.id + '_period').value = '';
        document.getElementById(chk.id + '_period').disabled = true;
        document.getElementById(chk.id + '_period_time').innerHTML = '';
        document.getElementById(chk.id + '_room').value = '';
        document.getElementById(chk.id + '_room').disabled = true;
        document.getElementById(chk.id + '_does_attendance').checked = false;
        document.getElementById(chk.id + '_does_attendance').disabled = true;
    }
}