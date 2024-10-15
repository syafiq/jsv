    getLinkContent: function () {

        let text = "[" + t("not_set") + "]";
        if (this.data.text) {
            text = this.data.text;
        } else if (this.data.path) {
            text = this.data.path;
        }
        if (this.data.path || this.data.anchor || this.data.parameters) {
            let fullpath = this.data.path + (this.data.parameters ? '?' + Ext.util.Format.htmlEncode(this.data.parameters) : '') + (this.data.anchor ? '#' + Ext.util.Format.htmlEncode(this.data.anchor) : '');
            let displayHtml = Ext.util.Format.htmlEncode(text);
            
            if (this.config.textPrefix !== undefined) {
                displayHtml = this.config.textPrefix + displayHtml;
            }
            if (this.config.textSuffix !== undefined) {
                displayHtml += this.config.textSuffix;
            }

            return '<a href="' + fullpath + '" class="' + this.config["class"] + ' ' + Ext.util.Format.htmlEncode(this.data["class"]) + '">' + displayHtml + '</a>';
        }
        return text;
    },