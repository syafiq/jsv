	EditorUi.prototype.doSetCurrentTheme = function(value, delay, post)
	{
		delay = (delay != null) ? delay : 100;

		function isSimple(theme)
		{
			return theme == 'simple' || (delay == 0 &&
				theme == 'sketch');
		};

		// From kennedy to simple or sketch or vice versa
		var curr = Editor.currentTheme;
		var transition = (isSimple(curr) && this.isDefaultTheme(value)) ||
			(this.isDefaultTheme(curr) && isSimple(value));
		var noRestart = transition && (value != 'sketch' && curr != 'sketch');

		if (transition && !this.themeSwitching)
		{
			Editor.currentTheme = value;
			this.themeSwitching = true;
			var scrollState = this.saveScrollState();

			mxUtils.setPrefixedStyle(this.container.style, 'transition', 'all ' + delay + 'ms');

			if (delay == 0)
			{
				this.container.style.opacity = '0';
			}

			window.setTimeout(mxUtils.bind(this, function()
			{
				this.container.style.opacity = '0';

				window.setTimeout(mxUtils.bind(this, function()
				{
					if (isSimple(curr) && this.isDefaultTheme(value))
					{
						if (this.sidebarFooterContainer != null)
						{
							this.sidebarFooterContainer.style.display = 'block';
						}
						
						this.menubarContainer.style.display = 'block';
						this.toolbarContainer.style.display = 'block';
						this.tabContainer.style.display = 'block';
						this.hsplit.style.display = 'block';
						this.hsplitPosition = EditorUi.prototype.hsplitPosition;
						this.menubarHeight = App.prototype.menubarHeight;
						this.formatWidth = EditorUi.prototype.formatWidth;
					}
					else if (this.isDefaultTheme(curr) && isSimple(value))
					{
						if (this.sidebarFooterContainer != null)
						{
							this.sidebarFooterContainer.style.display = 'none';
						}
						
						this.menubarContainer.style.display = 'none';
						this.toolbarContainer.style.display = 'none';
						this.tabContainer.style.display = 'none';
						this.hsplit.style.display = 'none';
						this.hsplitPosition = 0;
						this.menubarHeight = 0;
						this.formatWidth = 0;
					}

					this.switchTheme(value);

					window.setTimeout(mxUtils.bind(this, function()
					{
						this.fireEvent(new mxEventObject('currentThemeChanged'));
						this.editor.fireEvent(new mxEventObject('statusChanged'));
						this.editor.graph.refresh();
						this.restoreScrollState(scrollState);
						this.container.style.opacity = '';

						window.setTimeout(mxUtils.bind(this, function()
						{
							mxUtils.setPrefixedStyle(this.container.style, 'transition', null);
							delete this.themeSwitching;

							if (post != null)
							{
								post();
							}
						}), delay);
					}), delay);
				}), delay);
			}), 0);
		}

		return noRestart;
	};