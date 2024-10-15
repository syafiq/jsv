Menus.prototype.addPopupMenuArrangeItems = function(menu, cell, evt)
{
	if (this.isShowArrangeItems())
	{
		var graph = this.editorUi.editor.graph;
		
		if (graph.getEditableCells(graph.getSelectionCells()).length > 0)
		{
			this.addMenuItems(menu, ['-', 'toFront', 'toBack'], null, evt);
			
			if (graph.getSelectionCount() == 1)
			{
				this.addMenuItems(menu, ['bringForward', 'sendBackward'], null, evt);
			}
		}

		if (graph.getSelectionCount() > 1)	
		{
			this.addMenuItems(menu, ['-', 'group'], null, evt);
		}
		else if (graph.getSelectionCount() == 1 && !graph.getModel().isEdge(cell) &&
			!graph.isSwimlane(cell) && graph.getModel().getChildCount(cell) > 0 &&
			graph.isCellEditable(cell))
		{
			this.addMenuItems(menu, ['-', 'ungroup'], null, evt);
		}
	}
};