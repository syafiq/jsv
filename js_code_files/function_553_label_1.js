    function renderDeletedPipeline(node) {
        var gui = '';
        gui += '<h3 title="' + node.name + '" class="deleted">' + node.name + '</h3>';
        if (node.message) {
            gui += '<div class="message deleted"><span>' + node.message + '</span></div>';
        }
        gui += '<div class="actions deleted"><button class="pin" title="Keep dependencies highlighted" /></div>';
        return gui;
    }