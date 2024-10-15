    onAdd:function (btn, ev) {
        Ext.MessageBox.prompt("", t("email_address"), function (button, value) {
            if(button == "ok") {
                var u = {
                    "address": value
                };

                this.grid.store.insert(0, u);
            }

        }.bind(this));
    }