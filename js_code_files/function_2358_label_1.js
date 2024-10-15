	  color: Editor.isDarkMode() ? '#c0c0c0' : '#000', // #rgb or #rrggbb
	  speed: 1.4, // Rounds per second
	  trail: 60, // Afterglow percentage
	  shadow: false, // Whether to render a shadow
	  hwaccel: false, // Whether to use hardware acceleration
	  className: 'spinner', // The CSS class to assign to the spinner
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  top: '50%', // Top position relative to parent
	  left: '50%' // Left position relative to parent
	};
	
	var spinner = new Spinner(opts);

	var file = editorUi.getCurrentFile();
	var fileNode = editorUi.getXmlFileData(true, false, true);
	var tmp = fileNode.getElementsByTagName('diagram');
	var currentDiagrams = {};
	
	for (var i = 0; i < tmp.length; i++)
	{
		currentDiagrams[tmp[i].getAttribute('id')] = tmp[i];
	}

	var currentRow = null;
	var currentRev = null;
	var currentDoc = null;
	var currentXml = null;

	var zoomInBtn = editorUi.createToolbarButton(Editor.zoomInImage, mxResources.get('zoomIn'), function()
	{
		if (currentDoc != null)
		{
			graph.zoomIn();
		}
	}, 20);

	zoomInBtn.setAttribute('disabled', 'disabled');

	var zoomOutBtn = editorUi.createToolbarButton(Editor.zoomOutImage, mxResources.get('zoomOut'), function()
	{
		if (currentDoc != null)
		{
			graph.zoomOut();
		}
	}, 20);

	zoomOutBtn.setAttribute('disabled', 'disabled');

	var zoomFitBtn = editorUi.createToolbarButton(Editor.zoomFitImage, mxResources.get('fit'), function()
	{
		if (currentDoc != null)
		{
			if (graph.view.scale == 1)
			{
				graph.maxFitScale = 8;
				graph.fit(8);
			}
			else
			{
				graph.zoomActual();
			}

			graph.center();
		}
	}, 20);

	zoomFitBtn.setAttribute('disabled', 'disabled');

	// Gesture listener added below to handle pressed state
	var compareBtn = editorUi.createToolbarButton(Editor.compareImage, mxResources.get('zoomOut'), null, 20);
	compareBtn.setAttribute('disabled', 'disabled');
	
	var cmpContainer = container.cloneNode(false);
	cmpContainer.style.pointerEvent = 'none';
	container.parentNode.appendChild(cmpContainer);

	var cmpGraph = new Graph(cmpContainer);
	cmpGraph.setTooltips(false);
	cmpGraph.setEnabled(false);
	cmpGraph.setPanning(true);
	cmpGraph.panningHandler.ignoreCell = true;
	cmpGraph.panningHandler.useLeftButtonForPanning = true;
	cmpGraph.minFitScale = null;
	cmpGraph.maxFitScale = null;
	cmpGraph.centerZoom = true;

	var fileInfo = document.createElement('div');
	fileInfo.style.position = 'absolute';
	fileInfo.style.textAlign = 'left';
	fileInfo.style.color = 'gray';
	fileInfo.style.marginTop = '8px';
	fileInfo.style.backgroundColor = 'transparent';
	fileInfo.style.top = '440px';
	fileInfo.style.left = '32px';
	fileInfo.style.maxWidth = '380px';
	fileInfo.style.cursor = 'default';

	var prevFileInfo = null;

	mxEvent.addGestureListeners(compareBtn, function(e)
	{
		// Gets current state of page with given ID
		var curr = currentDiagrams[diagrams[currentPage].getAttribute('id')];
		mxUtils.setOpacity(compareBtn, 20);
		errorNode.innerText = '';

		if (curr == null)
		{
			mxUtils.write(errorNode, mxResources.get('pageNotFound'));
		}
		else
		{
			prevFileInfo = fileInfo.innerHTML;
			fileInfo.innerHTML = mxResources.get('current');
			container.style.display = 'none';
			cmpContainer.style.display = '';
			cmpContainer.style.backgroundColor = container.style.backgroundColor;

			var tempNode = Editor.parseDiagramNode(curr);
			var codec = new mxCodec(tempNode.ownerDocument);
			codec.decode(tempNode, cmpGraph.getModel());
			cmpGraph.view.scaleAndTranslate(graph.view.scale,
				graph.view.translate.x, graph.view.translate.y);
		}
	}, null, function()
	{
		mxUtils.setOpacity(compareBtn, 60);
		errorNode.innerText = '';

		if (container.style.display == 'none')
		{
			container.style.display = '';
			fileInfo.innerHTML = prevFileInfo;
			cmpContainer.style.display = 'none';
		}
	});

	var downloadBtn = mxUtils.button(mxResources.get('download'), function()
	{
		if (currentDoc != null)
		{
    		var data = mxUtils.getXml(currentDoc.documentElement);
			var filename = editorUi.getBaseFilename() + '.drawio';
    		
	    	if (editorUi.isLocalFileSave())
	    	{
	    		editorUi.saveLocalFile(data, filename, 'text/xml');
	    	}
	    	else
	    	{
	    		var param = (typeof(pako) === 'undefined') ? '&xml=' + encodeURIComponent(data) :
	    			'&data=' + encodeURIComponent(Graph.compress(data));
	    		new mxXmlRequest(SAVE_URL, 'filename=' + encodeURIComponent(filename) +
	    			'&format=xml' + param).simulate(document, '_blank');
	    	}
		}
	});
	downloadBtn.className = 'geBtn';
	downloadBtn.setAttribute('disabled', 'disabled');

	var restoreBtn = mxUtils.button(mxResources.get('restore'), function(e)
	{
		if (currentDoc != null && currentXml != null)
		{
			if (mxEvent.isShiftDown(e))
			{
				if (currentDoc != null)
				{
					var pages = editorUi.getPagesForNode(currentDoc.documentElement);
					var patch = editorUi.diffPages(editorUi.pages, pages);
	
					var dlg = new TextareaDialog(editorUi, mxResources.get('compare'),
						JSON.stringify(patch, null, 2), function(newValue)
					{
						if (newValue.length > 0)
						{
							try
							{
								// TODO: Make add/remove pages undoable
								editorUi.confirm(mxResources.get('areYouSure'), function()
								{
									file.patch([JSON.parse(newValue)], null, true);

									// Hides compare dialog
									editorUi.hideDialog();

									// Hides revision history dialog
									editorUi.hideDialog();
								});
							}
							catch (e)
							{
								editorUi.handleError(e);
							}
						}
					}, null, null, null, null, null, true, null, mxResources.get('merge'));
					
					editorUi.showDialog(dlg.container, 620, 460, true, true);
					dlg.init();
				}
			}
			else
			{
				editorUi.confirm(mxResources.get('areYouSure'), function()
				{
					if (restoreFn != null)
					{
						restoreFn(currentXml);
					}
					else
					{
						if (editorUi.spinner.spin(document.body, mxResources.get('restoring')))
						{
							file.save(true, function(resp)
							{
								editorUi.spinner.stop();
								editorUi.replaceFileData(currentXml);
								editorUi.hideDialog();
							}, function(resp)
							{
								editorUi.spinner.stop();
								editorUi.editor.setStatus('');
								editorUi.handleError(resp, (resp != null) ? mxResources.get('errorSavingFile') : null);
							});
						}
					}
				});
			}
		}
	});
	restoreBtn.className = 'geBtn';
	restoreBtn.setAttribute('disabled', 'disabled');
	restoreBtn.setAttribute('title', 'Shift+Click for Diff');
	
	var pageSelect = document.createElement('select');
	pageSelect.setAttribute('disabled', 'disabled');
	pageSelect.style.userSelect = 'none';
	pageSelect.style.maxWidth = '100px';
	pageSelect.style.position = 'relative';
	pageSelect.style.top = '-2px';
	pageSelect.style.verticalAlign = 'bottom';
	pageSelect.style.marginLeft = '10px';
	pageSelect.style.display = 'none';
	
	var pageSelectFunction = null;
	
	mxEvent.addListener(pageSelect, 'change', function(evt)
	{
		if (pageSelectFunction != null)
		{
			pageSelectFunction(evt);
			mxEvent.consume(evt);
		}
	});
	
	var newBtn = mxUtils.button(mxResources.get('edit'), function()
	{
		if (currentDoc != null)
		{
			window.openFile = new OpenFile(function()
			{
				window.openFile = null;
			});
			
			window.openFile.setData(mxUtils.getXml(currentDoc.documentElement));
			editorUi.openLink(editorUi.getUrl(), null, true);
		}
	});
	newBtn.className = 'geBtn';
	newBtn.setAttribute('disabled', 'disabled');
	
	if (restoreFn != null)
	{
		newBtn.style.display = 'none';
	}
	
	var showBtn = mxUtils.button(mxResources.get('show'), function()
	{
		if (currentRev != null)
		{
			editorUi.openLink(currentRev.getUrl(pageSelect.selectedIndex));
		}
	});
	showBtn.className = 'geBtn gePrimaryBtn';
	showBtn.setAttribute('disabled', 'disabled');
	
	if (restoreFn != null)
	{
		showBtn.style.display = 'none';
		restoreBtn.className = 'geBtn gePrimaryBtn';
	}

	var buttons = document.createElement('div');
	buttons.style.position = 'absolute';
	buttons.style.top = '482px';
	buttons.style.right = '28px';
	buttons.style.left = '32px';
	buttons.style.textAlign = 'right';

	var tb = document.createElement('div');
	tb.className = 'geToolbarContainer';
	tb.style.backgroundColor = 'transparent';
	tb.style.padding = '2px';
	tb.style.border = 'none';
	tb.style.top = '442px';
	tb.style.right = '28px';
	
	var currentElt = null;

	if (revs != null && revs.length > 0)
	{
		container.style.cursor = 'move';
		
		var table = document.createElement('table');
		table.style.border = '1px solid lightGray';
		table.style.borderCollapse = 'collapse';
		table.style.borderSpacing = '0px';
		table.style.width = '100%';
		var tbody = document.createElement('tbody');
		var today = new Date().toDateString();

		if (editorUi.currentPage != null && editorUi.pages != null)
		{
			currentPage = mxUtils.indexOf(editorUi.pages, editorUi.currentPage);
		}
		
		for (var i = revs.length - 1; i >= 0; i--)
		{
			var elt = (function(item)
			{
				var ts = new Date(item.modifiedDate);
				var row = null;
				var pd = '6px';
				
				// Workaround for negative timestamps in Dropbox
				if (ts.getTime() >= 0)
				{
					row = document.createElement('tr');
					row.style.borderBottom = '1px solid lightGray';
					row.style.fontSize = '12px';
					row.style.cursor = 'pointer';
					
					var date = document.createElement('td');
					date.style.padding = pd;
					date.style.whiteSpace = 'nowrap';
					
					if (item == revs[revs.length - 1])
					{
						mxUtils.write(date, mxResources.get('current'));
					}
					else
					{
						if (ts.toDateString() === today)
						{
							mxUtils.write(date, ts.toLocaleTimeString());
						}
						else
						{
							mxUtils.write(date, ts.toLocaleDateString() + ' ' +
								ts.toLocaleTimeString());
						}
					}
					
					row.appendChild(date);

					row.setAttribute('title', ts.toLocaleDateString() + ' ' +
						ts.toLocaleTimeString() + 
						((item.fileSize != null)? ' ' + editorUi.formatFileSize(parseInt(item.fileSize)) : '') +
						((item.lastModifyingUserName != null) ? ' ' + item.lastModifyingUserName : ''));

					function updateGraph(xml)
					{
						spinner.stop();
						errorNode.innerText = '';
						var doc = mxUtils.parseXml(xml);
						var node = editorUi.editor.extractGraphModel(doc.documentElement, true);

						if (node != null)
						{
							pageSelect.style.display = 'none';
							pageSelect.innerText = '';
							currentDoc = doc;
							currentXml = xml;
							parseSelectFunction = null;
							diagrams = null;
							realPage = 0;
							
							function parseGraphModel(dataNode)
							{
								var bg = dataNode.getAttribute('background');
								
								if (bg == null || bg == '' || bg == mxConstants.NONE)
								{
									bg = graph.defaultPageBackgroundColor;
								}
								
								container.style.backgroundColor = bg;
								
								var codec = new mxCodec(dataNode.ownerDocument);
								codec.decode(dataNode, graph.getModel());
								graph.maxFitScale = 1;
								graph.fit(8);
								graph.center();
								
								return dataNode;
							}
							
							function parseDiagram(diagramNode)
							{
								if (diagramNode != null)
								{
									diagramNode = parseGraphModel(Editor.parseDiagramNode(diagramNode));
								}
								
								return diagramNode;
							}

							if (node.nodeName == 'mxfile')
							{
								// Workaround for "invalid calling object" error in IE
								var tmp = node.getElementsByTagName('diagram');
								diagrams = [];
								
								for (var i = 0; i < tmp.length; i++)
								{
									diagrams.push(tmp[i]);	
								}
								
								realPage = Math.min(currentPage, diagrams.length - 1);
								
								if (diagrams.length > 0)
								{
									parseDiagram(diagrams[realPage]);
								}
								
								if (diagrams.length > 1)
								{
									pageSelect.removeAttribute('disabled');
									pageSelect.style.display = '';

									for (var i = 0; i < diagrams.length; i++)
									{
										var pageOption = document.createElement('option');
										mxUtils.write(pageOption, diagrams[i].getAttribute('name') ||
											mxResources.get('pageWithNumber', [i + 1]));
										pageOption.setAttribute('value', i);
										
										if (i == realPage)
										{
											pageOption.setAttribute('selected', 'selected');
										}
	
										pageSelect.appendChild(pageOption);
									}
								}
								
								pageSelectFunction = function()
								{
									try
									{
										var temp = parseInt(pageSelect.value);
										currentPage = temp;
										realPage = currentPage;
										parseDiagram(diagrams[temp]);
									}
									catch (e)
									{
										pageSelect.value = currentPage;
										editorUi.handleError(e);
									}
								};
							}
							else
							{
								parseGraphModel(node);
							}
							
							var shortUser = item.lastModifyingUserName;
							
							if (shortUser != null && shortUser.length > 20)
							{
								shortUser = shortUser.substring(0, 20) + '...';
							}
							
							fileInfo.innerText = '';
							mxUtils.write(fileInfo, ((shortUser != null) ?
								(shortUser + ' ') : '') + ts.toLocaleDateString() +
								' ' + ts.toLocaleTimeString());
							
							fileInfo.setAttribute('title', row.getAttribute('title'));
							zoomInBtn.removeAttribute('disabled');
							zoomOutBtn.removeAttribute('disabled');
							zoomFitBtn.removeAttribute('disabled');
							compareBtn.removeAttribute('disabled');
							
							if (file == null || !file.isRestricted())
							{
								if (editorUi.editor.graph.isEnabled())
								{
									restoreBtn.removeAttribute('disabled');
								}
								
								downloadBtn.removeAttribute('disabled');
								showBtn.removeAttribute('disabled');
								newBtn.removeAttribute('disabled');
							}
							
							mxUtils.setOpacity(zoomInBtn, 60);
							mxUtils.setOpacity(zoomOutBtn, 60);
							mxUtils.setOpacity(zoomFitBtn, 60);
							mxUtils.setOpacity(compareBtn, 60);
						}
						else
						{
							pageSelect.style.display = 'none';
							pageSelect.innerText = '';
							fileInfo.innerText = '';
							errorNode.innerText = '';
							mxUtils.write(fileInfo, mxResources.get('errorLoadingFile'));
							mxUtils.write(errorNode, mxResources.get('errorLoadingFile'));
						}
					};
					
					mxEvent.addListener(row, 'click', function(evt)
					{
						if (currentRev != item)
						{
							spinner.stop();
							
							if (currentRow != null)
							{
								currentRow.style.backgroundColor = '';
							}
							
							currentRev = item;
							currentRow = row;
							currentRow.style.backgroundColor = Editor.isDarkMode() ? '#000000' : '#ebf2f9';
							currentDoc = null;
							currentXml = null;

							fileInfo.removeAttribute('title');
							fileInfo.innerText = mxResources.get('loading') + '...';
							container.style.backgroundColor = graph.defaultPageBackgroundColor;
							errorNode.innerText = '';
							graph.getModel().clear();
	
							restoreBtn.setAttribute('disabled', 'disabled');
							downloadBtn.setAttribute('disabled', 'disabled');
							zoomInBtn.setAttribute('disabled', 'disabled');
							zoomOutBtn.setAttribute('disabled', 'disabled');
							zoomFitBtn.setAttribute('disabled', 'disabled');
							compareBtn.setAttribute('disabled', 'disabled');

							newBtn.setAttribute('disabled', 'disabled');
							showBtn.setAttribute('disabled', 'disabled');
							pageSelect.setAttribute('disabled', 'disabled');
							
							mxUtils.setOpacity(zoomInBtn, 20);
							mxUtils.setOpacity(zoomOutBtn, 20);
							mxUtils.setOpacity(zoomFitBtn, 20);
							mxUtils.setOpacity(compareBtn, 20);

							spinner.spin(container);
							
							item.getXml(function(xml)
				   			{
								if (currentRev == item)
								{
									try
									{
										updateGraph(xml);
									}
									catch (e)
									{
										fileInfo.innerText = mxResources.get('error') + ': ' + e.message;
									}
								}
				   			}, function(err)
				   			{
				   				spinner.stop();
								pageSelect.style.display = 'none';
								pageSelect.innerText = '';
				   				fileInfo.innerText = '';
								mxUtils.write(fileInfo, mxResources.get('errorLoadingFile'));
								mxUtils.write(errorNode, mxResources.get('errorLoadingFile'));
				   			});

							mxEvent.consume(evt);
						}
					});
					
					mxEvent.addListener(row, 'dblclick', function(evt)
					{
						showBtn.click();
						
						if (window.getSelection)
						{
							window.getSelection().removeAllRanges();
						}
					    else if (document.selection)
					    {
					    	document.selection.empty();
					    }
						
						mxEvent.consume(evt);
					}, false);
					
					tbody.appendChild(row);
				}

				return row;
			})(revs[i]);
			
			// Selects and loads first element in list (ie current version) after
			// graph container was initialized since there is no loading delay
			if (elt != null && i == revs.length - 1)
			{
				currentElt = elt;
			}
		}
		
		table.appendChild(tbody);
		list.appendChild(table);
	}
	else if (file == null || (editorUi.drive == null && file.constructor == window.DriveFile) ||
		(editorUi.dropbox == null && file.constructor == window.DropboxFile))
	{
		container.style.display = 'none';
		tb.style.display = 'none';
		mxUtils.write(list, mxResources.get('notAvailable'));
	}
	else
	{
		container.style.display = 'none';
		tb.style.display = 'none';
		mxUtils.write(list, mxResources.get('noRevisions'));
	}
	
	this.init = function()
	{
		if (currentElt != null)
		{
			currentElt.click();
		}
	};

	var closeBtn = mxUtils.button(mxResources.get('close'), function()
	{
		editorUi.hideDialog();
	});
	closeBtn.className = 'geBtn';

	tb.appendChild(compareBtn);
	tb.appendChild(zoomOutBtn);
	tb.appendChild(zoomFitBtn);
	tb.appendChild(zoomInBtn);
	tb.appendChild(pageSelect);

	if (editorUi.editor.cancelFirst)
	{
		buttons.appendChild(closeBtn);
		buttons.appendChild(downloadBtn);
		buttons.appendChild(newBtn);
		buttons.appendChild(restoreBtn);
		buttons.appendChild(showBtn);
	}
	else
	{
		buttons.appendChild(downloadBtn);
		buttons.appendChild(newBtn);
		buttons.appendChild(restoreBtn);
		buttons.appendChild(showBtn);
		buttons.appendChild(closeBtn);
	}

	div.appendChild(buttons);
	div.appendChild(tb);
	div.appendChild(fileInfo);

	this.container = div;
};