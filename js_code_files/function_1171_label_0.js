	Sidebar.prototype.addBPMN2ChoreographiesPalette = function(gn, r, sb)
	{
		var dt = 'bpmn business process model notation choreography ';
		
		var fns =
		[
			this.addEntry(dt + 'choreography task', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Choreography Task');
			}),

			this.addEntry(dt + 'choreography task loop', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopStandard=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Choreography Task, Loop');
			}),

			this.addEntry(dt + 'choreography task sequential multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopMultiSeq=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Choreography Task, Sequential Multi Instance');
			}),

			this.addEntry(dt + 'choreography task parallel multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopMultiParallel=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Choreography Task, Parallel Multi Instance');
			}),

			this.addEntry(dt + 'sub choreography collapsed', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopSub=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Sub-Choreography, Collapsed');
			}),

			this.addEntry(dt + 'sub choreography loop collapsed', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopSub=1;isLoopStandard=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Sub-Choreography, Loop, Collapsed');
			}),

			this.addEntry(dt + 'sub choreography sequential multi instance collapsed', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopSub=1;isLoopMultiSeq=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Sub-Choreography, Sequential Multi Instance, Collapsed');
			}),

			this.addEntry(dt + 'sub choreography parallel multi instance collapsed', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopSub=1;isLoopMultiParallel=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Sub-Choreography, Parallel Multi Instance, Collapsed');
			}),

			this.addEntry(dt + 'sub choreography expanded', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 400, 200), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 400, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 400, 160), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;verticalAlign=top;align=left;spacingLeft=5;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 400, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Sub-Choreography, Expanded');
			}),

			this.addEntry(dt + 'call choreography activity calling global task', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
//				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;');
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'bzzzzt');
			}),

			this.addEntry(dt + 'call choreography activity calling global task', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling Global');
			}),

			this.addEntry(dt + 'call choreography activity calling global task loop', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopStandard=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling Global, Loop');
			}),

			this.addEntry(dt + 'call choreography activity calling global task sequential multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopMultiSeq=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling Global, Sequential Multi Instance');
			}),

			this.addEntry(dt + 'call choreography activity calling global task parallel multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopMultiParallel=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling Global, Parallel Multi Instance');
			}),

			this.addEntry(dt + 'call choreography activity calling', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopSub=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling a Choreography');
			}),

			this.addEntry(dt + 'call choreography activity calling loop', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopSub=1;isLoopStandard=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling a Choreography, Loop');
			}),

			this.addEntry(dt + 'call choreography activity calling sequential multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopSub=1;isLoopMultiSeq=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling a Choreography, Sequential Multi Instance');
			}),

			this.addEntry(dt + 'call choreography activity calling parallel multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopSub=1;isLoopMultiParallel=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling a Choreography, Parallel Multi Instance');
			}),
			
			this.addEntry(dt + 'choreography task', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Choreography Task');
			}),

			this.addEntry(dt + 'choreography task loop', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopStandard=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Choreography Task, Loop');
			}),

			this.addEntry(dt + 'choreography task sequential multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopMultiSeq=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Choreography Task, Sequential Multi Instance');
			}),

			this.addEntry(dt + 'choreography task parallel multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopMultiParallel=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Choreography Task, Parallel Multi Instance');
			}),

			this.addEntry(dt + 'sub choreography collapsed', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopSub=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Sub-Choreography, Collapsed');
			}),

			this.addEntry(dt + 'sub choreography loop collapsed', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopSub=1;isLoopStandard=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Sub-Choreography, Loop, Collapsed');
			}),

			this.addEntry(dt + 'sub choreography sequential multi instance collapsed', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopSub=1;isLoopMultiSeq=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Sub-Choreography, Sequential Multi Instance, Collapsed');
			}),

			this.addEntry(dt + 'sub choreography parallel multi instance collapsed', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;taskMarker=abstract;part=1;isLoopSub=1;isLoopMultiParallel=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Sub-Choreography, Parallel Multi Instance, Collapsed');
			}),

			this.addEntry(dt + 'sub choreography expanded', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 400, 200), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 400, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 400, 160), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;verticalAlign=top;align=left;spacingLeft=5;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 400, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Sub-Choreography, Expanded');
			}),

			this.addEntry(dt + 'call choreography activity calling global task', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling Global');
			}),

			this.addEntry(dt + 'call choreography activity calling global task loop', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopStandard=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling Global, Loop');
			}),

			this.addEntry(dt + 'call choreography activity calling global task sequential multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopMultiSeq=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling Global, Sequential Multi Instance');
			}),

			this.addEntry(dt + 'call choreography activity calling global task parallel multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopMultiParallel=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling Global, Parallel Multi Instance');
			}),

			this.addEntry(dt + 'call choreography activity calling', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopSub=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling a Choreography');
			}),

			this.addEntry(dt + 'call choreography activity calling loop', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopSub=1;isLoopStandard=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling a Choreography, Loop');
			}),

			this.addEntry(dt + 'call choreography activity calling sequential multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopSub=1;isLoopMultiSeq=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling a Choreography, Sequential Multi Instance');
			}),

			this.addEntry(dt + 'call choreography activity calling parallel multi instance', function()
		   	{
			    var bg = new mxCell('', new mxGeometry(0, 0, 120, 100), 
				'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;');
		    	bg.vertex = true;
		    	
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;part=1;');
			    cell1.vertex = true;
		    	bg.insert(cell1);

			    var cell2 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 60), 
			    		'shape=mxgraph.bpmn.task;arcSize=0;part=1;taskMarker=abstract;isLoopSub=1;isLoopMultiParallel=1;connectable=0;whiteSpace=wrap;html=1;');
			    cell2.vertex = true;
		    	bg.insert(cell2);

			    var cell3 = new mxCell('', 
			    		new mxGeometry(0, 1, 20, 20), 
			    		'whiteSpace=wrap;connectable=0;html=1;shape=mxgraph.basic.rect;size=10;rectStyle=rounded;topRightStyle=square;topLeftStyle=square;part=1;');
			    cell3.vertex = true;
			    cell3.geometry.relative = false;
		    	bg.insert(cell3);

			   	return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, 'Call Choreography calling a Choreography, Parallel Multi Instance');
			}),

			this.createVertexTemplateEntry('whiteSpace=wrap;shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;html=1;', 120, 20, '', 'Participant, Initiating, Top', null, null, dt + 'initiating participant top'),

			this.addEntry(dt + 'initiating participant top with decorator', function()
		   	{
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 60, 120, 20), 
			    		'shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;whiteSpace=wrap;html=1;');
			    cell1.vertex = true;

			    var cell2 = new mxCell('', 
			    		new mxGeometry(40, 0, 40, 30), 
			    		'shape=message;html=1;');
			    cell2.vertex = true;
			    
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=orthogonalEdgeStyle;html=1;elbow=horizontal;endArrow=none;labelBackgroundColor=none;endSize=12;endFill=0;dashed=1;dashPattern=1 2;exitX=0.5;exitY=0;rounded=0;');
		    	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cell1.insertEdge(edge1, true);
			   	cell2.insertEdge(edge1, false);

			   	return sb.createVertexTemplateFromCells([cell1, cell2, edge1], 120, 80, 'Participant, Initiating, Top with Decorator');
			}),
			
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=square;whiteSpace=wrap;html=1;', 120, 20, '', 'Additional Participant, Initiating', null, null, dt + 'initiating additional participant'),
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;isLoopSub=0;topLeftStyle=square;topRightStyle=square;whiteSpace=wrap;html=1;', 120, 20, '', 'Participant, Initiating, Bottom', null, null, dt + 'initiating participant bottom'),

			this.addEntry(dt + 'initiating participant bottom with decorator', function()
		   	{
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;isLoopSub=0;topLeftStyle=square;topRightStyle=square;whiteSpace=wrap;html=1;');
			    cell1.vertex = true;

			    var cell2 = new mxCell('', 
			    		new mxGeometry(40, 50, 40, 30), 
			    		'shape=message;html=1;');
			    cell2.vertex = true;
			    
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=orthogonalEdgeStyle;html=1;elbow=horizontal;endArrow=none;labelBackgroundColor=none;endSize=12;endFill=0;dashed=1;dashPattern=1 2;exitX=0.5;exitY=1;rounded=0;');
		    	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cell1.insertEdge(edge1, true);
			   	cell2.insertEdge(edge1, false);

			   	return sb.createVertexTemplateFromCells([cell1, cell2, edge1], 120, 80, 'Participant, Initiating, Bottom with Decorator');
			}),
			
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;verticalAlign=top;isLoopMultiParallel=1;whiteSpace=wrap;html=1;', 120, 40, '', 'Participant, Initiating, Multi-Instance, Top', null, null, dt + 'initiating participant bottom'),

			this.addEntry(dt + 'initiating participant multi instance top with decorator', function()
		   	{
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 60, 120, 40), 
			    		'shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;verticalAlign=top;isLoopMultiParallel=1;whiteSpace=wrap;html=1;');
			    cell1.vertex = true;

			    var cell2 = new mxCell('', 
			    		new mxGeometry(40, 0, 40, 30), 
			    		'shape=message;html=1;');
			    cell2.vertex = true;
			    
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=orthogonalEdgeStyle;html=1;elbow=horizontal;endArrow=none;labelBackgroundColor=none;endSize=12;endFill=0;dashed=1;dashPattern=1 2;exitX=0.5;exitY=0;rounded=0;');
		    	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cell1.insertEdge(edge1, true);
			   	cell2.insertEdge(edge1, false);

			   	return sb.createVertexTemplateFromCells([cell1, cell2, edge1], 120, 100, 'Participant, Initiating, Multi-Instance Top with Decorator');
			}),
			
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=square;verticalAlign=top;isLoopMultiParallel=1;whiteSpace=wrap;html=1;', 120, 40, '', 'Additional Participant, Initiating, Multi-Instance, Bottom', null, null, dt + 'initiating additional participant multi instance bottom'),
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;verticalAlign=top;isLoopMultiParallel=1;topLeftStyle=square;topRightStyle=square;whiteSpace=wrap;html=1;', 120, 40, '', 'Participant, Initiating, Multi-Instance, Bottom', null, null, dt + 'initiating participant multi instance bottom'),

			this.addEntry(dt + 'initiating participant multi instance bottom with decorator', function()
		   	{
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 40), 
			    		'shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;topLeftStyle=square;topRightStyle=square;verticalAlign=top;isLoopMultiParallel=1;whiteSpace=wrap;html=1;');
			    cell1.vertex = true;

			    var cell2 = new mxCell('', 
			    		new mxGeometry(40, 70, 40, 30), 
			    		'shape=message;html=1;');
			    cell2.vertex = true;
			    
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=orthogonalEdgeStyle;html=1;elbow=horizontal;endArrow=none;labelBackgroundColor=none;endSize=12;endFill=0;dashed=1;dashPattern=1 2;exitX=0.5;exitY=1;rounded=0;');
		    	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cell1.insertEdge(edge1, true);
			   	cell2.insertEdge(edge1, false);

			   	return sb.createVertexTemplateFromCells([cell1, cell2, edge1], 120, 100, 'Participant, Initiating, Multi-Instance, Bottom with Decorator');
			}),
			
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;', 120, 20, '', 'Participant, Non-Initiating, Top', null, null, dt + 'non initiating participant top'),
			
			this.addEntry(dt + 'non initiating participant top with decorator', function()
		   	{
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 60, 120, 20), 
			    		'shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;');
			    cell1.vertex = true;

			    var cell2 = new mxCell('', 
			    		new mxGeometry(40, 0, 40, 30), 
			    		'shape=message;fillColor=#C0C0C0;html=1;');
			    cell2.vertex = true;
			    
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=orthogonalEdgeStyle;html=1;elbow=horizontal;endArrow=none;labelBackgroundColor=none;endSize=12;endFill=0;dashed=1;dashPattern=1 2;exitX=0.5;exitY=0;rounded=0;');
		    	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cell1.insertEdge(edge1, true);
			   	cell2.insertEdge(edge1, false);

			   	return sb.createVertexTemplateFromCells([cell1, cell2, edge1], 120, 80, 'Participant, Non-Initiating, Top with Decorator');
			}),
			
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;', 120, 20, '', 'Additional Participant, Non-Initiating', null, null, dt + 'non initiating additional participant'),
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;isLoopSub=0;topLeftStyle=square;topRightStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;', 120, 20, '', 'Participant, Non-Initiating, Bottom', null, null, dt + 'non initiating participant bottom'),
			
			this.addEntry(dt + 'non initiating participant bottom with decorator', function()
		   	{
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 20), 
			    		'shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;isLoopSub=0;topLeftStyle=square;topRightStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;');
			    cell1.vertex = true;

			    var cell2 = new mxCell('', 
			    		new mxGeometry(40, 50, 40, 30), 
			    		'shape=message;fillColor=#C0C0C0;html=1;');
			    cell2.vertex = true;
			    
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=orthogonalEdgeStyle;html=1;elbow=horizontal;endArrow=none;labelBackgroundColor=none;endSize=12;endFill=0;dashed=1;dashPattern=1 2;exitX=0.5;exitY=1;rounded=0;');
		    	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cell1.insertEdge(edge1, true);
			   	cell2.insertEdge(edge1, false);

			   	return sb.createVertexTemplateFromCells([cell1, cell2, edge1], 120, 80, 'Participant, Non-Initiating, Bottom with Decorator');
			}),
			
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;verticalAlign=top;isLoopMultiParallel=1;fillColor=#C0C0C0;whiteSpace=wrap;html=1;', 120, 40, '', 'Participant, Non-Initiating, Multi-Instance, Top', null, null, dt + 'initiating participant bottom'),
			
			this.addEntry(dt + 'non initiating participant multi instance top with decorator', function()
		   	{
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 60, 120, 40), 
			    		'shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;verticalAlign=top;isLoopMultiParallel=1;fillColor=#C0C0C0;whiteSpace=wrap;html=1;');
			    cell1.vertex = true;

			    var cell2 = new mxCell('', 
			    		new mxGeometry(40, 0, 40, 30), 
			    		'shape=message;fillColor=#C0C0C0;html=1;');
			    cell2.vertex = true;
			    
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=orthogonalEdgeStyle;html=1;elbow=horizontal;endArrow=none;labelBackgroundColor=none;endSize=12;endFill=0;dashed=1;dashPattern=1 2;exitX=0.5;exitY=0;rounded=0;');
		    	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cell1.insertEdge(edge1, true);
			   	cell2.insertEdge(edge1, false);

			   	return sb.createVertexTemplateFromCells([cell1, cell2, edge1], 120, 100, 'Participant, Non-Initiating, Multi-Instance, Top with Decorator');
			}),
			
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=square;verticalAlign=top;isLoopMultiParallel=1;fillColor=#C0C0C0;whiteSpace=wrap;html=1;', 120, 40, '', 'Additional Participant, Non-Initiating, Multi-Instance, Bottom', null, null, dt + 'non initiating additional participant multi instance bottom'),
			this.createVertexTemplateEntry('shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;verticalAlign=top;isLoopMultiParallel=1;topLeftStyle=square;topRightStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;', 120, 40, '', 'Participant, Non-Initiating, Multi-Instance, Bottom', null, null, dt + 'non initiating participant multi instance bottom'),

			this.addEntry(dt + 'non initiating participant multi instance bottom with decorator', function()
		   	{
			    var cell1 = new mxCell('', 
			    		new mxGeometry(0, 0, 120, 40), 
			    		'shape=mxgraph.bpmn.task;part=1;taskMarker=abstract;rectStyle=rounded;topLeftStyle=square;topRightStyle=square;verticalAlign=top;isLoopMultiParallel=1;fillColor=#C0C0C0;whiteSpace=wrap;html=1;');
			    cell1.vertex = true;

			    var cell2 = new mxCell('', 
			    		new mxGeometry(40, 70, 40, 30), 
			    		'shape=message;fillColor=#C0C0C0;html=1;');
			    cell2.vertex = true;
			    
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=orthogonalEdgeStyle;html=1;elbow=horizontal;endArrow=none;labelBackgroundColor=none;endSize=12;endFill=0;dashed=1;dashPattern=1 2;exitX=0.5;exitY=1;rounded=0;');
		    	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cell1.insertEdge(edge1, true);
			   	cell2.insertEdge(edge1, false);

			   	return sb.createVertexTemplateFromCells([cell1, cell2, edge1], 120, 100, 'Participant, Non-Initiating, Multi-Instance, Bottom with Decorator');
			})
		];
			
		this.addPalette('bpmn2Choreographies', 'BPMN 2.0 \ Choreographies', false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};