Menus.prototype.addPopupMenuEditItems = function(menu, cell, evt)
{
	if (this.editorUi.editor.graph.isSelectionEmpty())
	{
		this.addMenuItems(menu, ['pasteHere'], null, evt);
	}
	else
	{
		this.addMenuItems(menu, ['delete', '-', 'cut', 'copy', '-', 'duplicate'], null, evt);
	}
};