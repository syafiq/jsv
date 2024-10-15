    function renderWarning(node) {
        var gui = '';
        if (node.message) {
            gui += '<div class="warning"><span>' + node.message + '</span></div>';
        }
        return gui;
    }