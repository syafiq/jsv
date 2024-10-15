function toggle_course_weight(param, cp_id)
{

    if (param.value != '')
    {
        if (cp_id != 0)
        {
            var child = document.getElementById("divtables[course_periods][" + cp_id + "][COURSE_WEIGHT]").children[0];
            var clickEvent = new MouseEvent("click");
            child.dispatchEvent(clickEvent);

            var child1 = document.getElementById("divtables[course_periods][" + cp_id + "][DOES_BREAKOFF]").children[0];
            var clickEvent1 = new MouseEvent("click");
            child1.dispatchEvent(clickEvent1);
        }

        document.getElementById("course_weight_id").disabled = false;
        document.getElementById("course_breakoff_id").disabled = false;
    }
    else
    {
        if (cp_id != 0)
        {
            var child = document.getElementById("divtables[course_periods][" + cp_id + "][COURSE_WEIGHT]").children[0];
            var clickEvent = new MouseEvent("click");
            child.dispatchEvent(clickEvent);
            var child1 = document.getElementById("divtables[course_periods][" + cp_id + "][DOES_BREAKOFF]").children[0];
            var clickEvent1 = new MouseEvent("click");
            child1.dispatchEvent(clickEvent1);
        }
        document.getElementById("course_weight_id").checked = false;
        document.getElementById("course_weight_id").disabled = true;
        document.getElementById("course_breakoff_id").checked = false;
        document.getElementById("course_breakoff_id").disabled = true;
    }
}