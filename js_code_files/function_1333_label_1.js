	Menus.prototype.init = function()
	{
		menusInit.apply(this, arguments);
		
        var ui = this.editorUi;

        var togglePagesAction = ui.actions.put('togglePagesVisible', new Action(mxResources.get('pages'), function(e)
        {
            ui.setPagesVisible(!Editor.pagesVisible);
        }));
		
		togglePagesAction.setToggleAction(true);
		togglePagesAction.setSelectedCallback(function() { return Editor.pagesVisible; });
		
        ui.actions.put('toggleShapes', new Action(mxResources.get('shapes'), function()
        {
        	toggleShapes(ui);
        }, null, null, Editor.ctrlKey + '+Shift+K'));

        if (EditorUi.enablePlantUml && !ui.isOffline())
        {
	        ui.actions.put('plantUml', new Action(mxResources.get('plantUml') + '...', function()
	        {
	            var dlg = new ParseDialog(ui, mxResources.get('plantUml') + '...', 'plantUml');
	            ui.showDialog(dlg.container, 620, 420, true, false);
	            dlg.init();
	        }));
        }
        
    	ui.actions.put('mermaid', new Action(mxResources.get('mermaid') + '...', function()
        {
            var dlg = new ParseDialog(ui, mxResources.get('mermaid') + '...', 'mermaid');
            ui.showDialog(dlg.container, 620, 420, true, false);
            dlg.init();
        }));

		// Adds submenu for edit items
		var addPopupMenuCellEditItems = this.addPopupMenuCellEditItems;

		this.put('editCell', new Menu(mxUtils.bind(this, function(menu, parent)
		{
			var graph = this.editorUi.editor.graph;
			var cell = graph.getSelectionCell();
			addPopupMenuCellEditItems.call(this, menu, cell, null, parent);

			this.addMenuItems(menu, ['editTooltip'], parent);

			if (graph.model.isVertex(cell))
			{
				this.addMenuItems(menu, ['editGeometry'], parent);
			}

			this.addMenuItems(menu, ['-', 'edit'], parent);
		})));

		this.addPopupMenuCellEditItems = function(menu, cell, evt, parent)
		{
			// LATER: Pass-through for evt from context menu to submenu item
			menu.addSeparator();
			this.addSubmenu('editCell', menu, parent, mxResources.get('edit'));
		};
		
        var methods = ['horizontalFlow', 'verticalFlow', '-', 'horizontalTree', 'verticalTree',
                       'radialTree', '-', 'organic', 'circle'];

        var addInsertItem = function(menu, parent, title, method)
        {
            menu.addItem(title, null, mxUtils.bind(this, function()
            {
                var dlg = new CreateGraphDialog(ui, title, method);
                ui.showDialog(dlg.container, 620, 420, true, false);
                // Executed after dialog is added to dom
                dlg.init();
            }), parent);
        };

        this.put('insertLayout', new Menu(mxUtils.bind(this, function(menu, parent)
        {
            for (var i = 0; i < methods.length; i++)
            {
                if (methods[i] == '-')
                {
                    menu.addSeparator(parent);
                }
                else
                {
                    addInsertItem(menu, parent, mxResources.get(methods[i]) + '...', methods[i]);
                }
            }
        })));
	};