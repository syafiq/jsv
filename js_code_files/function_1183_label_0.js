var BackgroundImageDialog = function(editorUi, applyFn, img, color)
{
	var div = document.createElement('div');
	div.style.whiteSpace = 'nowrap';

	var h3 = document.createElement('h2');
	mxUtils.write(h3, mxResources.get('background'));
	h3.style.marginTop = '0px';
	div.appendChild(h3);

	var isPageLink = img != null && img.originalSrc != null;
	var pageFound = false;

	var urlRadio = document.createElement('input');
	urlRadio.style.cssText = 'margin-right:8px;margin-bottom:8px;';
	urlRadio.setAttribute('value', 'url');
	urlRadio.setAttribute('type', 'radio');
	urlRadio.setAttribute('name', 'geBackgroundImageDialogOption');

	var pageRadio = document.createElement('input');
	pageRadio.style.cssText = 'margin-right:8px;margin-bottom:8px;';
	pageRadio.setAttribute('value', 'url');
	pageRadio.setAttribute('type', 'radio');
	pageRadio.setAttribute('name', 'geBackgroundImageDialogOption');

	var urlInput = document.createElement('input');
	urlInput.setAttribute('type', 'text');
	urlInput.style.marginBottom = '8px';
	urlInput.style.width = '360px';
	urlInput.value = (isPageLink || img == null) ? '' : img.src;
	
	var pageSelect = document.createElement('select');
	pageSelect.style.width = '360px';

	if (editorUi.pages != null)
	{
		for (var i = 0; i < editorUi.pages.length; i++)
		{
			var pageOption = document.createElement('option');
			mxUtils.write(pageOption, editorUi.pages[i].getName() ||
				mxResources.get('pageWithNumber', [i + 1]));
			pageOption.setAttribute('value', 'data:page/id,' +
				editorUi.pages[i].getId());

			if (editorUi.pages[i] == editorUi.currentPage)
			{
				pageOption.setAttribute('disabled', 'disabled');			
			}
			
			if (img != null && img.originalSrc == pageOption.getAttribute('value'))
			{
				pageOption.setAttribute('selected', 'selected');
				pageFound = true;
			}

			pageSelect.appendChild(pageOption);
		}
	}

	if (!isPageLink && (editorUi.pages == null || editorUi.pages.length == 1))
	{
		urlRadio.style.display = 'none';
		pageRadio.style.display = 'none';
		pageSelect.style.display = 'none';
	}

	var notFoundOption = document.createElement('option');
	var resetting = false;
	var ignoreEvt = false;
	
	var urlChanged = function(evt, done)
	{
		// Skips blur event if called from apply button
		if (!resetting && (evt == null || !ignoreEvt))
		{
			if (pageRadio.checked)
			{
				if (done != null)
				{
					done((notFoundOption.selected) ? null : pageSelect.value);
				}
			}
			else if (urlInput.value != '' && !editorUi.isOffline())
			{
				urlInput.value = mxUtils.trim(urlInput.value);

				editorUi.loadImage(urlInput.value, function(img)
				{
					widthInput.value = img.width;
					heightInput.value = img.height;
					
					if (done != null)
					{
						done(urlInput.value);
					}
				}, function()
				{
					editorUi.showError(mxResources.get('error'), mxResources.get('fileNotFound'), mxResources.get('ok'));
					widthInput.value = '';
					heightInput.value = '';
					
					if (done != null)
					{
						done(null);
					}
				});
			}
			else
			{
				widthInput.value = '';
				heightInput.value = '';
				
				if (done != null)
				{
					done('');
				}
			}
		}
	};

	var openFiles = mxUtils.bind(this, function(files)
	{
		editorUi.importFiles(files, 0, 0, editorUi.maxBackgroundSize, function(data, mimeType, x, y, w, h)
		{
			urlInput.value = data;
			urlChanged();
			urlInput.focus();
		}, function()
		{
			// No post processing
		}, function(file)
		{
			// Handles only images
			return file.type.substring(0, 6) == 'image/';
		}, function(queue)
		{
			// Invokes elements of queue in order
			for (var i = 0; i < queue.length; i++)
			{
				queue[i]();
			}
		}, true, editorUi.maxBackgroundBytes, editorUi.maxBackgroundBytes, true);
	});

	this.init = function()
	{
		if (isPageLink)
		{
			pageSelect.focus();
		}
		else
		{
			urlInput.focus();
		}

		mxEvent.addListener(pageSelect, 'focus', function()
		{
			urlRadio.removeAttribute('checked');
			pageRadio.setAttribute('checked', 'checked');
			pageRadio.checked = true;
		});
		
		mxEvent.addListener(urlInput, 'focus', function()
		{
			pageRadio.removeAttribute('checked');
			urlRadio.setAttribute('checked', 'checked');
			urlRadio.checked = true;
		});

		// Installs drag and drop handler for local images and links
		if (Graph.fileSupport)
		{
			urlInput.setAttribute('placeholder', mxResources.get('dragImagesHere'));
			
			// Setup the dnd listeners
			var dlg = div.parentNode;
			var graph = editorUi.editor.graph;
			var dropElt = null;
				
			mxEvent.addListener(dlg, 'dragleave', function(evt)
			{
				if (dropElt != null)
			    {
			    	dropElt.parentNode.removeChild(dropElt);
			    	dropElt = null;
			    }
			    
				evt.stopPropagation();
				evt.preventDefault();
			});
			
			mxEvent.addListener(dlg, 'dragover', mxUtils.bind(this, function(evt)
			{
				// IE 10 does not implement pointer-events so it can't have a drop highlight
				if (dropElt == null && (!mxClient.IS_IE || document.documentMode > 10))
				{
					dropElt = editorUi.highlightElement(dlg);
				}
				
				evt.stopPropagation();
				evt.preventDefault();
			}));
			
			mxEvent.addListener(dlg, 'drop', mxUtils.bind(this, function(evt)
			{
			    if (dropElt != null)
			    {
			    	dropElt.parentNode.removeChild(dropElt);
			    	dropElt = null;
			    }

			    if (evt.dataTransfer.files.length > 0)
			    {
			    	openFiles(evt.dataTransfer.files);
	    		}
			    else if (mxUtils.indexOf(evt.dataTransfer.types, 'text/uri-list') >= 0)
			    {
			    	var uri = evt.dataTransfer.getData('text/uri-list');
			    	
			    	if ((/\.(gif|jpg|jpeg|tiff|png|svg)$/i).test(uri))
					{
			    		urlInput.value = decodeURIComponent(uri);
			    		urlChanged();
					}
			    }

			    evt.stopPropagation();
			    evt.preventDefault();
			}), false);
		}
	};

	div.appendChild(urlRadio);
	div.appendChild(urlInput);
	mxUtils.br(div);

	var span = document.createElement('span');
	span.style.marginLeft = '30px';
	mxUtils.write(span, mxResources.get('width') + ':');
	div.appendChild(span);
	
	var widthInput = document.createElement('input');
	widthInput.setAttribute('type', 'text');
	widthInput.style.width = '60px';
	widthInput.style.marginLeft = '8px';
	widthInput.style.marginRight = '16px';
	widthInput.value = (img != null && !isPageLink) ? img.width : '';
	
	div.appendChild(widthInput);
	
	mxUtils.write(div, mxResources.get('height') + ':');
	
	var heightInput = document.createElement('input');
	heightInput.setAttribute('type', 'text');
	heightInput.style.width = '60px';
	heightInput.style.marginLeft = '8px';
	heightInput.style.marginRight = '16px';
	heightInput.value = (img != null && !isPageLink) ? img.height : '';
	
	div.appendChild(heightInput);
	mxUtils.br(div);
	mxUtils.br(div);

	mxEvent.addListener(urlInput, 'change', urlChanged);

	ImageDialog.filePicked = function(data)
	{
        if (data.action == google.picker.Action.PICKED)
        {
        	if (data.docs[0].thumbnails != null)
        	{
	        	var thumb = data.docs[0].thumbnails[data.docs[0].thumbnails.length - 1];
	        	
	        	if (thumb != null)
	        	{
	        		urlInput.value = thumb.url;
	        		urlChanged();
	        	}
        	}
        }
        
        urlInput.focus();
	};

	div.appendChild(pageRadio);
	div.appendChild(pageSelect);
	mxUtils.br(div);
	mxUtils.br(div);

	if (isPageLink)
	{
		pageRadio.setAttribute('checked', 'checked');
		pageRadio.checked = true;
	}
	else
	{
		urlRadio.setAttribute('checked', 'checked');
		urlRadio.checked = true;
	}

	if (!pageFound && pageRadio.checked)
	{
		mxUtils.write(notFoundOption, mxResources.get('pageNotFound'));
		notFoundOption.setAttribute('disabled', 'disabled');
		notFoundOption.setAttribute('selected', 'selected');
		notFoundOption.setAttribute('value', 'pageNotFound');
		pageSelect.appendChild(notFoundOption);
		
		mxEvent.addListener(pageSelect, 'change', function()
		{
			if (notFoundOption.parentNode != null && !notFoundOption.selected)
			{
				notFoundOption.parentNode.removeChild(notFoundOption);
			}
		});
	}

	var bgDiv = document.createElement('div');
	bgDiv.style.display = 'flex';
	bgDiv.style.alignItems = 'center';
	bgDiv.style.height = '20px';

	var cb = document.createElement('input');
	cb.setAttribute('type', 'checkbox');
	cb.style.margin = '0px 10px 0px 4px';
	cb.style.verticalAlign = 'bottom';
	cb.defaultChecked = color != mxConstants.NONE && color != null;
	cb.checked = cb.defaultChecked;
	bgDiv.appendChild(cb);

	mxUtils.write(bgDiv, mxResources.get('fillColor'));

	// TODO: Move createColorButton to editorUi
	var backgroundButton = document.createElement('button');
	backgroundButton.style.width = '36px';
	backgroundButton.style.height = '18px';
	backgroundButton.style.cursor = 'pointer';
	backgroundButton.style.marginLeft = '10px';
	backgroundButton.style.backgroundPosition = 'center center';
	backgroundButton.style.backgroundRepeat = 'no-repeat';
	backgroundButton.style.verticalAlign = 'bottom';
	backgroundButton.className = 'geColorBtn';
	
	var newBackgroundColor = color;
	
	function updateBackgroundColor()
	{
		if (newBackgroundColor == null || newBackgroundColor == mxConstants.NONE)
		{
			backgroundButton.style.display = 'none';
			cb.checked = false;
		}
		else
		{
			backgroundButton.style.backgroundColor = newBackgroundColor;
			backgroundButton.style.display = '';
			cb.checked = true;
		}
	};
	
	updateBackgroundColor();

	mxEvent.addListener(bgDiv, 'click', function(evt)
	{
		if (mxEvent.getSource(evt) != cb)
		{
			cb.checked = !cb.checked;
		}

		if (cb.checked)
		{
			newBackgroundColor = '#ffffff';
		}
		else
		{
			newBackgroundColor = null;
		}

		updateBackgroundColor();
	});
	
	mxEvent.addListener(backgroundButton, 'click', function(evt)
	{
		editorUi.pickColor(newBackgroundColor || 'none', function(color)
		{
			newBackgroundColor = color;
			updateBackgroundColor();
		});
		mxEvent.consume(evt);
	});
	
	bgDiv.appendChild(backgroundButton);
	div.appendChild(bgDiv);
	mxUtils.br(div);

	var btns = document.createElement('div');
	btns.style.marginTop = '30px';
	btns.style.textAlign = 'right';

	var cancelBtn = mxUtils.button(mxResources.get('cancel'), function()
	{
		resetting = true;
		editorUi.hideDialog();
	});
	
	cancelBtn.className = 'geBtn';
	
	if (editorUi.editor.cancelFirst)
	{
		btns.appendChild(cancelBtn);
	}
	
	var resetBtn = mxUtils.button(mxResources.get('reset'), function()
	{
		urlInput.value = '';
		widthInput.value = '';
		heightInput.value = '';
		urlRadio.checked = true;
		newBackgroundColor = mxConstants.NONE;
		updateBackgroundColor();
		resetting = false;
	});
	mxEvent.addGestureListeners(resetBtn, function()
	{
		// Blocks processing a image URL while clicking reset
		resetting = true;
	});
	resetBtn.className = 'geBtn';
	resetBtn.width = '100';
	btns.appendChild(resetBtn);

	if (Graph.fileSupport)
	{
		var fileInput = document.createElement('input');
		fileInput.setAttribute('multiple', 'multiple');
		fileInput.setAttribute('type', 'file');
		
		mxEvent.addListener(fileInput, 'change', function(evt)
		{
			if (fileInput.files != null)
			{
				openFiles(fileInput.files);
				
				// Resets input to force change event for same file (type reset required for IE)
				fileInput.type = '';
				fileInput.type = 'file';
				fileInput.value = '';
			}
		});
		
		fileInput.style.display = 'none';
		div.appendChild(fileInput);
		
		var btn = mxUtils.button(mxResources.get('open'), function()
		{
			fileInput.click();
		});

		btn.className = 'geBtn';
		btns.appendChild(btn);
	}

	applyBtn = mxUtils.button(mxResources.get('apply'), function()
	{
		editorUi.hideDialog();
		
		urlChanged(null, function(url)
		{
			applyFn((url != '' && url != null) ? new mxImage(url,
				widthInput.value, heightInput.value) : null,
				url == null, newBackgroundColor);
		});
	});
	
	mxEvent.addGestureListeners(applyBtn, function()
	{
		ignoreEvt = true;
	});
	
	applyBtn.className = 'geBtn gePrimaryBtn';
	btns.appendChild(applyBtn);
	
	if (!editorUi.editor.cancelFirst)
	{
		btns.appendChild(cancelBtn);
	}

	div.appendChild(btns);

	this.container = div;
};