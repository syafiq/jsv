"endSize"],["sourcePerimeterSpacing","targetPerimeterSpacing"],["fillColor","gradientColor","gradientDirection"],["opacity"],["html"]];for(b=0;b<B.length;b++)for(f=0;f<B[b].length;f++)d.push(B[b][f]);for(b=0;b<h.length;b++)0>mxUtils.indexOf(d,h[b])&&d.push(h[b]);var D=function(O,U,J,aa,ia,na,W){aa=null!=aa?aa:e.currentVertexStyle;ia=null!=ia?ia:e.currentEdgeStyle;na=null!=na?na:!0;J=null!=J?J:e.getModel();if(W){W=[];for(var da=0;da<O.length;da++)W=W.concat(J.getDescendants(O[da]));O=W}J.beginUpdate();
try{for(da=0;da<O.length;da++){var sa=O[da];if(U)var ta=["fontSize","fontFamily","fontColor"];else{var Ja=J.getStyle(sa),Ia=null!=Ja?Ja.split(";"):[];ta=d.slice();for(var ua=0;ua<Ia.length;ua++){var Ba=Ia[ua],qa=Ba.indexOf("=");if(0<=qa){var Ea=Ba.substring(0,qa),Ua=mxUtils.indexOf(ta,Ea);0<=Ua&&ta.splice(Ua,1);for(W=0;W<B.length;W++){var db=B[W];if(0<=mxUtils.indexOf(db,Ea))for(var Ta=0;Ta<db.length;Ta++){var ab=mxUtils.indexOf(ta,db[Ta]);0<=ab&&ta.splice(ab,1)}}}}}var Ya=J.isEdge(sa);W=Ya?ia:aa;
var Va=J.getStyle(sa);for(ua=0;ua<ta.length;ua++){Ea=ta[ua];var Za=W[Ea];null!=Za&&"edgeStyle"!=Ea&&("shape"!=Ea||Ya)&&(!Ya||na||0>mxUtils.indexOf(n,Ea))&&(Va=mxUtils.setStyle(Va,Ea,Za))}Editor.simpleLabels&&(Va=mxUtils.setStyle(mxUtils.setStyle(Va,"html",null),"whiteSpace",null));J.setStyle(sa,Va)}}finally{J.endUpdate()}return O};e.addListener("cellsInserted",function(O,U){D(U.getProperty("cells"),null,null,null,null,!0,!0)});e.addListener("textInserted",function(O,U){D(U.getProperty("cells"),!0)});
this.insertHandler=D;this.createDivs();this.createUi();this.refresh();var F=mxUtils.bind(this,function(O){null==O&&(O=window.event);return e.isEditing()||null!=O&&this.isSelectionAllowed(O)});this.container==document.body&&(this.menubarContainer.onselectstart=F,this.menubarContainer.onmousedown=F,this.toolbarContainer.onselectstart=F,this.toolbarContainer.onmousedown=F,this.diagramContainer.onselectstart=F,this.diagramContainer.onmousedown=F,this.sidebarContainer.onselectstart=F,this.sidebarContainer.onmousedown=
F,this.formatContainer.onselectstart=F,this.formatContainer.onmousedown=F,this.footerContainer.onselectstart=F,this.footerContainer.onmousedown=F,null!=this.tabContainer&&(this.tabContainer.onselectstart=F));!this.editor.chromeless||this.editor.editable?(b=function(O){if(null!=O){var U=mxEvent.getSource(O);if("A"==U.nodeName)for(;null!=U;){if("geHint"==U.className)return!0;U=U.parentNode}}return F(O)},mxClient.IS_IE&&("undefined"===typeof document.documentMode||9>document.documentMode)?mxEvent.addListener(this.diagramContainer,
"contextmenu",b):this.diagramContainer.oncontextmenu=b):e.panningHandler.usePopupTrigger=!1;e.init(this.diagramContainer);mxClient.IS_SVG&&null!=e.view.getDrawPane()&&(b=e.view.getDrawPane().ownerSVGElement,null!=b&&(b.style.position="absolute"));this.hoverIcons=this.createHoverIcons();if(null!=e.graphHandler){var H=e.graphHandler.start;e.graphHandler.start=function(){null!=fa.hoverIcons&&fa.hoverIcons.reset();H.apply(this,arguments)}}mxEvent.addListener(this.diagramContainer,"mousemove",mxUtils.bind(this,
function(O){var U=mxUtils.getOffset(this.diagramContainer);0<mxEvent.getClientX(O)-U.x-this.diagramContainer.clientWidth||0<mxEvent.getClientY(O)-U.y-this.diagramContainer.clientHeight?this.diagramContainer.setAttribute("title",mxResources.get("panTooltip")):this.diagramContainer.removeAttribute("title")}));var C=!1,N=this.hoverIcons.isResetEvent;this.hoverIcons.isResetEvent=function(O,U){return C||N.apply(this,arguments)};this.keydownHandler=mxUtils.bind(this,function(O){32!=O.which||e.isEditing()?
mxEvent.isConsumed(O)||27!=O.keyCode||this.hideDialog(null,!0):(C=!0,this.hoverIcons.reset(),e.container.style.cursor="move",e.isEditing()||mxEvent.getSource(O)!=e.container||mxEvent.consume(O))});mxEvent.addListener(document,"keydown",this.keydownHandler);this.keyupHandler=mxUtils.bind(this,function(O){e.container.style.cursor="";C=!1});mxEvent.addListener(document,"keyup",this.keyupHandler);var Q=e.panningHandler.isForcePanningEvent;e.panningHandler.isForcePanningEvent=function(O){return Q.apply(this,
arguments)||C||mxEvent.isMouseEvent(O.getEvent())&&(this.usePopupTrigger||!mxEvent.isPopupTrigger(O.getEvent()))&&(!mxEvent.isControlDown(O.getEvent())&&mxEvent.isRightMouseButton(O.getEvent())||mxEvent.isMiddleMouseButton(O.getEvent()))};var T=e.cellEditor.isStopEditingEvent;e.cellEditor.isStopEditingEvent=function(O){return T.apply(this,arguments)||13==O.keyCode&&(!mxClient.IS_SF&&mxEvent.isControlDown(O)||mxClient.IS_MAC&&mxEvent.isMetaDown(O)||mxClient.IS_SF&&mxEvent.isShiftDown(O))};var R=e.isZoomWheelEvent;
e.isZoomWheelEvent=function(){return C||R.apply(this,arguments)};var ba=!1,S=null,P=null,X=null,ja=mxUtils.bind(this,function(){if(null!=this.toolbar&&ba!=e.cellEditor.isContentEditing()){for(var O=this.toolbar.container.firstChild,U=[];null!=O;){var J=O.nextSibling;0>mxUtils.indexOf(this.toolbar.staticElements,O)&&(O.parentNode.removeChild(O),U.push(O));O=J}O=this.toolbar.fontMenu;J=this.toolbar.sizeMenu;if(null==X)this.toolbar.createTextToolbar();else{for(var aa=0;aa<X.length;aa++)this.toolbar.container.appendChild(X[aa]);
this.toolbar.fontMenu=S;this.toolbar.sizeMenu=P}ba=e.cellEditor.isContentEditing();S=O;P=J;X=U}}),fa=this,ra=e.cellEditor.startEditing;e.cellEditor.startEditing=function(){ra.apply(this,arguments);ja();if(e.cellEditor.isContentEditing()){var O=!1,U=function(){O||(O=!0,window.setTimeout(function(){var J=e.getSelectedEditingElement();null!=J&&(J=mxUtils.getCurrentStyle(J),null!=J&&null!=fa.toolbar&&(fa.toolbar.setFontName(Graph.stripQuotes(J.fontFamily)),fa.toolbar.setFontSize(parseInt(J.fontSize))));
O=!1},0))};mxEvent.addListener(e.cellEditor.textarea,"input",U);mxEvent.addListener(e.cellEditor.textarea,"touchend",U);mxEvent.addListener(e.cellEditor.textarea,"mouseup",U);mxEvent.addListener(e.cellEditor.textarea,"keyup",U);U()}};var K=e.cellEditor.stopEditing;e.cellEditor.stopEditing=function(O,U){try{K.apply(this,arguments),ja()}catch(J){fa.handleError(J)}};e.container.setAttribute("tabindex","0");e.container.style.cursor="default";if(window.self===window.top&&null!=e.container.parentNode)try{e.container.focus()}catch(O){}var V=
e.fireMouseEvent;e.fireMouseEvent=function(O,U,J){O==mxEvent.MOUSE_DOWN&&this.container.focus();V.apply(this,arguments)};e.popupMenuHandler.autoExpand=!0;null!=this.menus&&(e.popupMenuHandler.factoryMethod=mxUtils.bind(this,function(O,U,J){this.menus.createPopupMenu(O,U,J)}));mxEvent.addGestureListeners(document,mxUtils.bind(this,function(O){e.popupMenuHandler.hideMenu()}));this.keyHandler=this.createKeyHandler(a);this.getKeyHandler=function(){return keyHandler};e.connectionHandler.addListener(mxEvent.CONNECT,
function(O,U){var J=[U.getProperty("cell")];U.getProperty("terminalInserted")&&(J.push(U.getProperty("terminal")),window.setTimeout(function(){null!=fa.hoverIcons&&fa.hoverIcons.update(e.view.getState(J[J.length-1]))},0));D(J)});this.addListener("styleChanged",mxUtils.bind(this,function(O,U){var J=U.getProperty("cells"),aa=O=!1;if(0<J.length)for(var ia=0;ia<J.length&&(O=e.getModel().isVertex(J[ia])||O,!(aa=e.getModel().isEdge(J[ia])||aa)||!O);ia++);else aa=O=!0;O=O&&!v;aa=aa&&!m;J=U.getProperty("keys");
U=U.getProperty("values");for(ia=0;ia<J.length;ia++){var na=0<=mxUtils.indexOf(r,J[ia]);if("strokeColor"!=J[ia]||null!=U[ia]&&"none"!=U[ia])if(0<=mxUtils.indexOf(h,J[ia]))aa||0<=mxUtils.indexOf(x,J[ia])?null==U[ia]?delete e.currentEdgeStyle[J[ia]]:e.currentEdgeStyle[J[ia]]=U[ia]:O&&0<=mxUtils.indexOf(d,J[ia])&&(null==U[ia]?delete e.currentVertexStyle[J[ia]]:e.currentVertexStyle[J[ia]]=U[ia]);else if(0<=mxUtils.indexOf(d,J[ia])){if(O||na)null==U[ia]?delete e.currentVertexStyle[J[ia]]:e.currentVertexStyle[J[ia]]=
U[ia];if(aa||na||0<=mxUtils.indexOf(x,J[ia]))null==U[ia]?delete e.currentEdgeStyle[J[ia]]:e.currentEdgeStyle[J[ia]]=U[ia]}}null!=this.toolbar&&(this.toolbar.setFontName(e.currentVertexStyle.fontFamily||Menus.prototype.defaultFont),this.toolbar.setFontSize(e.currentVertexStyle.fontSize||Menus.prototype.defaultFontSize),null!=this.toolbar.edgeStyleMenu&&(this.toolbar.edgeStyleMenu.getElementsByTagName("div")[0].className="orthogonalEdgeStyle"==e.currentEdgeStyle.edgeStyle&&"1"==e.currentEdgeStyle.curved?
"geSprite geSprite-curved":"straight"==e.currentEdgeStyle.edgeStyle||"none"==e.currentEdgeStyle.edgeStyle||null==e.currentEdgeStyle.edgeStyle?"geSprite geSprite-straight":"entityRelationEdgeStyle"==e.currentEdgeStyle.edgeStyle?"geSprite geSprite-entity":"elbowEdgeStyle"==e.currentEdgeStyle.edgeStyle?"geSprite geSprite-"+("vertical"==e.currentEdgeStyle.elbow?"verticalelbow":"horizontalelbow"):"isometricEdgeStyle"==e.currentEdgeStyle.edgeStyle?"geSprite geSprite-"+("vertical"==e.currentEdgeStyle.elbow?
"verticalisometric":"horizontalisometric"):"geSprite geSprite-orthogonal"),null!=this.toolbar.edgeShapeMenu&&(this.toolbar.edgeShapeMenu.getElementsByTagName("div")[0].className="link"==e.currentEdgeStyle.shape?"geSprite geSprite-linkedge":"flexArrow"==e.currentEdgeStyle.shape?"geSprite geSprite-arrow":"arrow"==e.currentEdgeStyle.shape?"geSprite geSprite-simplearrow":"geSprite geSprite-connection"))}));null!=this.toolbar&&(a=mxUtils.bind(this,function(){var O=e.currentVertexStyle.fontFamily||"Helvetica",
U=String(e.currentVertexStyle.fontSize||"12"),J=e.getView().getState(e.getSelectionCell());null!=J&&(O=J.style[mxConstants.STYLE_FONTFAMILY]||O,U=J.style[mxConstants.STYLE_FONTSIZE]||U,10<O.length&&(O=O.substring(0,8)+"..."));this.toolbar.setFontName(O);this.toolbar.setFontSize(U)}),e.getSelectionModel().addListener(mxEvent.CHANGE,a),e.getModel().addListener(mxEvent.CHANGE,a));e.addListener(mxEvent.CELLS_ADDED,function(O,U){O=U.getProperty("cells");U=U.getProperty("parent");null!=U&&e.getModel().isLayer(U)&&
!e.isCellVisible(U)&&null!=O&&0<O.length&&e.getModel().setVisible(U,!0)});this.gestureHandler=mxUtils.bind(this,function(O){null!=this.currentMenu&&mxEvent.getSource(O)!=this.currentMenu.div&&this.hideCurrentMenu()});mxEvent.addGestureListeners(document,this.gestureHandler);this.resizeHandler=mxUtils.bind(this,function(){this.windowResized()});mxEvent.addListener(window,"resize",this.resizeHandler);this.orientationChangeHandler=mxUtils.bind(this,function(){this.refresh()});mxEvent.addListener(window,
"orientationchange",this.orientationChangeHandler);mxClient.IS_IOS&&!window.navigator.standalone&&"undefined"!==typeof Menus&&(this.scrollHandler=mxUtils.bind(this,function(){window.scrollTo(0,0)}),mxEvent.addListener(window,"scroll",this.scrollHandler));this.editor.addListener("resetGraphView",mxUtils.bind(this,function(){this.resetScrollbars()}));this.addListener("gridEnabledChanged",mxUtils.bind(this,function(){e.view.validateBackground()}));this.addListener("backgroundColorChanged",mxUtils.bind(this,
function(){e.view.validateBackground()}));e.addListener("gridSizeChanged",mxUtils.bind(this,function(){e.isGridEnabled()&&e.view.validateBackground()}));this.editor.resetGraph()}this.init();e.standalone||this.open()};EditorUi.compactUi=!0;