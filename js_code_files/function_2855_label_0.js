	EditorUi.prototype.init = function()
	{
		editorUiInit.apply(this, arguments);
		
		var div = document.createElement('div');
		div.style.cssText = 'position:absolute;left:0px;right:0px;top:0px;overflow-y:auto;overflow-x:hidden;';
		div.style.bottom = (urlParams['embed'] != '1' || urlParams['libraries'] == '1') ? '63px' : '32px';
		this.sidebar = this.createSidebar(div);
		
		if (iw >= 1000 || urlParams['clibs'] != null || urlParams['libs'] != null ||
			urlParams['search-shapes'] != null)
		{
			toggleShapes(this, true);
			
			if (this.sidebar != null && urlParams['search-shapes'] != null && this.sidebar.searchShapes != null)
			{
				this.sidebar.searchShapes(urlParams['search-shapes']);
				this.sidebar.showEntries('search');
			}
		}
		
		if (EditorUi.windowed && iw >= 1000)
		{
			toggleFormat(this, true);
			this.formatWindow.window.setVisible(true);
		}
        
		// Needed for creating elements in Format panel
		var ui = this;
		var graph = ui.editor.graph;
		ui.toolbar = this.createToolbar(ui.createDiv('geToolbar'));
		ui.defaultLibraryName = mxResources.get('untitledLibrary');

		var menubar = document.createElement('div');
		menubar.className = 'geMenubarContainer';
		var before = null;
		var menuObj = new Menubar(ui, menubar);

		function addMenu(id, small, img)
		{
			var menu = ui.menus.get(id);

			var elt = menuObj.addMenu(mxResources.get(id), mxUtils.bind(this, function()
			{
				// Allows extensions of menu.functid
				menu.funct.apply(this, arguments);
			}), before);
            
			elt.className = 'geMenuItem';
			elt.style.display = 'inline-block';
			elt.style.boxSizing = 'border-box';
			elt.style.top = '6px';
			elt.style.marginRight = '6px';
			elt.style.height = '30px';
			elt.style.paddingTop = '6px';
			elt.style.paddingBottom = '6px';
			elt.style.cursor = 'pointer';
			elt.setAttribute('title', mxResources.get(id));
			ui.menus.menuCreated(menu, elt, 'geMenuItem');
            
			if (img != null)
			{
				elt.style.backgroundImage = 'url(' + img + ')';
				elt.style.backgroundPosition = 'center center';
				elt.style.backgroundRepeat = 'no-repeat';
				elt.style.backgroundSize = '24px 24px';
				elt.style.width = '34px';
				elt.innerText = '';
			}
			else if (!small)
			{
				elt.style.backgroundImage = 'url(' + mxWindow.prototype.normalizeImage + ')';
				elt.style.backgroundPosition = 'right 6px center';
				elt.style.backgroundRepeat = 'no-repeat';
				elt.style.paddingRight = '22px';
			} 

			return elt;
		};
        
		function addMenuItem(label, fn, small, tooltip, action, img)
		{
			var btn = document.createElement('a');
			btn.className = 'geMenuItem';
			btn.style.display = 'inline-block';
			btn.style.boxSizing = 'border-box';
			btn.style.height = '30px';
			btn.style.padding = '6px';
			btn.style.position = 'relative';
			btn.style.verticalAlign = 'top';
			btn.style.top = '0px';
			
			if (ui.statusContainer != null)
			{
				menubar.insertBefore(btn, ui.statusContainer);
			}
			else
			{
				menubar.appendChild(btn);
			}
            
			if (img != null)
			{
				btn.style.backgroundImage = 'url(' + img + ')';
				btn.style.backgroundPosition = 'center center';
				btn.style.backgroundRepeat = 'no-repeat';
				btn.style.backgroundSize = '24px 24px';
				btn.style.width = '34px';
			}
			else
			{
				mxUtils.write(btn, label);
			}
            
    		// Prevents focus
            mxEvent.addListener(btn, (mxClient.IS_POINTER) ? 'pointerdown' : 'mousedown',
            	mxUtils.bind(this, function(evt)
    		{
    			evt.preventDefault();
    		}));

            mxEvent.addListener(btn, 'click', function(evt)
            {
            	if (btn.getAttribute('disabled') != 'disabled')
            	{
            		fn(evt);
            	}
            	
                mxEvent.consume(evt);
            });
            
            if (small == null)
            {
                btn.style.marginRight = '4px';
            }
            
            if (tooltip != null)
            {
                btn.setAttribute('title', tooltip);
            }

            if (action != null)
            {
                function updateState()
                {
                    if (action.isEnabled())
                    {
                        btn.removeAttribute('disabled');
                        btn.style.cursor = 'pointer';
                    }
                    else
                    {
                        btn.setAttribute('disabled', 'disabled');
                        btn.style.cursor = 'default';
                    }
                };
                
                action.addListener('stateChanged', updateState);
				graph.addListener('enabledChanged', updateState);
                updateState();
            }
           
            return btn;
        };
        
        function createGroup(btns, op, container)
        {
            var btnGroup = document.createElement('div');
            btnGroup.className = 'geMenuItem';
            btnGroup.style.display = 'inline-block';
            btnGroup.style.verticalAlign = 'top';
            btnGroup.style.marginRight = '6px';
            btnGroup.style.padding = '0 4px 0 4px';
            btnGroup.style.height = '30px';
            btnGroup.style.position = 'relative';
            btnGroup.style.top = '0px';

            for (var i = 0; i < btns.length; i++)
            {
            	if (btns[i] != null)
            	{
            		btns[i].style.margin = '0px';
	                btns[i].style.boxShadow = 'none';
	                btnGroup.appendChild(btns[i]);
            	}
            }
            
            if (op != null)
            {
            	mxUtils.setOpacity(btnGroup, op);
            }

			if (ui.statusContainer != null)
            {
            	menubar.insertBefore(btnGroup, ui.statusContainer);
            }
            else
            {
            	menubar.appendChild(btnGroup);
            }
            
            return btnGroup;
        };

		ui.statusContainer = ui.createStatusContainer();
		ui.statusContainer.style.position = 'relative';
		ui.statusContainer.style.maxWidth = '';
		ui.statusContainer.style.color = 'gray';
		ui.statusContainer.style.cursor = 'default';
		
		function updateTitle()
		{
			var file = ui.getCurrentFile();
			
			if (file != null && file.getTitle() != null)
			{
				var mode = file.getMode();
				
				if (mode == 'google')
				{
					mode = 'googleDrive';
				}
				else if (mode == 'github')
				{
					mode = 'gitHub';
				}
				else if (mode == 'gitlab')
				{
					mode = 'gitLab';
				}
				else if (mode == 'onedrive')
				{
					mode = 'oneDrive';
				}
				
				mode = mxResources.get(mode);
				menubar.setAttribute('title', file.getTitle() + ((mode != null) ? ' (' + mode + ')' : ''));
			}
			else
			{
				menubar.removeAttribute('title');
			}
		};
		
		// Hides popup menus
		var uiHideCurrentMenu = ui.hideCurrentMenu;
		
		ui.hideCurrentMenu = function()
		{
			uiHideCurrentMenu.apply(this, arguments);
			this.editor.graph.popupMenuHandler.hideMenu();
		};

		// Connects the status bar to the editor status
		var uiDescriptorChanged = ui.descriptorChanged;
		
		ui.descriptorChanged = function()
		{
			uiDescriptorChanged.apply(this, arguments);
			updateTitle();
		};
		
		ui.setStatusText(ui.editor.getStatus());
		menubar.appendChild(ui.statusContainer);

		ui.buttonContainer = document.createElement('div');
		ui.buttonContainer.style.cssText = 'position:absolute;right:0px;padding-right:34px;top:10px;' +
			'white-space:nowrap;padding-top:2px;background-color:inherit;';
		menubar.appendChild(ui.buttonContainer);
		
		// Container for the user element
		ui.menubarContainer = ui.buttonContainer;

        ui.tabContainer = document.createElement('div');
		ui.tabContainer.className = 'geTabContainer';
        ui.tabContainer.style.cssText = 'position:absolute;left:0px;right:0px;bottom:0px;height:30px;white-space:nowrap;' +
            'margin-bottom:-2px;visibility:hidden;';

        var previousParent = ui.diagramContainer.parentNode;

        var wrapper = document.createElement('div');
        wrapper.style.cssText = 'position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow:hidden;';
        ui.diagramContainer.style.top = '47px';

		var insertImage = Editor.addBoxImage;
		
		// Hides hover icons if freehand is active
		if (ui.hoverIcons != null)
		{
			var hoverIconsUpdate = ui.hoverIcons.update;
			
			ui.hoverIcons.update = function()
			{
				if (!graph.freehand.isDrawing())
				{
					hoverIconsUpdate.apply(this, arguments);
				}
			};
		}
	
		// Removes sketch style from freehand shapes
		if (graph.freehand != null)
		{
			var freehandCreateStyle = graph.freehand.createStyle;
			
			graph.freehand.createStyle = function(stencil)
			{
				return freehandCreateStyle.apply(this, arguments) + 'sketch=0;';
			};
		}
		
		// Connects the status bar to the editor status
		ui.editor.addListener('statusChanged', mxUtils.bind(this, function()
		{
			ui.setStatusText(ui.editor.getStatus());
		}));
		
		ui.setStatusText(ui.editor.getStatus());

        var viewZoomMenu = ui.menus.get('viewZoom');

		if (viewZoomMenu != null)
		{
			var fitFunction = function(evt)
	        {
				if (mxEvent.isAltDown(evt))
				{
					ui.hideCurrentMenu();
					ui.actions.get('customZoom').funct();
					mxEvent.consume(evt);
				}
				// geItem is a dropdown menu, geMenuItem is a button in the toolbar
				else if (mxEvent.getSource(evt).className != 'geItem' || mxEvent.isShiftDown(evt))
				{
					ui.hideCurrentMenu();
					ui.actions.get('smartFit').funct();
					mxEvent.consume(evt);
				}
	        };

        	var zoomInAction = ui.actions.get('zoomIn');
			var zoomOutAction = ui.actions.get('zoomOut');
			var resetViewAction = ui.actions.get('resetView');
        	var undoAction = ui.actions.get('undo');
        	var redoAction = ui.actions.get('redo');        	
	        var undoElt = addMenuItem('', undoAction.funct, null, mxResources.get('undo') + ' (' + undoAction.shortcut + ')', undoAction, Editor.undoImage);
	        var redoElt = addMenuItem('', redoAction.funct, null, mxResources.get('redo') + ' (' + redoAction.shortcut + ')', redoAction, Editor.redoImage);
			var fitElt = addMenuItem('', fitFunction, true, mxResources.get('fit') + ' (' + Editor.ctrlKey + '+H)', resetViewAction, Editor.zoomFitImage);
				
			menubar.style.cssText = 'position:absolute;left:0px;right:0px;top:0px;height:30px;padding:8px;' +
				'text-align:left;white-space:nowrap;';
			this.tabContainer.style.right = '70px';
			var elt = menuObj.addMenu('100%', viewZoomMenu.funct);
			elt.setAttribute('title', mxResources.get('zoom') + ' (Alt+Mousewheel)');
			elt.style.whiteSpace = 'nowrap';
			elt.style.paddingRight = '10px';
			elt.style.textDecoration = 'none';
			elt.style.textDecoration = 'none';
			elt.style.overflow = 'hidden';
			elt.style.visibility = 'hidden';
			elt.style.textAlign = 'center';
			elt.style.cursor = 'pointer';
			elt.style.height = (parseInt(ui.tabContainerHeight) - 1) + 'px';
			elt.style.lineHeight = (parseInt(ui.tabContainerHeight) + 1) + 'px';
			elt.style.position = 'absolute';
			elt.style.display = 'block';
			elt.style.fontSize = '12px';
			elt.style.width = '59px';
			elt.style.right = '0px';
			elt.style.bottom = '0px';
			elt.style.backgroundImage = 'url(' + mxWindow.prototype.minimizeImage + ')';
			elt.style.backgroundPosition = 'right 6px center';
			elt.style.backgroundRepeat = 'no-repeat';
			wrapper.appendChild(elt);

	    	// Updates the label if the scale changes
			(function(elt)
			{
				// Adds shift+/alt+click on zoom label
				mxEvent.addListener(elt, 'click', fitFunction);

				var updateZoom = mxUtils.bind(this, function()
				{
					elt.innerText = '';
					mxUtils.write(elt, Math.round(ui.editor.graph.view.scale * 100) + '%');
				});

				ui.editor.graph.view.addListener(mxEvent.EVENT_SCALE, updateZoom);
				ui.editor.addListener('resetGraphView', updateZoom);
				ui.editor.addListener('pageSelected', updateZoom);
			})(elt);
	    	
	    	// Augments setGraphEnabled to update visible state
	    	var uiSetGraphEnabled = ui.setGraphEnabled;
	    	
	    	ui.setGraphEnabled = function()
	    	{
	    		uiSetGraphEnabled.apply(this, arguments);
	    		
	    		if (this.tabContainer != null)
	    		{
	    			elt.style.visibility = this.tabContainer.style.visibility;
    	        	this.diagramContainer.style.bottom = (this.tabContainer.style.visibility != 'hidden')
						? this.tabContainerHeight + 'px' : '0px';
	    		}
	    	};
		}
        
        wrapper.appendChild(menubar);
        wrapper.appendChild(ui.diagramContainer);
        previousParent.appendChild(wrapper);
        ui.updateTabContainer();

		if (!EditorUi.windowed && iw >= 1000)
		{
			toggleFormat(this, true);
		}
        
        wrapper.appendChild(ui.tabContainer);
        var langMenuElt = null;
        
        function refreshMenu()
        {
			// Removes all existing menu items
			var node = menubar.firstChild;
			
			while (node != null)
			{
				var temp = node.nextSibling;
				
				if (node.className == 'geMenuItem' || node.className == 'geItem')
				{
					node.parentNode.removeChild(node);
				}
				
				node = temp;
			}
			
			before = menubar.firstChild;
			iw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			var small = iw < 1000;
			var appElt = null;
	
			if (!small)
			{
				appElt = addMenu('diagram');
			}

			var temp = (small) ? addMenu('diagram', null, Editor.menuImage) : null;

			if (temp != null)
			{
				appElt = temp;
			}

			createGroup([appElt, addMenuItem(mxResources.get('shapes'), ui.actions.get('toggleShapes').funct, null,
				mxResources.get('shapes'), ui.actions.get('image'), (small) ? Editor.shapesImage : null),
				addMenuItem(mxResources.get('format'), ui.actions.get('format').funct, null,
				mxResources.get('format') + ' (' + ui.actions.get('format').shortcut + ')', ui.actions.get('image'),
				(small) ? Editor.formatImage : null)],
				(small) ? 60 : null);
		
			var elt = addMenu('insert', true, (small) ? insertImage : null);
			createGroup([elt, addMenuItem(mxResources.get('delete'), ui.actions.get('delete').funct,
				null, mxResources.get('delete'), ui.actions.get('delete'),
				(small) ? Editor.trashImage : null)], (small) ? 60 : null);

			if (iw >= 411)
			{
				createGroup([undoElt, redoElt], 60);
	
				if (iw >= 520)
				{
					createGroup([fitElt,
						(iw >= 640) ? addMenuItem('', zoomInAction.funct, true, mxResources.get('zoomIn') + ' (' + Editor.ctrlKey + ' +)',
							zoomInAction, Editor.zoomInImage) : null,
						(iw >= 640) ? addMenuItem('', zoomOutAction.funct, true, mxResources.get('zoomOut') + ' (' + Editor.ctrlKey + ' -)',
							zoomOutAction, Editor.zoomOutImage) : null], 60);
				}
			}

			if (appElt != null)
			{
				mxEvent.disableContextMenu(appElt);

				mxEvent.addGestureListeners(appElt, mxUtils.bind(this, function(evt)
				{
					if (mxEvent.isShiftDown(evt) || mxEvent.isAltDown(evt) ||
						mxEvent.isMetaDown(evt) || mxEvent.isControlDown(evt) ||
						mxEvent.isPopupTrigger(evt))
					{
						ui.appIconClicked(evt);
					}
				}), null, null);
			}
	        
			var langMenu = ui.menus.get('language');

			if (langMenu != null && !mxClient.IS_CHROMEAPP &&
				!EditorUi.isElectronApp && iw >= 600 &&
				urlParams['embed'] != '1')
			{
				if (langMenuElt == null)
				{
					var elt = menuObj.addMenu('', langMenu.funct);
					elt.setAttribute('title', 'language');
					elt.className = 'geToolbarButton';
					elt.style.backgroundImage = 'url(' + Editor.globeImage + ')';
					elt.style.backgroundPosition = 'center center';
					elt.style.backgroundRepeat = 'no-repeat';
					elt.style.backgroundSize = '22px 22px';
					elt.style.position = 'absolute';
					elt.style.height = '24px';
					elt.style.width = '24px';
					elt.style.zIndex = '1';
					elt.style.right = '8px';
					elt.style.cursor = 'pointer';
					elt.style.top = '12px';
					menubar.appendChild(elt);
					langMenuElt = elt;
				}
				
				ui.buttonContainer.style.paddingRight = '34px';
			}
			else
			{
				ui.buttonContainer.style.paddingRight = '0px';
				
				if (langMenuElt != null)
				{
					langMenuElt.parentNode.removeChild(langMenuElt);
					langMenuElt = null;
				}
			}
        };
        
        refreshMenu();
        
        mxEvent.addListener(window, 'resize', function()
		{
        	refreshMenu();
        	
            if (ui.sidebarWindow != null)
            {
                ui.sidebarWindow.window.fit();
            }
            
            if (ui.formatWindow != null)
            {
            	ui.formatWindow.window.fit();
            }

            if (ui.actions.outlineWindow != null)
            {
            	ui.actions.outlineWindow.window.fit();
            }

            if (ui.actions.layersWindow != null)
            {
            	ui.actions.layersWindow.window.fit();
            }

            if (ui.menus.tagsWindow != null)
            {
            	ui.menus.tagsWindow.window.fit();
            }

            if (ui.menus.findWindow != null)
            {
            	ui.menus.findWindow.window.fit();
            }

            if (ui.menus.findReplaceWindow != null)
            {
            	ui.menus.findReplaceWindow.window.fit();
            }
		});
	};