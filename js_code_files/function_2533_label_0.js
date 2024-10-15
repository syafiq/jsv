function check_update_seat(cp_seats,course_period_id,student_count)
{
    updated_seats = document.getElementById("tables[course_periods][" + course_period_id + "][TOTAL_SEATS]");
    if (updated_seats != null)
    {
        if (updated_seats.value.trim() == '' || updated_seats.value.trim() == '0')
        {
            document.getElementById('err_message').innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> New number of seats cannot be blank/zero.</div>';
            return false;
        } else if (updated_seats.value < cp_seats)
        {
            document.getElementById('err_message').innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> New number of seats cannot be lesser than '+cp_seats+'.</div>';
            return false;
        } else if (updated_seats.value < (cp_seats+student_count))
        {
            document.getElementById('err_message').innerHTML = `<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> New number of seats cannot be lesser than ${cp_seats + student_count} because we have ${student_count} students left to schedule.</div>`;
            return false;
        } else
            return true;
    }
}