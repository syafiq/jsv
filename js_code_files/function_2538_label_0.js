null!=U&&(aa=mxEvent.CUSTOM_HANDLE-U.customHandles.length+1,U.start(L.getGraphX(),L.getGraphY(),aa),L.consume())),O=this.view.getState(this.model.getParent(O.cell))}}}));this.addMouseListener({mouseDown:function(L,V){},mouseMove:mxUtils.bind(this,function(L,V){L=this.selectionCellsHandler.handlers.map;for(var O in L)if(null!=L[O].index)return;if(this.isEnabled()&&!this.panningHandler.isActive()&&!mxEvent.isAltDown(V.getEvent())){var U=this.tolerance;if(null!=h&&null!=u&&null!=n){if(O=u,Math.abs(h.x-
V.getGraphX())>U||Math.abs(h.y-V.getGraphY())>U){var J=this.selectionCellsHandler.getHandler(O.cell);null==J&&this.model.isEdge(O.cell)&&(J=this.createHandler(O));if(null!=J&&null!=J.bends&&0<J.bends.length){L=J.getHandleForEvent(n);var aa=this.view.getEdgeStyle(O);U=aa==mxEdgeStyle.EntityRelation;r||m!=mxEvent.LABEL_HANDLE||(L=m);if(U&&0!=L&&L!=J.bends.length-1&&L!=mxEvent.LABEL_HANDLE)!U||null==O.visibleSourceState&&null==O.visibleTargetState||(this.graphHandler.reset(),V.consume());else if(L==
mxEvent.LABEL_HANDLE||0==L||null!=O.visibleSourceState||L==J.bends.length-1||null!=O.visibleTargetState)U||L==mxEvent.LABEL_HANDLE||(U=O.absolutePoints,null!=U&&(null==aa&&null==L||aa==mxEdgeStyle.OrthConnector)&&(L=m,null==L&&(L=new mxRectangle(h.x,h.y),L.grow(mxEdgeHandler.prototype.handleImage.width/2),mxUtils.contains(L,U[0].x,U[0].y)?L=0:mxUtils.contains(L,U[U.length-1].x,U[U.length-1].y)?L=J.bends.length-1:null!=aa&&(2==U.length||3==U.length&&(0==Math.round(U[0].x-U[1].x)&&0==Math.round(U[1].x-
U[2].x)||0==Math.round(U[0].y-U[1].y)&&0==Math.round(U[1].y-U[2].y)))?L=2:(L=mxUtils.findNearestSegment(O,h.x,h.y),L=null==aa?mxEvent.VIRTUAL_HANDLE-L:L+1))),null==L&&(L=mxEvent.VIRTUAL_HANDLE)),J.start(V.getGraphX(),V.getGraphX(),L),V.consume(),this.graphHandler.reset()}null!=J&&(this.selectionCellsHandler.isHandlerActive(J)?this.isCellSelected(O.cell)||(this.selectionCellsHandler.handlers.put(O.cell,J),this.selectCellForEvent(O.cell,V.getEvent())):this.isCellSelected(O.cell)||J.destroy());r=!1;
h=n=u=m=null}}else if(O=V.getState(),null!=O&&this.isCellEditable(O.cell)){J=null;if(this.model.isEdge(O.cell)){if(L=new mxRectangle(V.getGraphX(),V.getGraphY()),L.grow(mxEdgeHandler.prototype.handleImage.width/2),U=O.absolutePoints,null!=U)if(null!=O.text&&null!=O.text.boundingBox&&mxUtils.contains(O.text.boundingBox,V.getGraphX(),V.getGraphY()))J="move";else if(mxUtils.contains(L,U[0].x,U[0].y)||mxUtils.contains(L,U[U.length-1].x,U[U.length-1].y))J="pointer";else if(null!=O.visibleSourceState||
null!=O.visibleTargetState)L=this.view.getEdgeStyle(O),J="crosshair",L!=mxEdgeStyle.EntityRelation&&this.isOrthogonal(O)&&(V=mxUtils.findNearestSegment(O,V.getGraphX(),V.getGraphY()),V<U.length-1&&0<=V&&(J=0==Math.round(U[V].x-U[V+1].x)?"col-resize":"row-resize"))}else if(!mxEvent.isControlDown(V.getEvent())){U=mxShape.prototype.svgStrokeTolerance/2;L=new mxRectangle(V.getGraphX(),V.getGraphY());L.grow(U);if(this.isTableCell(O.cell)&&(V=this.model.getParent(O.cell),U=this.model.getParent(V),!this.isCellSelected(U)))if(mxUtils.intersects(L,
new mxRectangle(O.x,O.y-2,O.width,4))&&this.model.getChildAt(U,0)!=V||mxUtils.intersects(L,new mxRectangle(O.x,O.y+O.height-2,O.width,4)))J="row-resize";else if(mxUtils.intersects(L,new mxRectangle(O.x-2,O.y,4,O.height))&&this.model.getChildAt(V,0)!=O.cell||mxUtils.intersects(L,new mxRectangle(O.x+O.width-2,O.y,4,O.height)))J="col-resize";for(V=O;null==J&&null!=V&&(this.isTableCell(V.cell)||this.isTableRow(V.cell)||this.isTable(V.cell));)this.isSwimlane(V.cell)&&(U=this.getActualStartSize(V.cell),
aa=this.view.scale,(0<U.x||0<U.width)&&mxUtils.intersects(L,new mxRectangle(V.x+(U.x-U.width-1)*aa+(0==U.x?V.width*aa:0),V.y,1,V.height))?J="col-resize":(0<U.y||0<U.height)&&mxUtils.intersects(L,new mxRectangle(V.x,V.y+(U.y-U.height-1)*aa+(0==U.y?V.height:0),V.width,1))&&(J="row-resize")),V=this.view.getState(this.model.getParent(V.cell))}null!=J&&O.setCursor(J)}}}),mouseUp:mxUtils.bind(this,function(L,V){m=h=n=u=null})})}this.cellRenderer.minSvgStrokeWidth=.1;this.cellRenderer.getLabelValue=function(L){var V=