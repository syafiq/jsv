function show_this_msg(tag_id, msg_id, option)
{
    document.getElementById(tag_id).disabled = true;

    if (option == "calendar")
        option = "the calendar";
    if (option == "grade")
        option = "the grade scale";
    document.getElementById(msg_id).innerHTML = '<font style="color:red"><b>Cannot change ' + option + ' as this course period has association</b></font>';
}