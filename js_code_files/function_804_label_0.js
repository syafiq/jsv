EditorUi.prototype.createStatusContainer = function()
{
	var container = document.createElement('a');
	container.className = 'geItem geStatus';
	container.style.display = 'inline-flex';
	container.style.alignItems = 'center';

	// Handles data-action attribute
	mxEvent.addListener(container, 'click', mxUtils.bind(this, function(evt)
	{
		var elt = mxEvent.getSource(evt);
		
		if (elt.nodeName != 'A')
		{
			var name = elt.getAttribute('data-action');

			// Make generic
			if (name == 'statusFunction' && this.editor.statusFunction != null)
			{
				this.editor.statusFunction();
			}
			else if (name != null)
			{
				var action = this.actions.get(name);

				if (action != null)
				{
					action.funct();
				}
			}
			else
			{
				var title = elt.getAttribute('data-title');
				var msg = elt.getAttribute('data-message');

				if (title != null && msg != null)
				{
					this.showError(title, msg);
				}
				else
				{
					var link = elt.getAttribute('data-link');

					if (link != null)
					{
						this.editor.graph.openLink(link);
					}
				}
			}

			mxEvent.consume(evt);
		}
	}));

	return container;
};