	EditorUi.prototype.switchTheme = function(value)
	{
		// Removes containers before destroying windows
		if (this.isDefaultTheme(value))
		{
			// Format window
			if (this.formatContainer != null)
			{
				this.formatContainer.style.left = '';
				this.formatContainer.style.zIndex = '1';
				this.formatContainer.style.border = '';

				if (this.footerContainer != null)
				{
					if (this.footerContainer.parentNode != this.formatContainer.parentNode)
					{
						this.footerContainer.parentNode.insertBefore(
							this.formatContainer, this.footerContainer);
					}
				}

				// Shapes window
				if (this.sidebarContainer != null)
				{
					if (this.formatContainer.parentNode != this.sidebarContainer.parentNode)
					{
						this.formatContainer.parentNode.insertBefore(
							this.sidebarContainer, this.formatContainer);
					}
				}
			}
		}

		this.destroyWindows();
		this.updateUserElement();
		this.updateDefaultStyles();
		this.switchThemeConstants(value);
		this.switchCssForTheme(value);
		this.createWrapperForTheme(value);
		this.createPickerMenuForTheme(value);
		this.createMainMenuForTheme(value);
		this.createMenubarForTheme(value);
		this.createFooterMenuForTheme(value);

		// TODO: Check what hides sidebarContainer
		this.sidebarContainer.style.display = '';

		if (value == 'simple' || value == 'sketch')
		{
			// Format window
			this.createFormatWindow();
			this.formatContainer.style.left = '0px';
			this.formatContainer.style.top = '0px';
			this.formatContainer.style.width = '';
			this.formatContainer.style.zIndex = '';
			this.formatContainer.style.border = 'none';

			// Shapes window
			this.createShapesWindow();
			this.sidebarContainer.style.left = '0px';
			this.sidebarContainer.style.top = '0px';
			this.sidebarContainer.style.bottom = '63px';
			this.sidebarContainer.style.width = '100%';
		}

		// Format panel close button
		if (this.format != null)
		{
			var closeButton = this.isDefaultTheme(value) || value == 'atlas'; 

			if (this.format.showCloseButton != closeButton)
			{
				this.format.showCloseButton = closeButton;
				this.format.refresh();
			}
		}
	};