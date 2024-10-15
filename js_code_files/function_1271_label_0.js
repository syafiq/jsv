DiagramFormatPanel.prototype.addView = function(div)
{
	var ui = this.editorUi;
	var editor = ui.editor;
	var graph = editor.graph;
	
	div.appendChild(this.createTitle(mxResources.get('view')));
	
	// Grid
	this.addGridOption(div);
	
	// Page View
	if (DiagramFormatPanel.showPageView)
	{
		div.appendChild(this.createOption(mxResources.get('pageView'), function()
		{
			return graph.pageVisible;
		}, function(checked)
		{
			ui.actions.get('pageView').funct();
		},
		{
			install: function(apply)
			{
				this.listener = function()
				{
					apply(graph.pageVisible);
				};
				
				ui.addListener('pageViewChanged', this.listener);
			},
			destroy: function()
			{
				ui.removeListener(this.listener);
			}
		}));
	}
	
	if (graph.isEnabled())
	{
		var bg = null;

		if (this.showBackgroundImageOption)
		{
			var bg = this.createOption(mxResources.get('background'), function()
			{
				return (graph.background != mxConstants.NONE &&
					graph.background != null) ||
					graph.backgroundImage != null;
			}, function(checked)
			{
				if (checked)
				{
					graph.model.execute(new ChangePageSetup(ui, '#ffffff'));
				}
				else
				{
					graph.model.execute(new ChangePageSetup(ui));
				}
			},
			{
				install: function(apply)
				{
					this.listener = function()
					{
						apply((graph.background != mxConstants.NONE &&
							graph.background != null) ||
							graph.backgroundImage != null);
					};
					
					ui.addListener('backgroundColorChanged', this.listener);
					ui.addListener('backgroundImageChanged', this.listener);
				},
				destroy: function()
				{
					ui.removeListener(this.listener);
				}
			});

			var label = bg.getElementsByTagName('span')[0];
			label.style.display = 'inline-block';
			label.style.textOverflow = 'ellipsis';
			label.style.overflow = 'hidden';
			label.style.maxWidth = '68px';

			if (mxClient.IS_FF)
			{
				label.style.marginTop = '1px';
			}

			var btn = mxUtils.button(mxResources.get('change') + '...', function(evt)
			{
				ui.showBackgroundImageDialog(null,
					ui.editor.graph.backgroundImage,
					ui.editor.graph.background);
				mxEvent.consume(evt);
			})
			
			btn.style.position = 'absolute';
			btn.style.marginTop = '-4px';
			btn.style.height = '22px';
			btn.style.right = '16px';
			btn.style.width = '104px';
			btn.style.maxWidth = '104px';
		
			bg.appendChild(btn);
		}
		else
		{
			bg = this.createColorOption(mxResources.get('background'), function()
			{
				return graph.background;
			}, function(color)
			{
				var change = new ChangePageSetup(ui, color);
				change.ignoreImage = color != null &&
					color != mxConstants.NONE;
				
				graph.model.execute(change);
			}, '#ffffff',
			{
				install: function(apply)
				{
					this.listener = function()
					{
						apply(graph.background);
					};
					
					ui.addListener('backgroundColorChanged', this.listener);
				},
				destroy: function()
				{
					ui.removeListener(this.listener);
				}
			});
		}
		
		div.appendChild(bg);
	}
	
	return div;
};