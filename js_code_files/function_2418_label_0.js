EditorUi.prototype.showDataDialog = function(cell)
{
	if (cell != null && typeof window.EditDataDialog !== 'undefined')
	{
		var dlg = new EditDataDialog(this, cell);
		this.showDialog(dlg.container, 480, 420, true, false, null, false);
		dlg.init();
	}
};