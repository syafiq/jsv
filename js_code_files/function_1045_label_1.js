    function bindSwitch(element) {
        $("input[type='checkbox']", element).bind("change", function () {
            togglePermissionsField(element);
        });
    }