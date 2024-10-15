	EditorUi.prototype.destroyWindows = function()
	{
        if (this.sidebarWindow != null)
        {
            this.sidebarWindow.destroy();
            this.sidebarWindow = null;
        }
        
        if (this.formatWindow != null)
        {
        	this.formatWindow.destroy();
        	this.formatWindow = null;
        }

		if (this.freehandWindow != null)
		{
        	this.freehandWindow.destroy();
        	this.freehandWindow = null;
        }

        if (this.actions.outlineWindow != null)
        {
        	this.actions.outlineWindow.destroy();
        	this.actions.outlineWindow = null;
        }

        if (this.actions.layersWindow != null)
        {
        	this.actions.layersWindow.destroy();
        	this.actions.layersWindow = null;
        }

		if (this.menus != null)
		{
			if (this.menus.tagsWindow != null)
			{
				this.menus.tagsWindow.destroy();
				this.menus.tagsWindow = null;
			}

			if (this.menus.findWindow != null)
			{
				this.menus.findWindow.destroy();
				this.menus.findWindow = null;
			}

			if (this.menus.findReplaceWindow != null)
			{
				this.menus.findReplaceWindow.destroy();
				this.menus.findReplaceWindow = null;
			}

			if (this.menus.commentsWindow != null)
			{
				this.menus.commentsWindow.destroy();
				this.menus.commentsWindow = null;
			}
		}
	};