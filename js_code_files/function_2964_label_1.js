	EditorUi.prototype.showPublishLinkDialog = function(title, hideShare, width, height, fn, showFrameOption, helpLink, footer)
	{
		var div = document.createElement('div');
		div.style.whiteSpace = 'nowrap';
		var graph = this.editor.graph;
		
		var hd = document.createElement('h3');
		mxUtils.write(hd, title || mxResources.get('link'));
		hd.style.cssText = 'width:100%;text-align:center;margin-top:0px;margin-bottom:12px';
		div.appendChild(hd);
		
		var file = this.getCurrentFile();
		var dy = 0;
		
		if (file != null && file.constructor == window.DriveFile && !hideShare)
		{
			dy = 80;
			helpLink = (helpLink != null) ? helpLink : 'https://www.diagrams.net/doc/faq/google-drive-publicly-publish-diagram';
			var hintSection = document.createElement('div');
			hintSection.style.cssText = 'border-bottom:1px solid lightGray;padding-bottom:14px;padding-top:6px;margin-bottom:14px;text-align:center;';
			
			var text = document.createElement('div');
			text.style.whiteSpace = 'normal';
			mxUtils.write(text, mxResources.get('linkAccountRequired'));
			hintSection.appendChild(text);
			
			var shareBtn = mxUtils.button(mxResources.get('share'), mxUtils.bind(this, function()
			{
				this.drive.showPermissions(file.getId());
			}));
			shareBtn.style.marginTop = '12px';
			shareBtn.className = 'geBtn';
			hintSection.appendChild(shareBtn);
			div.appendChild(hintSection);
			
			var testLink = document.createElement('a');
			testLink.style.paddingLeft = '12px';
			testLink.style.color = 'gray';
			testLink.style.fontSize = '11px';
			testLink.style.cursor = 'pointer';
			mxUtils.write(testLink, mxResources.get('check'));
			hintSection.appendChild(testLink);
			
			mxEvent.addListener(testLink, 'click', mxUtils.bind(this, function()
			{
				if (this.spinner.spin(document.body, mxResources.get('loading')))
				{
					this.getPublicUrl(this.getCurrentFile(), mxUtils.bind(this, function(url)
					{
						this.spinner.stop();
						
						var dlg = new ErrorDialog(this, null, mxResources.get((url != null) ?
							'diagramIsPublic' : 'diagramIsNotPublic'), mxResources.get('ok'));
						this.showDialog(dlg.container, 300, 80, true, false);
						dlg.init();
					}));
				}
			}));
		}
		else
		{
			helpLink = (helpLink != null) ? helpLink : 'https://www.diagrams.net/doc/faq/publish-diagram-as-link';
		}
		
		var widthInput = null;
		var heightInput = null;
		
		if (width != null || height != null)
		{
			dy += 30;
			mxUtils.write(div, mxResources.get('width') + ':');

			widthInput = document.createElement('input');
			widthInput.setAttribute('type', 'text');
			widthInput.style.marginRight = '16px';
			widthInput.style.width = '50px';
			widthInput.style.marginLeft = '6px';
			widthInput.style.marginRight = '16px';
			widthInput.style.marginBottom = '10px';
			widthInput.value = '100%';
			
			div.appendChild(widthInput);

			mxUtils.write(div, mxResources.get('height') + ':');
			
			heightInput = document.createElement('input');
			heightInput.setAttribute('type', 'text');
			heightInput.style.width = '50px';
			heightInput.style.marginLeft = '6px';
			heightInput.style.marginBottom = '10px';
			heightInput.value = height + 'px';
			
			div.appendChild(heightInput);
			mxUtils.br(div);
		}
		
		var linkSection = this.addLinkSection(div, showFrameOption);
		var hasPages = this.pages != null && this.pages.length > 1;
		var allPages = null;
		
		if (file == null || file.constructor != window.DriveFile || hideShare)
		{
			allPages = this.addCheckbox(div, mxResources.get('allPages'), hasPages, !hasPages);
		}
		
		var lightbox = this.addCheckbox(div, mxResources.get('lightbox'), true, null, null, !showFrameOption);
		var editSection = this.addEditButton(div, lightbox);
		var edit = editSection.getEditInput();

		// Cannot disable lightbox in iframes
		if (showFrameOption)
		{
			edit.style.marginLeft = lightbox.style.marginLeft;
			lightbox.style.display = 'none';
			dy -= 20;
		}
		
		var layers = this.addCheckbox(div, mxResources.get('layers'), true);
		layers.style.marginLeft = edit.style.marginLeft;
		layers.style.marginTop = '8px';
				
		var tags = this.addCheckbox(div, mxResources.get('tags'), true);
		tags.style.marginLeft = edit.style.marginLeft;
		tags.style.marginBottom = '16px';
		tags.style.marginTop = '16px';

		mxEvent.addListener(lightbox, 'change', function()
		{
			if (lightbox.checked)
			{
				layers.removeAttribute('disabled');
				edit.removeAttribute('disabled');
			}
			else
			{
				layers.setAttribute('disabled', 'disabled');
				edit.setAttribute('disabled', 'disabled');
			}
			
			if (edit.checked && lightbox.checked)
			{
				editSection.getEditSelect().removeAttribute('disabled');
			}
			else
			{
				editSection.getEditSelect().setAttribute('disabled', 'disabled');
			}
		});
		
		var dlg = new CustomDialog(this, div, mxUtils.bind(this, function()
		{
			fn(linkSection.getTarget(), linkSection.getColor(),
				(allPages == null) ? true : allPages.checked,
				lightbox.checked, editSection.getLink(),
				layers.checked, (widthInput != null) ? widthInput.value : null,
				(heightInput != null) ? heightInput.value : null, tags.checked);
		}), null, mxResources.get('create'), helpLink, footer);
		this.showDialog(dlg.container, 340, 300 + dy, true, true);
		
		if (widthInput != null)
		{
			widthInput.focus();
			
			if (mxClient.IS_GC || mxClient.IS_FF || document.documentMode >= 5)
			{
				widthInput.select();
			}
			else
			{
				document.execCommand('selectAll', false, null);
			}
		}
		else
		{
			linkSection.focus();
		}
	};