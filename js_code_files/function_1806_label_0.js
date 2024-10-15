function reset_graph_history() {
    var table = eventGraph.menu_history.items["table_graph_history_actiontable"];
    dataHandler.fetch_graph_history(function(history_formatted, network_previews) {
        table.set_table_data(history_formatted);
        for(var i=0; i<history_formatted.length; i++) {
            var history = history_formatted[i];
            var cur_email = history[2];
            var tr = eventGraph.menu_history.items.table_graph_history_actiontable.get_DOM_row(i);
            if (!(cur_email == user_email || is_siteadmin)) {
                // disable delete button
                var btn_del = $(tr).find('.btn-danger');
                btn_del.prop('disabled', true);
            }
            // set tooltip preview
            var preview = network_previews[i];
            if (typeof preview == 'string') {
                var btn_plot = $(tr).find('.btn-success');
                btn_plot.data('network-preview', preview);
                btn_plot.popover({
                    container: 'body',
                    content: function() { return '<img style="width: 500px; height: 150px;" src="' + $('<div>').text($(this).data('network-preview')).html() + '" />'; },
                    placement: 'right',
                    trigger: 'hover',
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content" style="width: 500px; height: 150px;"></div></div>',
                    html: true,
                });
            }
        }
    });
}