	EditorUi.prototype.createMenubarForTheme = function(value)
	{
		if (value == 'simple' || value == 'sketch')
		{
			if (this.sketchMenubarElt == null)
			{
				this.sketchMenubarElt = document.createElement('div');
				this.sketchMenubarElt.className = 'geToolbarContainer';
				this.sketchMenubarElt.style.cssText = 'display:flex;position:absolute;right:12px;top:10px;height:44px;' +
					'border-radius:4px;padding:7px 12px;overflow:hidden;z-index:1;flex-wrap:nowrap;user-select:none;' +
					'box-sizing:border-box;border-bottom:1px solid lightgray;max-width:calc(100% - 170px);' +
					'justify-content:flex-end;align-items:center;gap:6px;';
				this.sketchWrapperElt.appendChild(this.sketchMenubarElt);

				if (urlParams['embedInline'] != '1')
				{
					// Moves menu away if picker overlaps
					var refreshMenu = mxUtils.bind(this, function()
					{
						var overflow = (this.sketchPickerMenuElt.offsetTop -
							this.sketchPickerMenuElt.offsetHeight / 2 < 58);
						this.sketchMainMenuElt.style.left = (overflow) ? '70px' : '10px';
						this.sketchMenubarElt.style.maxWidth = (overflow) ? 
							'calc(100% - 230px)' : 'calc(100% - 170px)';
						
					});

					refreshMenu();
					mxEvent.addListener(window, 'resize', refreshMenu);
				}

				if (urlParams['embed'] != '1' && this.getServiceName() != 'atlassian')
				{
					this.installStatusMinimizer(this.sketchMenubarElt);
				}
			}

			if (this.statusContainer != null)
			{
				this.statusContainer.style.flexShrink = '1';
				this.sketchMenubarElt.appendChild(this.statusContainer);
			}

			if (this.userElement != null)
			{
				this.userElement.style.flexShrink = '0';
				this.userElement.style.top = '';
				this.sketchMenubarElt.appendChild(this.userElement);
			}

			var elt = this.menubar.langIcon;

			if (elt != null)
			{
				elt.style.position = '';
				elt.style.height = '21px';
				elt.style.width = '21px';
				elt.style.flexShrink = '0';

				this.sketchMenubarElt.appendChild(elt);
			}

			if (this.buttonContainer != null)
			{
				this.buttonContainer.style.flexShrink = '0';
				this.buttonContainer.style.padding = '0px';
				this.buttonContainer.style.position = '';

				this.sketchMenubarElt.appendChild(this.buttonContainer);
			}
		}
		else
		{
			if (this.statusContainer != null)
			{
				this.menubar.container.appendChild(this.statusContainer);
				this.statusContainer.style.flexShrink = '';
				this.statusContainer.style.overflow = '';
			}

			if (this.userElement != null)
			{
				this.userElement.style.flexShrink = '';
				this.userElement.style.top = '3px';
				this.menubarContainer.appendChild(this.userElement);
			}

			var elt = this.menubar.langIcon;

			if (elt != null)
			{
				elt.style.position = 'absolute';
				elt.style.height = '18px';
				elt.style.width = '18px';
				elt.style.flexShrink = '';

				this.menubarContainer.parentNode.insertBefore(elt,
					this.menubarContainer);
			}
		}
	};