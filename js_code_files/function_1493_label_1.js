function confirmAction() {
    chk = 'n';
    var option = "";
    if (document.run_schedule.test_mode.checked == false)
    {

        if (document.run_schedule.delete_mode.checked == false)
        {

            chk = 'y';
        }
        else
            var option = "delete current schedules ? ";
    }
    else
        var option = "run the scheduler to schedule unscheduled requests? ";
    if (chk == 'y')
    {
        var d = $('divErr');
        var err = "Please select one options.";
        d.innerHTML = "<b><font color=red>" + err + "</font></b>";
        return false;
    }
    else
    {
        if (confirm("Do you really want to " + option) == true)
            return true;
        else
            return false;
    }
}