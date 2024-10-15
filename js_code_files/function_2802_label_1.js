function set_check_value(val, name)
{
    if (val.checked == false)
    {

        document.getElementById(name).value = 'N';
        document.getElementById('IS_EMERGENCY_HIDDEN').value = "N";
    }
    else
        document.getElementById('IS_EMERGENCY_HIDDEN').value = "Y";

}