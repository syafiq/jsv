function(H,N,P,O){var V=k.model,p=null;V.beginUpdate();try{if(p=I.apply(this,arguments),c(H))for(var B=0;B<p.length;B++)if(V.isEdge(p[B])&&null==V.getTerminal(p[B],!0)){V.setTerminal(p[B],H,!0);var L=k.getCellGeometry(p[B]);L.points=null;null!=L.getTerminalPoint(!0)&&L.setTerminalPoint(null,!0)}}finally{V.endUpdate()}return p}}var G={88:g.actions.get("selectChildren"),84:g.actions.get("selectSubtree"),80:g.actions.get("selectParent"),83:g.actions.get("selectSiblings")},U=g.onKeyDown;g.onKeyDown=function(H){try{if(k.isEnabled()&&
!k.isEditing()&&c(k.getSelectionCell())&&1==k.getSelectionCount()){var N=null;0<k.getIncomingTreeEdges(k.getSelectionCell()).length&&(9==H.which?N=mxEvent.isShiftDown(H)?z(k.getSelectionCell()):A(k.getSelectionCell()):13==H.which&&(N=C(k.getSelectionCell(),!mxEvent.isShiftDown(H))));if(null!=N&&0<N.length)1==N.length&&k.model.isEdge(N[0])?k.setSelectionCell(k.model.getTerminal(N[0],!1)):k.setSelectionCell(N[N.length-1]),null!=g.hoverIcons&&g.hoverIcons.update(k.view.getState(k.getSelectionCell())),
k.startEditingAtCell(k.getSelectionCell()),mxEvent.consume(H);else if(mxEvent.isAltDown(H)&&mxEvent.isShiftDown(H)){var P=G[H.keyCode];null!=P&&(P.funct(H),mxEvent.consume(H))}else 37==H.keyCode?(d(k.getSelectionCell(),mxConstants.DIRECTION_WEST),mxEvent.consume(H)):38==H.keyCode?(d(k.getSelectionCell(),mxConstants.DIRECTION_NORTH),mxEvent.consume(H)):39==H.keyCode?(d(k.getSelectionCell(),mxConstants.DIRECTION_EAST),mxEvent.consume(H)):40==H.keyCode&&(d(k.getSelectionCell(),mxConstants.DIRECTION_SOUTH),
mxEvent.consume(H))}}catch(O){g.handleError(O)}mxEvent.isConsumed(H)||U.apply(this,arguments)};var q=k.connectVertex;k.connectVertex=function(H,N,P,O,V,p,B){var L=k.getIncomingTreeEdges(H);if(c(H)){var Q=y(H),S=Q==mxConstants.DIRECTION_EAST||Q==mxConstants.DIRECTION_WEST,R=N==mxConstants.DIRECTION_EAST||N==mxConstants.DIRECTION_WEST;return Q==N||0==L.length?A(H,N):S==R?z(H):C(H,N!=mxConstants.DIRECTION_NORTH&&N!=mxConstants.DIRECTION_WEST)}return q.apply(this,arguments)};k.getSubtree=function(H){var N=
[H];!l(H)&&!c(H)||t(H)||k.traverse(H,!0,function(P,O){var V=null!=O&&k.isTreeEdge(O);V&&0>mxUtils.indexOf(N,O)&&N.push(O);(null==O||V)&&0>mxUtils.indexOf(N,P)&&N.push(P);return null==O||V});return N};var v=mxVertexHandler.prototype.init;mxVertexHandler.prototype.init=function(){v.apply(this,arguments);(l(this.state.cell)||c(this.state.cell))&&!t(this.state.cell)&&0<this.graph.getOutgoingTreeEdges(this.state.cell).length&&(this.moveHandle=mxUtils.createImage(Editor.moveImage),this.moveHandle.setAttribute("title",
"Move Subtree"),this.moveHandle.style.position="absolute",this.moveHandle.style.cursor="pointer",this.moveHandle.style.width="24px",this.moveHandle.style.height="24px",this.graph.container.appendChild(this.moveHandle),mxEvent.addGestureListeners(this.moveHandle,mxUtils.bind(this,function(H){this.graph.graphHandler.start(this.state.cell,mxEvent.getClientX(H),mxEvent.getClientY(H),this.graph.getSubtree(this.state.cell));this.graph.graphHandler.cellWasClicked=!0;this.graph.isMouseTrigger=mxEvent.isMouseEvent(H);
this.graph.isMouseDown=!0;g.hoverIcons.reset();mxEvent.consume(H)})))};var E=mxVertexHandler.prototype.redrawHandles;mxVertexHandler.prototype.redrawHandles=function(){E.apply(this,arguments);null!=this.moveHandle&&(this.moveHandle.style.left=this.state.x+this.state.width+(40>this.state.width?10:0)+2+"px",this.moveHandle.style.top=this.state.y+this.state.height+(40>this.state.height?10:0)+2+"px")};var K=mxVertexHandler.prototype.setHandlesVisible;mxVertexHandler.prototype.setHandlesVisible=function(H){K.apply(this,
arguments);null!=this.moveHandle&&(this.moveHandle.style.display=H?"":"none")};var M=mxVertexHandler.prototype.destroy;mxVertexHandler.prototype.destroy=function(H,N){M.apply(this,arguments);null!=this.moveHandle&&(this.moveHandle.parentNode.removeChild(this.moveHandle),this.moveHandle=null)}};if("undefined"!==typeof Sidebar){var f=Sidebar.prototype.createAdvancedShapes;Sidebar.prototype.createAdvancedShapes=function(){var c=f.apply(this,arguments),l=this.graph;return c.concat([this.addEntry("tree container",
function(){var m=new mxCell("Tree Container",new mxGeometry(0,0,400,320),"swimlane;startSize=20;horizontal=1;containerType=tree;");m.vertex=!0;var t=new mxCell("Parent",new mxGeometry(140,60,120,40),'whiteSpace=wrap;html=1;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');t.vertex=!0;var y=new mxCell("Child",new mxGeometry(140,140,120,40),'whiteSpace=wrap;html=1;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
y.vertex=!0;var C=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");C.geometry.relative=!0;C.edge=!0;t.insertEdge(C,!0);y.insertEdge(C,!1);m.insert(C);m.insert(t);m.insert(y);return sb.createVertexTemplateFromCells([m],m.geometry.width,m.geometry.height,m.value)}),this.addEntry("tree mindmap mindmaps central idea branch topic",function(){var m=new mxCell("Mindmap",new mxGeometry(0,0,420,126),"swimlane;startSize=20;horizontal=1;containerType=tree;");
m.vertex=!0;var t=new mxCell("Central Idea",new mxGeometry(160,60,100,40),'ellipse;whiteSpace=wrap;html=1;align=center;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');t.vertex=!0;var y=new mxCell("Topic",new mxGeometry(320,40,80,20),'whiteSpace=wrap;html=1;rounded=1;arcSize=50;align=center;verticalAlign=middle;strokeWidth=1;autosize=1;spacing=4;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
y.vertex=!0;var C=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");C.geometry.relative=!0;C.edge=!0;t.insertEdge(C,!0);y.insertEdge(C,!1);var z=new mxCell("Branch",new mxGeometry(320,80,72,26),'whiteSpace=wrap;html=1;shape=partialRectangle;top=0;left=0;bottom=1;right=0;points=[[0,1],[1,1]];fillColor=none;align=center;verticalAlign=bottom;routingCenterY=0.5;snapToPoint=1;autosize=1;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
z.vertex=!0;var A=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");A.geometry.relative=!0;A.edge=!0;t.insertEdge(A,!0);z.insertEdge(A,!1);var J=new mxCell("Topic",new mxGeometry(20,40,80,20),'whiteSpace=wrap;html=1;rounded=1;arcSize=50;align=center;verticalAlign=middle;strokeWidth=1;autosize=1;spacing=4;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
J.vertex=!0;var d=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");d.geometry.relative=!0;d.edge=!0;t.insertEdge(d,!0);J.insertEdge(d,!1);var g=new mxCell("Branch",new mxGeometry(20,80,72,26),'whiteSpace=wrap;html=1;shape=partialRectangle;top=0;left=0;bottom=1;right=0;points=[[0,1],[1,1]];fillColor=none;align=center;verticalAlign=bottom;routingCenterY=0.5;snapToPoint=1;autosize=1;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
g.vertex=!0;var k=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");k.geometry.relative=!0;k.edge=!0;t.insertEdge(k,!0);g.insertEdge(k,!1);m.insert(C);m.insert(A);m.insert(d);m.insert(k);m.insert(t);m.insert(y);m.insert(z);m.insert(J);m.insert(g);return sb.createVertexTemplateFromCells([m],m.geometry.width,m.geometry.height,m.value)}),this.addEntry("tree mindmap mindmaps central idea",function(){var m=new mxCell("Central Idea",
new mxGeometry(0,0,100,40),'ellipse;whiteSpace=wrap;html=1;align=center;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};treeFolding=1;treeMoving=1;');m.vertex=!0;return sb.createVertexTemplateFromCells([m],m.geometry.width,m.geometry.height,m.value)}),this.addEntry("tree mindmap mindmaps branch",function(){var m=new mxCell("Branch",new mxGeometry(0,0,80,20),'whiteSpace=wrap;html=1;shape=partialRectangle;top=0;left=0;bottom=1;right=0;points=[[0,1],[1,1]];fillColor=none;align=center;verticalAlign=bottom;routingCenterY=0.5;snapToPoint=1;recursiveResize=0;autosize=1;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
m.vertex=!0;var t=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");t.geometry.setTerminalPoint(new mxPoint(-40,40),!0);t.geometry.relative=!0;t.edge=!0;m.insertEdge(t,!1);return sb.createVertexTemplateFromCells([m,t],m.geometry.width,m.geometry.height,m.value)}),this.addEntry("tree mindmap mindmaps sub topic",function(){var m=new mxCell("Sub Topic",new mxGeometry(0,0,72,26),'whiteSpace=wrap;html=1;rounded=1;arcSize=50;align=center;verticalAlign=middle;strokeWidth=1;autosize=1;spacing=4;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
m.vertex=!0;var t=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");t.geometry.setTerminalPoint(new mxPoint(-40,40),!0);t.geometry.relative=!0;t.edge=!0;m.insertEdge(t,!1);return sb.createVertexTemplateFromCells([m,t],m.geometry.width,m.geometry.height,m.value)}),this.addEntry("tree orgchart organization division",function(){var m=new mxCell("Orgchart",new mxGeometry(0,0,280,220),'swimlane;startSize=20;horizontal=1;containerType=tree;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
m.vertex=!0;var t=new mxCell("Organization",new mxGeometry(80,40,120,60),'whiteSpace=wrap;html=1;align=center;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');l.setAttributeForCell(t,"treeRoot","1");t.vertex=!0;var y=new mxCell("Division",new mxGeometry(20,140,100,60),'whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
y.vertex=!0;var C=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");C.geometry.relative=!0;C.edge=!0;t.insertEdge(C,!0);y.insertEdge(C,!1);var z=new mxCell("Division",new mxGeometry(160,140,100,60),'whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');z.vertex=!0;var A=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");
A.geometry.relative=!0;A.edge=!0;t.insertEdge(A,!0);z.insertEdge(A,!1);m.insert(C);m.insert(A);m.insert(t);m.insert(y);m.insert(z);return sb.createVertexTemplateFromCells([m],m.geometry.width,m.geometry.height,m.value)}),this.addEntry("tree root",function(){var m=new mxCell("Organization",new mxGeometry(0,0,120,60),'whiteSpace=wrap;html=1;align=center;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');l.setAttributeForCell(m,"treeRoot",
"1");m.vertex=!0;return sb.createVertexTemplateFromCells([m],m.geometry.width,m.geometry.height,m.value)}),this.addEntry("tree division",function(){var m=new mxCell("Division",new mxGeometry(20,40,100,60),'whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');m.vertex=!0;var t=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");
t.geometry.setTerminalPoint(new mxPoint(0,0),!0);t.geometry.relative=!0;t.edge=!0;m.insertEdge(t,!1);return sb.createVertexTemplateFromCells([m,t],m.geometry.width,m.geometry.height,m.value)}),this.addEntry("tree sub sections",function(){var m=new mxCell("Sub Section",new mxGeometry(0,0,100,60),"whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;");m.vertex=!0;var t=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=none;rounded=0;targetPortConstraint=eastwest;sourcePortConstraint=northsouth;");
t.geometry.setTerminalPoint(new mxPoint(110,-40),!0);t.geometry.relative=!0;t.edge=!0;m.insertEdge(t,!1);var y=new mxCell("Sub Section",new mxGeometry(120,0,100,60),"whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;");y.vertex=!0;var C=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=none;rounded=0;targetPortConstraint=eastwest;sourcePortConstraint=northsouth;");C.geometry.setTerminalPoint(new mxPoint(110,-40),!0);C.geometry.relative=
!0;C.edge=!0;y.insertEdge(C,!1);return sb.createVertexTemplateFromCells([t,C,m,y],220,60,"Sub Sections")})])}}})();EditorUi.windowed="0"!=urlParams.windows;