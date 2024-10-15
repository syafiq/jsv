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