Menus.prototype.addPopupMenuCellEditItems = function(menu, cell, evt, parent)
{
	var graph = this.editorUi.editor.graph;
	var state = graph.view.getState(cell);
	this.addMenuItems(menu, ['-', 'editStyle', 'editData', 'editLink'], parent, evt);
	
	// Shows edit image action if there is an image in the style
	if (graph.getModel().isVertex(cell) && mxUtils.getValue(state.style, mxConstants.STYLE_IMAGE, null) != null)
	{
		menu.addSeparator();
		this.addMenuItem(menu, 'image', parent, evt).firstChild.nextSibling.innerHTML = mxResources.get('editImage') + '...';
		this.addMenuItem(menu, 'crop', parent, evt);
	}

	if ((graph.getModel().isVertex(cell) && graph.getModel().getChildCount(cell) == 0)
			|| graph.isContainer(cell)) //Allow vertex only excluding group (but allowing container [e.g, swimlanes])
	{
		this.addMenuItem(menu, 'editConnectionPoints', parent, evt);
	}
};