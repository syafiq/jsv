	EditorUi.prototype.createPickerMenuForTheme = function(value)
	{
		if (value == 'simple' || value == 'sketch')
		{
			if (this.sketchPickerMenuElt == null)
			{
				var graph = this.editor.graph;
				this.sketchPickerMenuElt = document.createElement('div');
				this.sketchPickerMenuElt.className = 'geToolbarContainer';
				this.sketchPickerMenuElt.style.cssText = 'position:absolute;left:10px;border-radius:4px;' +
					'padding:0px 4px 4px;white-space:nowrap;max-height:100%;width:48px;z-index:1;' +
					'box-sizing:border-box;transform:translate(0, -50%);top:50%;user-select:none;';

				var picker = this.sketchPickerMenuElt;
				mxUtils.setPrefixedStyle(picker.style, 'transition', 'transform .3s ease-out');
				
				var foldImg = document.createElement('a');
				foldImg.style.padding = '0px';
				foldImg.style.boxShadow = 'none';
				foldImg.className = 'geMenuItem geAdaptiveAsset';
				foldImg.style.display = 'block';
				foldImg.style.width = '100%';
				foldImg.style.height = '14px';
				foldImg.style.margin = '4px 0 2px 0';
				foldImg.style.backgroundImage = 'url(' + Editor.expandMoreImage + ')';
				foldImg.style.backgroundPosition = 'center center';
				foldImg.style.backgroundRepeat = 'no-repeat';
				foldImg.style.backgroundSize = '22px';
				mxUtils.setOpacity(foldImg, 40);
				foldImg.setAttribute('title', mxResources.get('collapseExpand'));
				var fmargin = foldImg.style.margin;
				
				var freehandElt = this.createMenuItem('insertFreehand',
					Editor.freehandImage, true);
				freehandElt.style.paddingLeft = '12px';
				freehandElt.style.backgroundSize = '';
				freehandElt.style.width = '26px';
				freehandElt.style.height = '30px';
				freehandElt.style.opacity = '0.7';
				
				var insertElt = this.createMenu('insert', Editor.addBoxImage);
				insertElt.style.backgroundSize = '';
				insertElt.style.display = 'block';
				insertElt.style.width = '30px';
				insertElt.style.height = '30px';
				insertElt.style.padding = '4px 4px 0px 4px';
				insertElt.style.opacity = '0.7';
				
				var shapesElt = insertElt.cloneNode(true);
				shapesElt.style.backgroundImage = 'url(' + Editor.shapesImage + ')';
				shapesElt.style.backgroundSize = '24px';
				mxEvent.addListener(shapesElt, 'click', mxUtils.bind(this, function(evt)
				{
					var off = mxUtils.getOffset(insertElt);
					this.showShapePicker(this.diagramContainer.scrollLeft + off.x + insertElt.offsetWidth + 8,
						this.diagramContainer.scrollTop + off.y + 10, null, null, null, null,
						mxUtils.bind(this, function(cells)
					{
						return graph.getCenterInsertPoint(graph.getBoundingBoxFromGeometry(cells, true));
					}));

					mxEvent.consume(evt);
				}));

				insertElt.style.backgroundSize = '24px';
				insertElt.style.marginBottom = '4px';

				var collapsed = false;
	
				var initPicker = mxUtils.bind(this, function()
				{
					picker.innerText = '';
					
					if (!collapsed)
					{
						function addKey(elt, key, kx, ky)
						{
							kx = (kx != null) ? kx : 30;
							ky = (ky != null) ? ky : 26;

							elt.style.position = 'relative';
							elt.style.overflow = 'visible';
	
							var div = document.createElement('div');
							div.style.position = 'absolute';
							div.style.fontSize = '8px';
							div.style.left = kx + 'px';
							div.style.top = ky + 'px';
							mxUtils.write(div, key);
							elt.appendChild(div);
						};
	
						function addElt(elt, title, cursor, key, kx, ky)
						{
							if (title != null)
							{
								elt.setAttribute('title', title);
							}
							
							elt.style.cursor = 'pointer';
							elt.style.margin = '8px 0px 8px 2px';
							elt.style.display = 'block';
							picker.appendChild(elt);
							
							if (key != null)
							{
								addKey(elt, key, kx, ky);
							}
							
							return elt;
						};

						// Append sidebar elements
						var tw = 28;
						var th = 28;
						var margin = '4px 0px 6px 2px';
						var em = '1px 0px 1px 2px';
						addElt(this.sidebar.createVertexTemplate('text;strokeColor=none;fillColor=none;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;', 
							60, 30, 'Text', mxResources.get('text') + ' (A)', true, false, null, true, null, tw + 10, th + 10),
							mxResources.get('text') + ' (A)', null, 'A', 32).style.margin = '0 0 0 -2px';
						addElt(this.sidebar.createVertexTemplate('shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;' +
							'fontColor=#000000;darkOpacity=0.05;fillColor=#FFF9B2;strokeColor=none;fillStyle=solid;' +
							'direction=west;gradientDirection=north;gradientColor=#FFF2A1;shadow=1;size=20;pointerEvents=1;',
							140, 160, '', mxResources.get('note') + ' (S)', true, false, null, true, null, tw, th),
							mxResources.get('note') + ' (S)', null, 'S').style.margin = margin;
						addElt(this.sidebar.createVertexTemplate('rounded=0;whiteSpace=wrap;html=1;', 160, 80, '',
							mxResources.get('rectangle') + ' (D)', true, false, null, true, null, tw, th),
							mxResources.get('rectangle') + ' (D)', null, 'D').style.margin = margin;
						addElt(this.sidebar.createVertexTemplate('ellipse;whiteSpace=wrap;html=1;', 160, 100, '',
							mxResources.get('ellipse') + ' (F)', true, false, null, true, null, tw, th),
							mxResources.get('ellipse') + ' (F)', null, 'F').style.margin = margin;
						
						var edgeStyle = 'edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;';
						var cell = new mxCell('', new mxGeometry(0, 0, this.editor.graph.defaultEdgeLength + 20, 0), edgeStyle);
						cell.geometry.setTerminalPoint(new mxPoint(0, 0), true);
						cell.geometry.setTerminalPoint(new mxPoint(cell.geometry.width, 0), false);
						cell.geometry.points = [];
						cell.geometry.relative = true;
						cell.edge = true;
						
						addElt(this.sidebar.createEdgeTemplateFromCells([cell],
							cell.geometry.width, cell.geometry.height, mxResources.get('line') + ' (C)',
							true, null, true, false, tw, th), mxResources.get('line') + ' (C)', null, 'C').
							style.margin = em;
							
						cell = cell.clone();
						cell.style = edgeStyle + 'shape=flexArrow;rounded=1;startSize=8;endSize=8;';
						cell.geometry.width = this.editor.graph.defaultEdgeLength + 20;
						cell.geometry.setTerminalPoint(new mxPoint(0, 20), true);
						cell.geometry.setTerminalPoint(new mxPoint(cell.geometry.width, 20), false);
		
						addElt(this.sidebar.createEdgeTemplateFromCells([cell],
							cell.geometry.width, 40, mxResources.get('arrow'),
							true, null, true, false, tw, th), mxResources.get('arrow')).
							style.margin = em;
					
						addElt(freehandElt, mxResources.get('freehand') + ' (X)', null, 'X');

						this.sketchPickerMenuElt.appendChild(shapesElt);
						this.sketchPickerMenuElt.appendChild(insertElt);
					}
					
					if (urlParams['embedInline'] != '1')
					{
						picker.appendChild(foldImg);
					}
				});
				
				mxEvent.addListener(foldImg, 'click', mxUtils.bind(this, function()
				{
					if (collapsed)
					{
						mxUtils.setPrefixedStyle(picker.style, 'transform', 'translate(0, -50%)');
						picker.style.padding = '0px 4px 4px';
						picker.style.width = '48px';
						picker.style.top = '50%';
						picker.style.bottom = '';
						picker.style.height = '';
						foldImg.style.backgroundImage = 'url(' + Editor.expandMoreImage + ')';
						foldImg.style.width = '100%';
						foldImg.style.height = '14px';
						foldImg.style.margin = fmargin;
						collapsed = false;
						initPicker();
					}
					else
					{				
						picker.innerText = '';
						picker.appendChild(foldImg);
						mxUtils.setPrefixedStyle(picker.style, 'transform', 'translate(0, 0)');
						picker.style.width = 'auto';
						picker.style.bottom = '12px';
						picker.style.padding = '0px';
						picker.style.top = '';
						foldImg.style.backgroundImage = 'url(' + Editor.expandLessImage + ')';
						foldImg.style.width = '24px';
						foldImg.style.height = '24px';
						foldImg.style.margin = '0px';
						collapsed = true;
					}
				}));
				
				this.addListener('darkModeChanged', initPicker);
				this.addListener('sketchModeChanged', initPicker);
				initPicker();

				this.sketchWrapperElt.appendChild(this.sketchPickerMenuElt);
			}
		}
	};