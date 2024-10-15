StyleFormatPanel.prototype.addEditOps = function(div)
{
	var ss = this.editorUi.getSelectionState();
	var btn = null;
	
	if (ss.cells.length == 1)
	{
		btn = mxUtils.button(mxResources.get('editStyle'), mxUtils.bind(this, function(evt)
		{
			this.editorUi.actions.get('editStyle').funct();
		}));
		
		btn.setAttribute('title', mxResources.get('editStyle') + ' (' +
			this.editorUi.actions.get('editStyle').shortcut + ')');
		btn.style.width = '210px';
		btn.style.marginBottom = '2px';
		
		div.appendChild(btn);
	}
	
	if (ss.image && ss.cells.length > 0)
	{
		var btn2 = mxUtils.button(mxResources.get('editImage'), mxUtils.bind(this, function(evt)
		{
			this.editorUi.actions.get('image').funct();
		}));
		
		btn2.setAttribute('title', mxResources.get('editImage'));
		btn2.style.marginBottom = '2px';
		
		if (btn == null)
		{
			btn2.style.width = '210px';
		}
		else
		{
			btn.style.width = '104px';
			btn2.style.width = '104px';
			btn2.style.marginLeft = '2px';
		}
		
		div.appendChild(btn2);
	}
	
	return div;
};