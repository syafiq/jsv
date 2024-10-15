function formcheck_school_setup_school(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("school");

  frmvalidator.addValidation("values[TITLE]", "req", "Please enter the title");
  frmvalidator.addValidation(
    "values[TITLE]",
    "maxlen=50",
    "Max length for title is 50 characters"
  );
  //
  //frmvalidator.addValidation("values[ADDRESS]", "req", "Please enter address");
  frmvalidator.addValidation(
    "values[ADDRESS]",
    "maxlen=100",
    "Max length for address is 100 characters"
  );

  //frmvalidator.addValidation("values[CITY]", "req", "Please enter city name");
  frmvalidator.addValidation(
    "values[CITY]",
    "maxlen=100",
    "Max length for city is 100 characters"
  );

  //frmvalidator.addValidation("values[STATE]", "req", "Please enter state name");
  frmvalidator.addValidation(
    "values[STATE]",
    "maxlen=100",
    "Max length for state is 100 characters"
  );

  //frmvalidator.addValidation("values[ZIPCODE]", "req", "Please enter zipcode");
  // frmvalidator.addValidation("values[ZIPCODE]", "numeric", "Zip allows only numeric value");

  //frmvalidator.addValidation("values[PHONE]", "req", "Please enter phone Number");
  // frmvalidator.addValidation("values[PHONE]", "numeric", "Phone number allows number only");

  //frmvalidator.addValidation("values[PRINCIPAL]", "req", "Please enter principal name");
  frmvalidator.addValidation(
    "values[PRINCIPAL]",
    "maxlen=100",
    "Max length for state is 100 characters"
  );

  frmvalidator.addValidation(
    "values[REPORTING_GP_SCALE]",
    "req",
    "Please enter grading scale value"
  );
  frmvalidator.addValidation(
    "values[REPORTING_GP_SCALE]",
    "dec",
    "Please enter decimal value only"
  );

  //frmvalidator.addValidation("values[E_MAIL]", "email", "Please enter email in proper format");
  

  var school_custom_req_ids = document.getElementById("custom_sch_field_ids").value;
  console.log(school_custom_req_ids);
  if (school_custom_req_ids != "") {
    var req_field_ids = school_custom_req_ids.split(","); 
    var school_custom_req_titles = document.getElementById("custom_sch_field_titles").value;
    var req_field_titles = school_custom_req_titles.split(",");
    for (var rt_i = 0; rt_i < req_field_ids.length ; rt_i++) {
      frmvalidator.addValidation(
        req_field_ids[rt_i],
        "req",
        "Please enter the " + req_field_titles[rt_i]
      );
    }
  }


  var school_id = document.getElementById("h1").value;

  if (school_id != "") {
    frmvalidator.addValidation(
      "inputvalues[TITLE]",
      "req",
      "Please enter the title"
    );
    frmvalidator.addValidation(
      "inputvalues[TITLE]",
      "maxlen=50",
      "Max length for title is 50 characters"
    );

    frmvalidator.addValidation(
      "inputvalues[ADDRESS]",
      "req",
      "Please enter address"
    );
    frmvalidator.addValidation(
      "inputvalues[ADDRESS]",
      "maxlen=100",
      "Max length for address is 100 characters"
    );

    frmvalidator.addValidation(
      "inputvalues[CITY]",
      "req",
      "Please enter city name"
    );
    frmvalidator.addValidation(
      "inputvalues[CITY]",
      "maxlen=100",
      "Max length for city is 100 characters"
    );

    frmvalidator.addValidation(
      "inputvalues[STATE]",
      "req",
      "Please enter state name"
    );
    frmvalidator.addValidation(
      "inputvalues[STATE]",
      "maxlen=100",
      "Max length for state is 100 characters"
    );

    frmvalidator.addValidation(
      "inputvalues[ZIPCODE]",
      "req",
      "Please enter zipcode "
    );
    // frmvalidator.addValidation("inputvalues[ZIPCODE]", "numeric", "Zip allows only numeric value");

    frmvalidator.addValidation(
      "inputvalues[PHONE]",
      "req",
      "Please enter phone number"
    );
    //frmvalidator.addValidation("inputvalues[PHONE]", "numeric", "Phone number allows number only");

    frmvalidator.addValidation(
      "inputvalues[PRINCIPAL]",
      "req",
      "Please enter principal name"
    );
    frmvalidator.addValidation(
      "values[PRINCIPAL]",
      "maxlen=100",
      "Max length for state is 100 characters"
    );

    frmvalidator.addValidation(
      "inputvalues[REPORTING_GP_SCALE]",
      "req",
      "Please enter grading scale value"
    );
    frmvalidator.addValidation(
      "inputvalues[REPORTING_GP_SCALE]",
      "dec",
      "Please enter decimal value only"
    );

    //frmvalidator.addValidation("inputvalues[E_MAIL]", "email", "Please enter email in proper format");
  }
}