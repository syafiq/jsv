EditorUi.prototype.updateSelectionStateForTableCells = function(result)
{
	if (result.cells.length > 1 && result.cell)
	{
		var cells = mxUtils.sortCells(result.cells);
		var model = this.editor.graph.model;
		var parent = model.getParent(cells[0]);
		var table = model.getParent(parent);

		if (parent != null && table != null)
		{
			var col = parent.getIndex(cells[0]);
			var row = table.getIndex(parent);
			var lastspan = null;
			var colspan = 1;
			var rowspan = 1;
			var index = 0;

			var nextRowCell = (row < table.getChildCount() - 1) ?
				model.getChildAt(model.getChildAt(
					table, row + 1), col) : null;
			
			while (index < cells.length - 1)
			{
				var next = cells[++index];
				
				if (nextRowCell != null && nextRowCell == next &&
					(lastspan == null || colspan == lastspan))
				{
					lastspan = colspan;
					colspan = 0;
					rowspan++;
					parent = model.getParent(nextRowCell);
					nextRowCell = (row + rowspan < table.getChildCount()) ?
						model.getChildAt(model.getChildAt(
							table, row + rowspan), col) : null;
				}

				var state = this.editor.graph.view.getState(next);

				if (next == model.getChildAt(parent, col + colspan) && state != null &&
					mxUtils.getValue(state.style, 'colspan', 1) == 1 &&
					mxUtils.getValue(state.style, 'rowspan', 1) == 1)
				{
					colspan++;
				}
				else
				{
					break;
				}
			}

			if (index == rowspan * colspan - 1)
			{
				result.mergeCell = cells[0];
				result.colspan = colspan;
				result.rowspan = rowspan;
			}
		}
	}
};