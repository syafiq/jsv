    function renderRestrictedPipeline(node) {
        var gui = '';
        gui += '<h3 title="' + node.name + '" class="restricted">' + node.name + '</h3>';
        if (node.message) {
            gui += '<div class="message restricted"><span>' + node.message + '</span></div>';
        }
        gui += '<div class="actions restricted">';
        gui += '<button class="pin" title="Keep dependencies highlighted" /></div>';
        return gui;
    }