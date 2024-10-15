	EditorUi.prototype.installStatusMinimizer = function(parent)
	{
		parent = (parent != null) ? parent : this.statusContainer.parentNode;
		var visible = false;
		
		mxEvent.addListener(parent, 'mouseenter', mxUtils.bind(this, function()
		{
			if (Editor.currentTheme == 'sketch' && this.editor.getStatus() != '')
			{
				this.statusContainer.style.display = 'inline-block';
			}
		}));
		
		mxEvent.addListener(parent, 'mouseleave', mxUtils.bind(this, function()
		{
			if (Editor.currentTheme == 'sketch' && !visible)
			{
				this.statusContainer.style.display = 'none';
			}
		}));

		var statusChanged = mxUtils.bind(this, function()
		{
			if (Editor.currentTheme == 'sketch')
			{
				var elt = (this.statusContainer.firstChild != null &&
					typeof this.statusContainer.firstChild.getAttribute === 'function') ?
					this.statusContainer.firstChild : null;
				visible = elt != null && elt.getAttribute('class') != null;
				
				if (!visible && elt != null)
				{
					var title = elt.getAttribute('title');
					var file = this.getCurrentFile();
					var key = (file != null) ? file.savingStatusKey :
						DrawioFile.prototype.savingStatusKey;
					
					// Shows animated spinner while saving
					if (title == mxResources.get(key) + '...')
					{
						this.statusContainer.innerHTML = '<div><img title="' + mxUtils.htmlEntities(
							mxResources.get(key)) + '...' + '"src="' + Editor.tailSpin + '"></div>';
						visible = true;
					}
				}

				// Checks size of container without status
				this.statusContainer.style.display = 'none';
				var empty = parent.clientWidth <= 32;

				// Hides container if empty and no status
				parent.style.visibility = (empty && this.editor.getStatus() == '') ?
					'hidden' : '';

				// Shows status if container empty or status relevant
				if (empty || visible)
				{
					this.statusContainer.style.display = 'inline-block';
					visible = true;
				}
			}
			else if (Editor.currentTheme == 'simple')
			{
				// Required for flex layout gaps to be applied correctly
				this.statusContainer.style.display = 'inline-block';
				this.statusContainer.style.display = (this.statusContainer.clientWidth == 0)
					? 'none' : 'inline-block';
			}
		});
		
		this.editor.addListener('statusChanged', statusChanged);
		statusChanged();
	};