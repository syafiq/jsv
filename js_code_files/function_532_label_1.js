	Menus.prototype.addPopupMenuEditItems = function(menu, cell, evt)
	{
		menuAddPopupMenuEditItems.apply(this, arguments);
		
		if (this.editorUi.editor.graph.isSelectionEmpty())
		{
			this.addMenuItems(menu, ['copyAsImage'], null, evt);
		}
	};