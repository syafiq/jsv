Graph=function(a,b,f,e,g,d){mxGraph.call(this,a,b,f,e);this.themes=g||this.defaultThemes;this.currentEdgeStyle=mxUtils.clone(this.defaultEdgeStyle);this.currentVertexStyle=mxUtils.clone(this.defaultVertexStyle);this.standalone=null!=d?d:!1;a=this.baseUrl;b=a.indexOf("//");this.domainPathUrl=this.domainUrl="";0<b&&(b=a.indexOf("/",b+2),0<b&&(this.domainUrl=a.substring(0,b)),b=a.lastIndexOf("/"),0<b&&(this.domainPathUrl=a.substring(0,b+1)));this.isHtmlLabel=function(L){L=this.getCurrentCellStyle(L);
return null!=L?"1"==L.html||"wrap"==L[mxConstants.STYLE_WHITE_SPACE]:!1};if(this.edgeMode){var h=null,n=null,u=null,m=null,r=!1;this.addListener(mxEvent.FIRE_MOUSE_EVENT,mxUtils.bind(this,function(L,V){if("mouseDown"==V.getProperty("eventName")&&this.isEnabled()){L=V.getProperty("event");var O=L.getState();V=this.view.scale;if(!mxEvent.isAltDown(L.getEvent())&&null!=O)if(this.model.isEdge(O.cell))if(h=new mxPoint(L.getGraphX(),L.getGraphY()),r=this.isCellSelected(O.cell),u=O,n=L,null!=O.text&&null!=
O.text.boundingBox&&mxUtils.contains(O.text.boundingBox,L.getGraphX(),L.getGraphY()))m=mxEvent.LABEL_HANDLE;else{var U=this.selectionCellsHandler.getHandler(O.cell);null!=U&&null!=U.bends&&0<U.bends.length&&(m=U.getHandleForEvent(L))}else if(!this.panningHandler.isActive()&&!mxEvent.isControlDown(L.getEvent())&&(U=this.selectionCellsHandler.getHandler(O.cell),null==U||null==U.getHandleForEvent(L))){var J=new mxRectangle(L.getGraphX()-1,L.getGraphY()-1),aa=mxEvent.isTouchEvent(L.getEvent())?mxShape.prototype.svgStrokeTolerance-
1:(mxShape.prototype.svgStrokeTolerance+2)/2;U=aa+2;J.grow(aa);if(this.isTableCell(O.cell)&&!this.isCellSelected(O.cell)&&!(mxUtils.contains(O,L.getGraphX()-U,L.getGraphY()-U)&&mxUtils.contains(O,L.getGraphX()-U,L.getGraphY()+U)&&mxUtils.contains(O,L.getGraphX()+U,L.getGraphY()+U)&&mxUtils.contains(O,L.getGraphX()+U,L.getGraphY()-U))){var ja=this.model.getParent(O.cell);U=this.model.getParent(ja);if(!this.isCellSelected(U)){aa*=V;var na=2*aa;if(this.model.getChildAt(U,0)!=ja&&mxUtils.intersects(J,
new mxRectangle(O.x,O.y-aa,O.width,na))||this.model.getChildAt(ja,0)!=O.cell&&mxUtils.intersects(J,new mxRectangle(O.x-aa,O.y,na,O.height))||mxUtils.intersects(J,new mxRectangle(O.x,O.y+O.height-aa,O.width,na))||mxUtils.intersects(J,new mxRectangle(O.x+O.width-aa,O.y,na,O.height)))ja=this.selectionCellsHandler.isHandled(U),this.selectCellForEvent(U,L.getEvent()),U=this.selectionCellsHandler.getHandler(U),null!=U&&(aa=U.getHandleForEvent(L),null!=aa&&(U.start(L.getGraphX(),L.getGraphY(),aa),U.blockDelayedSelection=
!ja,L.consume()))}}for(;!L.isConsumed()&&null!=O&&(this.isTableCell(O.cell)||this.isTableRow(O.cell)||this.isTable(O.cell));)this.isSwimlane(O.cell)&&(U=this.getActualStartSize(O.cell),(0<U.x||0<U.width)&&mxUtils.intersects(J,new mxRectangle(O.x+(U.x-U.width-1)*V+(0==U.x?O.width:0),O.y,1,O.height))||(0<U.y||0<U.height)&&mxUtils.intersects(J,new mxRectangle(O.x,O.y+(U.y-U.height-1)*V+(0==U.y?O.height:0),O.width,1)))&&(this.selectCellForEvent(O.cell,L.getEvent()),U=this.selectionCellsHandler.getHandler(O.cell),
null!=U&&(aa=mxEvent.CUSTOM_HANDLE-U.customHandles.length+1,U.start(L.getGraphX(),L.getGraphY(),aa),L.consume())),O=this.view.getState(this.model.getParent(O.cell))}}}));this.addMouseListener({mouseDown:function(L,V){},mouseMove:mxUtils.bind(this,function(L,V){L=this.selectionCellsHandler.handlers.map;for(var O in L)if(null!=L[O].index)return;if(this.isEnabled()&&!this.panningHandler.isActive()&&!mxEvent.isAltDown(V.getEvent())){var U=this.tolerance;if(null!=h&&null!=u&&null!=n){if(O=u,Math.abs(h.x-
V.getGraphX())>U||Math.abs(h.y-V.getGraphY())>U){var J=this.selectionCellsHandler.getHandler(O.cell);null==J&&this.model.isEdge(O.cell)&&(J=this.createHandler(O));if(null!=J&&null!=J.bends&&0<J.bends.length){L=J.getHandleForEvent(n);var aa=this.view.getEdgeStyle(O);U=aa==mxEdgeStyle.EntityRelation;r||m!=mxEvent.LABEL_HANDLE||(L=m);if(U&&0!=L&&L!=J.bends.length-1&&L!=mxEvent.LABEL_HANDLE)!U||null==O.visibleSourceState&&null==O.visibleTargetState||(this.graphHandler.reset(),V.consume());else if(L==
mxEvent.LABEL_HANDLE||0==L||null!=O.visibleSourceState||L==J.bends.length-1||null!=O.visibleTargetState)U||L==mxEvent.LABEL_HANDLE||(U=O.absolutePoints,null!=U&&(null==aa&&null==L||aa==mxEdgeStyle.OrthConnector)&&(L=m,null==L&&(L=new mxRectangle(h.x,h.y),L.grow(mxEdgeHandler.prototype.handleImage.width/2),mxUtils.contains(L,U[0].x,U[0].y)?L=0:mxUtils.contains(L,U[U.length-1].x,U[U.length-1].y)?L=J.bends.length-1:null!=aa&&(2==U.length||3==U.length&&(0==Math.round(U[0].x-U[1].x)&&0==Math.round(U[1].x-
U[2].x)||0==Math.round(U[0].y-U[1].y)&&0==Math.round(U[1].y-U[2].y)))?L=2:(L=mxUtils.findNearestSegment(O,h.x,h.y),L=null==aa?mxEvent.VIRTUAL_HANDLE-L:L+1))),null==L&&(L=mxEvent.VIRTUAL_HANDLE)),J.start(V.getGraphX(),V.getGraphX(),L),V.consume(),this.graphHandler.reset()}null!=J&&(this.selectionCellsHandler.isHandlerActive(J)?this.isCellSelected(O.cell)||(this.selectionCellsHandler.handlers.put(O.cell,J),this.selectCellForEvent(O.cell,V.getEvent())):this.isCellSelected(O.cell)||J.destroy());r=!1;
h=n=u=m=null}}else if(O=V.getState(),null!=O&&this.isCellEditable(O.cell)){J=null;if(this.model.isEdge(O.cell)){if(L=new mxRectangle(V.getGraphX(),V.getGraphY()),L.grow(mxEdgeHandler.prototype.handleImage.width/2),U=O.absolutePoints,null!=U)if(null!=O.text&&null!=O.text.boundingBox&&mxUtils.contains(O.text.boundingBox,V.getGraphX(),V.getGraphY()))J="move";else if(mxUtils.contains(L,U[0].x,U[0].y)||mxUtils.contains(L,U[U.length-1].x,U[U.length-1].y))J="pointer";else if(null!=O.visibleSourceState||
null!=O.visibleTargetState)L=this.view.getEdgeStyle(O),J="crosshair",L!=mxEdgeStyle.EntityRelation&&this.isOrthogonal(O)&&(V=mxUtils.findNearestSegment(O,V.getGraphX(),V.getGraphY()),V<U.length-1&&0<=V&&(J=0==Math.round(U[V].x-U[V+1].x)?"col-resize":"row-resize"))}else if(!mxEvent.isControlDown(V.getEvent())){U=mxShape.prototype.svgStrokeTolerance/2;L=new mxRectangle(V.getGraphX(),V.getGraphY());L.grow(U);if(this.isTableCell(O.cell)&&(V=this.model.getParent(O.cell),U=this.model.getParent(V),!this.isCellSelected(U)))if(mxUtils.intersects(L,
new mxRectangle(O.x,O.y-2,O.width,4))&&this.model.getChildAt(U,0)!=V||mxUtils.intersects(L,new mxRectangle(O.x,O.y+O.height-2,O.width,4)))J="row-resize";else if(mxUtils.intersects(L,new mxRectangle(O.x-2,O.y,4,O.height))&&this.model.getChildAt(V,0)!=O.cell||mxUtils.intersects(L,new mxRectangle(O.x+O.width-2,O.y,4,O.height)))J="col-resize";for(V=O;null==J&&null!=V&&(this.isTableCell(V.cell)||this.isTableRow(V.cell)||this.isTable(V.cell));)this.isSwimlane(V.cell)&&(U=this.getActualStartSize(V.cell),
aa=this.view.scale,(0<U.x||0<U.width)&&mxUtils.intersects(L,new mxRectangle(V.x+(U.x-U.width-1)*aa+(0==U.x?V.width*aa:0),V.y,1,V.height))?J="col-resize":(0<U.y||0<U.height)&&mxUtils.intersects(L,new mxRectangle(V.x,V.y+(U.y-U.height-1)*aa+(0==U.y?V.height:0),V.width,1))&&(J="row-resize")),V=this.view.getState(this.model.getParent(V.cell))}null!=J&&O.setCursor(J)}}}),mouseUp:mxUtils.bind(this,function(L,V){m=h=n=u=null})})}this.cellRenderer.minSvgStrokeWidth=.1;this.cellRenderer.getLabelValue=function(L){var V=