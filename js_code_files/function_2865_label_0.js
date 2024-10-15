	Sidebar.prototype.addBPMN2GeneralPalette = function(gn, r, sb)
	{
		var dt = 'bpmn business process model notation ';
		var w = 50;
		var h = 50;
		var ew = 160;
		var eh = 0;
		var s1 = 'shape=mxgraph.bpmn.data;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;whiteSpace=wrap;size=15;html=1;';
		var s2 = 'swimlane;html=1;startSize=20;fontStyle=0;collapsible=0;';
		var s3 = 'shape=mxgraph.bpmn.conversation;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;aspect=fixed;bpmnConversationType=';
		var s4 = 'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;';
		var s5 = 'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endFill=0;startFill=0;endSize=6;startSize=6;dashed=1;dashPattern=1 4;endArrow=';
		
		var fns =
		[
			this.createVertexTemplateEntry(s1, 40, 60, '', 'Data Object', null, null, dt + 'data object'),
			this.createVertexTemplateEntry(s1 + 'bpmnTransferType=none;isCollection=1;', 40, 60, '', 'Data Object Collection', null, null, dt + 'data object collection'),
			this.createVertexTemplateEntry(s1 + 'bpmnTransferType=input;', 40, 60, '', 'Data Input', null, null, dt + 'data input'),
			this.createVertexTemplateEntry(s1 + 'bpmnTransferType=input;isCollection=1;', 40, 60, '', 'Data Input Collection', null, null, dt + 'data input collection'),
			this.createVertexTemplateEntry(s1 + 'bpmnTransferType=output;', 40, 60, '', 'Data Output', null, null, dt + 'data output'),
			this.createVertexTemplateEntry(s1 + 'bpmnTransferType=output;isCollection=1;', 40, 60, '', 'Data Output Collection', null, null, dt + 'data output collection'),
			this.createVertexTemplateEntry('shape=datastore;whiteSpace=wrap;html=1;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;', 100, 100, '', 'Data Store', null, null, dt + 'data store'),
			this.createVertexTemplateEntry('points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];rounded=1;dashed=1;dashPattern=5 2 1 2;labelPosition=center;verticalLabelPosition=top;align=right;verticalAlign=bottom;fontSize=8;html=1;whiteSpace=wrap;', 140, 80, '', 'Data Object', null, null, dt + 'data object'),
			this.createVertexTemplateEntry('text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;', 80, 30, 'Text', 'Text Annotation', null, null, dt + 'text annotation label'),
			this.createVertexTemplateEntry(s2 + 'horizontal=0;swimlaneLine=0;fillColor=none;whiteSpace=wrap;', 440, 100, '', 'Horizontal Lane', null, null, dt + 'horizontal lane'),
			this.createVertexTemplateEntry(s2 + 'horizontal=1;swimlaneLine=0;fillColor=none;whiteSpace=wrap;', 440, 100, '', 'Vertical Lane', null, null, dt + 'vertical lane'),
			this.createVertexTemplateEntry(s2 + 'horizontal=0;swimlaneLine=1;swimlaneFillColor=#ffffff;strokeWidth=2;whiteSpace=wrap;', 440, 100, '', 'Horizontal Lane', null, null, dt + 'horizontal lane'),
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.swimlane;html=1;startSize=20;horizontal=0;swimlaneLine=1;collapsible=0;fontStyle=0;swimlaneFillColor=#ffffff;strokeWidth=2;isCollection=1;whiteSpace=wrap;', 440, 100, '', 'Horizontal Lane', null, null, dt + 'horizontal lane'),
			this.createVertexTemplateEntry(s2 + 'horizontal=1;swimlaneLine=1;strokeWidth=2;swimlaneFillColor=#ffffff;whiteSpace=wrap;', 220, 100, '', 'Vertical Lane', null, null, dt + 'vertical lane'),
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.swimlane;html=1;startSize=20;horizontal=1;swimlaneLine=1;collapsible=0;fontStyle=0;strokeWidth=2;swimlaneFillColor=#ffffff;isCollection=1;whiteSpace=wrap;', 220, 100, '', 'Vertical Lane', null, null, dt + 'vertical lane'),
			
			this.createVertexTemplateEntry(s3 + 'conv;', 70, 60, '', 'Conversation', null, null, dt + 'conversation'),
			this.createVertexTemplateEntry(s3 + 'conv;isLoopSub=1;', 70, 60, '', 'Sub-Conversation', null, null, dt + 'sub conversation'),
			this.createVertexTemplateEntry(s3 + 'call;', 70, 60, '', 'Call Conversation', null, null, dt + 'call conversation'),
			this.createVertexTemplateEntry(s3 + 'call;isLoopSub=1;', 70, 60, '', 'Call Sub-Conversation', null, null, dt + 'call sub conversation'),

			this.createVertexTemplateEntry('html=1;shape=mxgraph.flowchart.annotation_2;align=left;labelPosition=right;', 50, 100, '', 'Annotation', null, null, this.getTagsForStencil('bpmn', 'annotation_1', 'bpmn business process model ').join(' ')),
	 		this.addDataEntry('crossfunctional cross-functional cross functional flowchart swimlane table', 400, 400, 'Cross-Functional Flowchart', '7ZhRb5swEMc/DY+bMCRt97jQpi+tVC2fwINbbMnYyD4C6aefjaHpBrTRlNCoTALJPp9t+P25O5kgTvL6XtOCPaoMRBDfBXGilULfyusEhAiikGdBfBtEUWjvIFqPjJJmNCyoBonHTIj8hB0VJXiL3dyYL+tSpsiVpM55LVSVMqrROxvci9bZMFq4JtKfzrRKGRfZA92rEjtr11tpVT1wCcYOhM5ViTKXry0G7RYb/uwWXDgDw9wCuSW2WTGOsClo6gYri8uvIGhheLN1s4KGtNSG7+AHGL+Os0JdUJm1nUJxiaDvdhZQt/EvJXHTvpTbjAq+lbadgnO1hhYSaIR6FHRjainfg8oB9d66VDxD5j0WoRcjZMC3DP8yUuMN25e5B91so5VuWMa4J+P3FJW2JtLXrOK5oNLJxZTmz/blqXhNp3mO5cpe9smS8OsyWNp5ie2TQ99ezl1joqRBTXmDAajBCgxejprHKBcNK7fvBPIz3hOSRCcQctET8olRA+8JmSopIW2j8GOD6Sji8TDxepT4C9yTE1+OEo/mQ5xcTYn8ahR5PB/k0c2UyK9HC8SbX/mnLBAnqAlD8XK+onDTE+/fw+TiQF9fTin4Nl/O0xYAEs6X9LR5n5Ae6S7xv1lr/yf+4cQ/pN75Ej/pH88/UZyQkRPzR6R+0j9Bz4f0xMm/f8adD+qzZn/bPfw5bMb++LH4Gw=='),
			this.addDataEntry('container swimlane pool horizontal', 480, 380, 'Horizontal Pool 1',
				'zZTPboMwDMafJvf8YdPOpVsvrVSJJ4jAaqIFgkI6oE8/Q0KrdmXjsE09RLI/f7aT3yFEpGW3cbJWO1uAIeKViNRZ60NUdikYQzjVBRFrwjnFQ/jbTJWNVVpLB5Vf0sBDw4c0RwjK3loTxMb3JopNq0sjK8xWypd4yzXDMFfaFFvZ2+Owq/Eyf5+ylYNGn2A/XYTdSDvZoUqHedbpk628nKbiHOczdGLOrx3ZsCL2tUp7yGqZD74WAaIWHwPOQzcLZJQijQ3YErzr0dLqwqvgSF4CNKpAH1RsE5MomyAczr0XvhhExPdxiy+4twNVTtlC5N/AiVwWMeD3GfSxGl/6ExLGfwFJMoeEPxISlvwnk6c5JuKRmPDnP2SC6eUXHGtXn+Qn'),
			this.addDataEntry('container swimlane pool horizontal', 480, 360, 'Horizontal Pool 2',
				'zZRNboMwEIVP472xadR1SJtNIkXiBBaMYqsGI+MEyOk7YCcRCVQs2ioLpJk37/nnEzLhSdFurajk3uSgCf8gPLHGOF8VbQJaE0ZVTviGMEbxI+xzZhoNU1oJC6VbEmA+cBb6BF45GKO9WLtOB7FuVKFFid1augJPuYmwzKTS+U505tTvVTuRfV27tYVaXeBwPUj0IO1Fiyrt1zNWXUzphA4CrmNdik7s2diR9lsEWyOVg7QSWe9rECBq4TJgHbSzQAYp0NiCKcDZDi2Nyp30jvjdQ6MS1FGGGF8FUdReON6yd75YBMTTuPkT7l1PldFoIfIf4AQuixiwaQYhEP6ZEZLVBJKI/QKSeA4Je0Uk3cPN/wXR2xwi/sKIWPyHiLC9v5HDbPSEfgM='),
			this.createVertexTemplateEntry('swimlane;startSize=20;horizontal=0;html=1;whiteSpace=wrap;', 320, 120, 'Lane', 'Horizontal Swimlane', null, null, 'swimlane lane pool'),
			this.addDataEntry('container swimlane pool horizontal', 360, 480, 'Vertical Pool 1',
				'xZTBboMwDIafJvfgsGrn0q2XVqrUJ4jAaqKFBoW0wJ5+hqTr1oLEYRoHpPhzLPx/hzCRle3WyUrtbYGGiTcmMmetD6eyzdAYBlwXTGwYAKePwftENxm6vJIOz37OAISBqzQXDORgrQmw9p2JsG50aeSZqrXyJW25SeiYK22Knezspf9X7WX+cavWDmv9iYfbIskD2suWKCdKY84fqUE19KBR2uOxknlPGjJDLG6JzmM7mXRAMeYWbYnedXSl0YVX4YZYBRtcoT6pOJa+RijrAE7fs3dxdIjuxj2KJ4+7XhfwZKbLJw2zIsN45C52Y7AfBhIYM7D6AwPplAFYwkD7EHcJIy9TRsSCRiD9PyNU3l+yoffrofsC'),
			this.addDataEntry('container swimlane pool vertical', 380, 480, 'Vertical Pool 2',
				'xZTfboMgFIefhnv+uGbXtVtv2qSJT0D0pJChGKRT+/Q7Cs5trYk3XS9MON/hJ/CFQERadnsna3W0BRgi3ohInbU+jMouBWMIp7ogYkc4p/gR/r7QZWOX1tJB5dcEeAh8SnOBQE7WmgAb35sIm1aXRlZYbZUvcZc7hsNcaVMcZG8vw1qNl/nHVG0dNPoKp2kj7A86yg4pRYox5zNsYM0HoKzTV1t5aeKMGWTDEvFvrdIeslrmQ7BFgcjiYcB56BaFjCja2IMtwbsep7S68CrMEK9BGlWgzyrGkgnKJoDzd3b2i4Oo+L5ucaP7MFjllK1UfmNr1ZH5/SPHQLwiPw0w/igDyZIB/kQDLPlPBS9LCsQzL8HmgQqwnJ+0sffrxfsC'),
			this.createVertexTemplateEntry('swimlane;startSize=20;whiteSpace=wrap;html=1;', 120, 320, 'Lane', 'Vertical Swimlane', null, null, 'swimlane lane pool'),
			this.createVertexTemplateEntry('points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];rounded=1;arcSize=10;dashed=1;strokeColor=#000000;fillColor=none;gradientColor=none;dashPattern=8 3 1 3;strokeWidth=2;whiteSpace=wrap;',
				200, 200, '', 'Group', null, null, this.getTagsForStencil('bpmn', 'group', 'bpmn business process model ').join(' ')),
				
			this.createEdgeTemplateEntry(s5 + 'none;startArrow=none;', ew, eh, '', 'Association', null, dt + 'association'),
			this.createEdgeTemplateEntry(s5 + 'openThin;startArrow=none;', ew, eh, '', 'Directional / Directed Data Association', null, dt + 'directed data directional association'),
			this.createEdgeTemplateEntry(s5 + 'openThin;startArrow=openThin;', ew, eh, '', 'Bi-Directional Association', null, dt + 'bi directional bidirectional association'),
			this.createEdgeTemplateEntry(s5 + 'none;startArrow=none;', ew, eh, '', 'Data Association', null, dt + 'data association'),
			this.createEdgeTemplateEntry('edgeStyle=elbowEdgeStyle;fontSize=12;html=1;shape=link;', ew, eh, '', 'Conversation Link', null, dt + 'conversation link'),

			this.createEdgeTemplateEntry(s4 + '', ew, eh, '', 'Sequence Flow', null, dt + 'sequence flow'),
			this.createEdgeTemplateEntry(s4 + 'startArrow=diamondThin;startFill=0;endSize=6;startSize=10;', ew, eh, '', 'Conditional Sequence Flow', null, dt + 'conditional sequence flow'),
			this.createEdgeTemplateEntry(s4 + 'startArrow=dash;startFill=0;endSize=6;startSize=6;', ew, eh, '', 'Default Sequence Flow', null, dt + 'default sequence flow'),
			this.createEdgeTemplateEntry('dashed=1;dashPattern=8 4;endArrow=blockThin;endFill=1;startArrow=oval;startFill=0;endSize=6;startSize=4;html=1;', ew, eh, '', 'Message Flow', null, dt + 'message flow'),
			
			this.addEntry('edge shape symbol message mail email initiating message flow with decorator', mxUtils.bind(this, function()
			{
				var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=blockThin;html=1;labelPosition=left;verticalLabelPosition=middle;align=right;verticalAlign=middle;dashed=1;dashPattern=8 4;endFill=0;startArrow=oval;startFill=0;endSize=6;startSize=4;');
				edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
				edge.geometry.setTerminalPoint(new mxPoint(ew, eh), false);
				edge.geometry.relative = true;
				edge.edge = true;
				
		    	var cell = new mxCell('', new mxGeometry(0, 0, 24, 16), 'shape=message;html=1;outlineConnect=0;labelPosition=left;verticalLabelPosition=middle;align=right;verticalAlign=middle;spacingRight=5;labelBackgroundColor=#ffffff;');
		    	cell.geometry.relative = true;
		    	cell.vertex = true;
		    	cell.geometry.offset = new mxPoint(8, -8);
		    	edge.insert(cell);

				return this.createEdgeTemplateFromCells([edge], ew, eh, 'Initiating Message Flow with Decorator');
			})),
					
			this.addEntry('edge shape symbol message mail email non initiating message flow with decorator', mxUtils.bind(this, function()
			{
				var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=blockThin;html=1;labelPosition=left;verticalLabelPosition=middle;align=right;verticalAlign=middle;dashed=1;dashPattern=8 4;endFill=0;startArrow=oval;startFill=0;endSize=6;startSize=4;');
				edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
				edge.geometry.setTerminalPoint(new mxPoint(ew, eh), false);
				edge.geometry.relative = true;
				edge.edge = true;
				
		    	var cell = new mxCell('', new mxGeometry(0, 0, 24, 16), 'shape=message;html=1;outlineConnect=0;labelPosition=left;verticalLabelPosition=middle;align=right;verticalAlign=middle;spacingRight=5;labelBackgroundColor=#ffffff;fillColor=#C0C0C0;');
		    	cell.geometry.relative = true;
		    	cell.vertex = true;
		    	cell.geometry.offset = new mxPoint(8, -8);
		    	edge.insert(cell);

				return this.createEdgeTemplateFromCells([edge], ew, eh, 'Non-Initiating Message Flow with Decorator');
			}))
		];
			
		this.addPalette('bpmn2General', 'BPMN 2.0 \ General', false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};