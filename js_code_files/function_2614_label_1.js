var PageSetupDialog = function(editorUi)
{
	var graph = editorUi.editor.graph;
	var row, td;

	var table = document.createElement('table');
	table.style.width = '100%';
	table.style.height = '100%';
	var tbody = document.createElement('tbody');
	
	row = document.createElement('tr');
	
	td = document.createElement('td');
	td.style.verticalAlign = 'top';
	td.style.fontSize = '10pt';
	mxUtils.write(td, mxResources.get('paperSize') + ':');
	
	row.appendChild(td);
	
	td = document.createElement('td');
	td.style.verticalAlign = 'top';
	td.style.fontSize = '10pt';
	
	var accessor = PageSetupDialog.addPageFormatPanel(td, 'pagesetupdialog', graph.pageFormat);

	row.appendChild(td);
	tbody.appendChild(row);
	
	row = document.createElement('tr');
	
	td = document.createElement('td');
	mxUtils.write(td, mxResources.get('background') + ':');
	
	row.appendChild(td);
	
	td = document.createElement('td');
	td.style.whiteSpace = 'nowrap';
	
	var backgroundInput = document.createElement('input');
	backgroundInput.setAttribute('type', 'text');

	var backgroundButton = document.createElement('button');
	backgroundButton.style.width = '22px';
	backgroundButton.style.height = '22px';
	backgroundButton.style.cursor = 'pointer';
	backgroundButton.style.marginRight = '20px';
	backgroundButton.style.backgroundPosition = 'center center';
	backgroundButton.style.backgroundRepeat = 'no-repeat';

	if (mxClient.IS_FF)
	{
		backgroundButton.style.position = 'relative';
		backgroundButton.style.top = '-6px';
	}
	
	var newBackgroundColor = graph.background;
	
	function updateBackgroundColor()
	{
		if (newBackgroundColor == null || newBackgroundColor == mxConstants.NONE)
		{
			backgroundButton.style.backgroundColor = '';
			backgroundButton.style.backgroundImage = 'url(\'' + Dialog.prototype.noColorImage + '\')';
		}
		else
		{
			backgroundButton.style.backgroundColor = newBackgroundColor;
			backgroundButton.style.backgroundImage = '';
		}
	};
	
	updateBackgroundColor();

	mxEvent.addListener(backgroundButton, 'click', function(evt)
	{
		editorUi.pickColor(newBackgroundColor || 'none', function(color)
		{
			newBackgroundColor = color;
			updateBackgroundColor();
		});
		mxEvent.consume(evt);
	});
	
	td.appendChild(backgroundButton);
	
	mxUtils.write(td, mxResources.get('gridSize') + ':');
	
	var gridSizeInput = document.createElement('input');
	gridSizeInput.setAttribute('type', 'number');
	gridSizeInput.setAttribute('min', '0');
	gridSizeInput.style.width = '40px';
	gridSizeInput.style.marginLeft = '6px';
	
	gridSizeInput.value = graph.getGridSize();
	td.appendChild(gridSizeInput);
	
	mxEvent.addListener(gridSizeInput, 'change', function()
	{
		var value = parseInt(gridSizeInput.value);
		gridSizeInput.value = Math.max(1, (isNaN(value)) ? graph.getGridSize() : value);
	});
	
	row.appendChild(td);
	tbody.appendChild(row);
	
	row = document.createElement('tr');
	td = document.createElement('td');
	
	mxUtils.write(td, mxResources.get('image') + ':');
	
	row.appendChild(td);
	td = document.createElement('td');
	
	var changeImageLink = document.createElement('button');
	changeImageLink.className = 'geBtn';
	changeImageLink.style.margin = '0px';
	mxUtils.write(changeImageLink, mxResources.get('change') + '...');

	var imgPreview = document.createElement('img');
	imgPreview.setAttribute('valign', 'middle');
	imgPreview.style.verticalAlign = 'middle';
	imgPreview.style.border = '1px solid lightGray';
	imgPreview.style.borderRadius = '4px';
	imgPreview.style.marginRight = '14px';
	imgPreview.style.maxWidth = '100px';
	imgPreview.style.cursor = 'pointer';
	imgPreview.style.height = '60px';
	imgPreview.style.padding = '4px';
	
	var newBackgroundImage = graph.backgroundImage;
	
	function updateBackgroundImage()
	{
		var img = newBackgroundImage;

		if (img != null && Graph.isPageLink(img.src))
		{
			img = editorUi.createImageForPageLink(img.src, null);
		}
		
		if (img != null && img.src != null)
		{
			imgPreview.setAttribute('src', img.src);
			imgPreview.style.display = '';
		}
		else
		{
			imgPreview.removeAttribute('src');
			imgPreview.style.display = 'none';
		}
	};

	var changeImage = function(evt)
	{
		editorUi.showBackgroundImageDialog(function(image, failed)
		{
			if (!failed)
			{
				newBackgroundImage = image;
				updateBackgroundImage();
			}
		}, newBackgroundImage);
		
		mxEvent.consume(evt);
	};
	
	mxEvent.addListener(changeImageLink, 'click', changeImage);
	mxEvent.addListener(imgPreview, 'click', changeImage);
	
	updateBackgroundImage();
	td.appendChild(imgPreview);
	td.appendChild(changeImageLink);
	
	row.appendChild(td);
	tbody.appendChild(row);
	
	row = document.createElement('tr');
	td = document.createElement('td');
	td.colSpan = 2;
	td.style.paddingTop = '16px';
	td.setAttribute('align', 'right');

	var cancelBtn = mxUtils.button(mxResources.get('cancel'), function()
	{
		editorUi.hideDialog();
	});
	cancelBtn.className = 'geBtn';
	
	if (editorUi.editor.cancelFirst)
	{
		td.appendChild(cancelBtn);
	}
	
	var applyBtn = mxUtils.button(mxResources.get('apply'), function()
	{
		editorUi.hideDialog();
		var gridSize = parseInt(gridSizeInput.value);
		
		if (!isNaN(gridSize) && graph.gridSize !== gridSize)
		{
			graph.setGridSize(gridSize);
		}

		var change = new ChangePageSetup(editorUi, newBackgroundColor,
			newBackgroundImage, accessor.get());
		change.ignoreColor = graph.background == newBackgroundColor;
		
		var oldSrc = (graph.backgroundImage != null) ? graph.backgroundImage.src : null;
		var newSrc = (newBackgroundImage != null) ? newBackgroundImage.src : null;
		
		change.ignoreImage = oldSrc === newSrc;

		if (graph.pageFormat.width != change.previousFormat.width ||
			graph.pageFormat.height != change.previousFormat.height ||
			!change.ignoreColor || !change.ignoreImage)
		{
			graph.model.execute(change);
		}
	});
	applyBtn.className = 'geBtn gePrimaryBtn';
	td.appendChild(applyBtn);

	if (!editorUi.editor.cancelFirst)
	{
		td.appendChild(cancelBtn);
	}
	
	row.appendChild(td);
	tbody.appendChild(row);
	
	table.appendChild(tbody);
	this.container = table;
};