	EditorUi.prototype.getWindows = function()
	{
		var wnd = [this.sidebarWindow, this.formatWindow, this.freehandWindow];

		if (this.actions != null)
		{
			wnd = wnd.concat([this.actions.outlineWindow, this.actions.layersWindow]);
		}

		if (this.menus != null)
		{
			wnd = wnd.concat([this.menus.tagsWindow, this.menus.findWindow,
				this.menus.findReplaceWindow, this.menus.commentsWindow]);
		}

		return wnd;
	};