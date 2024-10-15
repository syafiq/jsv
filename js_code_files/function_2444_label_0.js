    onDelete: function () {
        var selections = this.grid.getSelectionModel().getSelected();
        if (!selections || selections.length < 1) {
            return false;
        }
        var rec = selections.getAt(0);
        this.grid.store.remove(rec);
    },