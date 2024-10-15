	EditorUi.prototype.setGraphEnabled = function(enabled)
	{
		this.diagramContainer.style.visibility = (enabled) ? '' : 'hidden';
		this.formatContainer.style.visibility = (enabled) ? '' : 'hidden';
		this.sidebarContainer.style.display = (enabled) ? '' : 'none';
		this.hsplit.style.display = (enabled && Editor.currentTheme != 'simple' &&
			Editor.currentTheme != 'sketch' && Editor.currentTheme != 'min')
			? '' : 'none';
		this.editor.graph.setEnabled(enabled);

		if (this.sidebarFooterContainer != null)
		{
			this.sidebarFooterContainer.style.display = (enabled) ? '' : 'none';
		}
		
		if (this.tabContainer != null)
		{
			this.tabContainer.style.visibility = (enabled) ? '' : 'hidden';	
		}
		
		if (this.ruler != null)
		{
			this.ruler.hRuler.container.style.visibility = (enabled) ? '' : 'hidden';
			this.ruler.vRuler.container.style.visibility = (enabled) ? '' : 'hidden';
		}
		
		if (!enabled)
		{
            if (this.actions.outlineWindow != null)
            {
            	this.actions.outlineWindow.window.setVisible(false);
            }

            if (this.actions.layersWindow != null)
            {
            	this.actions.layersWindow.window.setVisible(false);
            }

            if (this.menus.tagsWindow != null)
            {
            	this.menus.tagsWindow.window.setVisible(false);
            }

            if (this.menus.findWindow != null)
            {
            	this.menus.findWindow.window.setVisible(false);
            }

            if (this.menus.findReplaceWindow != null)
            {
            	this.menus.findReplaceWindow.window.setVisible(false);
            }
		}
	};