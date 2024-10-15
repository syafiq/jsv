    function disablePermissionsFieldIfNeeded(element) {
        if ($("input[type='checkbox']", element).is(":not(:checked)")) {
            $(element).siblings("select").attr("disabled", "disabled");
        }
    }