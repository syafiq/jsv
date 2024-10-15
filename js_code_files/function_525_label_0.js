    function disablePermissionsFieldIfNeeded(checkbox_use_perms, select_ugroups) {
        if (!checkbox_use_perms.checked) {
            select_ugroups.disabled = true;
        }
    }