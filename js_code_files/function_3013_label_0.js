Menus.prototype.addPopupMenuStyleItems = function(menu, cell, evt)
{
	if (this.isShowStyleItems())
	{
		if (this.editorUi.editor.graph.getSelectionCount() == 1)
		{
			this.addMenuItems(menu, ['-', 'setAsDefaultStyle'], null, evt);
		}
		else if (this.editorUi.editor.graph.isSelectionEmpty())
		{
			this.addMenuItems(menu, ['-', 'clearDefaultStyle'], null, evt);
		}
	}
};