function check_update_seat(course_period_id) {
  var frmvalidator = new Validator("update_seats");
  //    alert(2);
  frmvalidator.addValidation(
    "tables[course_periods][" + course_period_id + "][TOTAL_SEATS]",
    "req",
    "Please enter a number"
  );
  //    alert(3);
}