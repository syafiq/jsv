    function renderWarning(node) {
        var gui = '';
        if (node.message) {
            gui += '<div class="warning"><span>' + _.escape(node.message) + '</span></div>';
        }
        return gui;
    }