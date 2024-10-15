EditorUi.prototype.installShapePicker=function(){var b=this.editor.graph,e=this;b.addListener(mxEvent.FIRE_MOUSE_EVENT,mxUtils.bind(this,function(R,G){"mouseDown"==G.getProperty("eventName")&&e.hideShapePicker()}));var k=mxUtils.bind(this,function(){e.hideShapePicker(!0)});b.addListener("wheel",k);b.addListener(mxEvent.ESCAPE,k);b.view.addListener(mxEvent.SCALE,k);b.view.addListener(mxEvent.SCALE_AND_TRANSLATE,k);b.getSelectionModel().addListener(mxEvent.CHANGE,k);var l=b.popupMenuHandler.isMenuShowing;
b.popupMenuHandler.isMenuShowing=function(){return l.apply(this,arguments)||null!=e.shapePicker};var C=b.dblClick;b.dblClick=function(R,G){if(this.isEnabled())if(null!=G||null==e.sidebar||mxEvent.isShiftDown(R)||b.isCellLocked(b.getDefaultParent()))C.apply(this,arguments);else{var L=mxUtils.convertPoint(this.container,mxEvent.getClientX(R),mxEvent.getClientY(R));mxEvent.consume(R);window.setTimeout(mxUtils.bind(this,function(){e.showShapePicker(L.x,L.y)}),30)}};if(null!=this.hoverIcons){this.hoverIcons.addListener("reset",
k);var p=this.hoverIcons.drag;this.hoverIcons.drag=function(){e.hideShapePicker();p.apply(this,arguments)};var D=this.hoverIcons.execute;this.hoverIcons.execute=function(R,G,L){var Q=L.getEvent();this.graph.isCloneEvent(Q)||mxEvent.isShiftDown(Q)?D.apply(this,arguments):this.graph.connectVertex(R.cell,G,this.graph.defaultEdgeLength,Q,null,null,mxUtils.bind(this,function(d,f,g){var v=b.getCompositeParent(R.cell);d=b.getCellGeometry(v);for(L.consume();null!=v&&b.model.isVertex(v)&&null!=d&&d.relative;)cell=
v,v=b.model.getParent(cell),d=b.getCellGeometry(v);window.setTimeout(mxUtils.bind(this,function(){e.showShapePicker(L.getGraphX(),L.getGraphY(),v,mxUtils.bind(this,function(x){g(x);null!=e.hoverIcons&&e.hoverIcons.update(b.view.getState(x))}),G)}),30)}),mxUtils.bind(this,function(d){this.graph.selectCellsForConnectVertex(d,Q,this)}))};var M=null;this.hoverIcons.addListener("focus",mxUtils.bind(this,function(R,G){null!=M&&window.clearTimeout(M);M=window.setTimeout(mxUtils.bind(this,function(){var L=
G.getProperty("arrow"),Q=G.getProperty("direction"),d=G.getProperty("event");L=L.getBoundingClientRect();var f=mxUtils.getOffset(b.container),g=b.container.scrollLeft+L.x-f.x;f=b.container.scrollTop+L.y-f.y;var v=b.getCompositeParent(null!=this.hoverIcons.currentState?this.hoverIcons.currentState.cell:null),x=e.showShapePicker(g,f,v,mxUtils.bind(this,function(A){null!=A&&b.connectVertex(v,Q,b.defaultEdgeLength,d,!0,!0,function(J,H,O){O(A);null!=e.hoverIcons&&e.hoverIcons.update(b.view.getState(A))},
function(J){b.selectCellsForConnectVertex(J)},d,this.hoverIcons)}),Q,!0);this.centerShapePicker(x,L,g,f,Q);mxUtils.setOpacity(x,30);mxEvent.addListener(x,"mouseenter",function(){mxUtils.setOpacity(x,100)});mxEvent.addListener(x,"mouseleave",function(){e.hideShapePicker()})}),Editor.shapePickerHoverDelay)}));this.hoverIcons.addListener("blur",mxUtils.bind(this,function(R,G){null!=M&&window.clearTimeout(M)}))}};