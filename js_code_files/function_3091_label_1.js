		html: function (token, attrs, content) {
			var size = 0,
				units = "",
				parsed = parseInt(attrs.defaultattr, 10);
			if (!isNaN(parsed)) {
				size = attrs.defaultattr;
				if (size < 1) {
					size = 1;
				} else if (size > 50) {
					size = 50;
				}
				units = "pt";
			} else {
				var fsStrPos = $.inArray(attrs.defaultattr, mybbCmd.fsStr);
				if (fsStrPos !== -1) {
					size = attrs.defaultattr;
				}
			}
			return '<font data-scefontsize="' + $.sceditor.escapeEntities(attrs.defaultattr) + '" style="font-size: ' + size + units + ';">' + content + '</font>';
		}