Sidebar.prototype.createEdgeTemplateFromCells = function(cells, width, height, title, showLabel, allowCellsInserted, showTooltip, showTitle)
{	
	return this.createItem(cells, title, showLabel, (showTitle != null) ? showTitle : true, width, height, allowCellsInserted, showTooltip);
};