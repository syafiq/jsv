!this.graph.isCellLocked(this.graph.getDefaultParent())&&(mxEvent.isControlDown(t.getEvent())||mxEvent.isMetaDown(t.getEvent()))&&mxEvent.isShiftDown(t.getEvent())&&mxEvent.isAltDown(t.getEvent())};mxRubberband.prototype.cancelled=!1;mxRubberband.prototype.cancel=function(){this.isActive()&&(this.cancelled=!0,this.reset())};mxRubberband.prototype.mouseUp=function(t,z){if(this.cancelled)this.cancelled=!1,z.consume();else{var A=null!=this.div&&"none"!=this.div.style.display,E=null,G=null,L=t=null;null!=
this.first&&null!=this.currentX&&null!=this.currentY&&(E=this.first.x,G=this.first.y,t=(this.currentX-E)/this.graph.view.scale,L=(this.currentY-G)/this.graph.view.scale,mxEvent.isAltDown(z.getEvent())||(t=this.graph.snap(t),L=this.graph.snap(L),this.graph.isGridEnabled()||(Math.abs(t)<this.graph.tolerance&&(t=0),Math.abs(L)<this.graph.tolerance&&(L=0))));this.reset();if(A){if(this.isSpaceEvent(z)){this.graph.model.beginUpdate();try{var Y=this.graph.getCellsBeyond(E,G,this.graph.getDefaultParent(),
!0,!0);for(A=0;A<Y.length;A++)if(this.graph.isCellMovable(Y[A])){var ha=this.graph.view.getState(Y[A]),ea=this.graph.getCellGeometry(Y[A]);null!=ha&&null!=ea&&(ea=ea.clone(),ea.translate(t,L),this.graph.model.setGeometry(Y[A],ea))}}finally{this.graph.model.endUpdate()}}else Y=new mxRectangle(this.x,this.y,this.width,this.height),this.graph.selectRegion(Y,z.getEvent());z.consume()}}};mxRubberband.prototype.mouseMove=function(t,z){if(!z.isConsumed()&&null!=this.first){var A=mxUtils.getScrollOrigin(this.graph.container);
t=mxUtils.getOffset(this.graph.container);A.x-=t.x;A.y-=t.y;t=z.getX()+A.x;A=z.getY()+A.y;var E=this.first.x-t,G=this.first.y-A,L=this.graph.tolerance;if(null!=this.div||Math.abs(E)>L||Math.abs(G)>L)null==this.div&&(this.div=this.createShape()),mxUtils.clearSelection(),this.update(t,A),this.isSpaceEvent(z)?(t=this.x+this.width,A=this.y+this.height,E=this.graph.view.scale,mxEvent.isAltDown(z.getEvent())||(this.width=this.graph.snap(this.width/E)*E,this.height=this.graph.snap(this.height/E)*E,this.graph.isGridEnabled()||
(this.width<this.graph.tolerance&&(this.width=0),this.height<this.graph.tolerance&&(this.height=0)),this.x<this.first.x&&(this.x=t-this.width),this.y<this.first.y&&(this.y=A-this.height)),this.div.style.borderStyle="dashed",this.div.style.backgroundColor="white",this.div.style.left=this.x+"px",this.div.style.top=this.y+"px",this.div.style.width=Math.max(0,this.width)+"px",this.div.style.height=this.graph.container.clientHeight+"px",this.div.style.borderWidth=0>=this.width?"0px 1px 0px 0px":"0px 1px 0px 1px",
null==this.secondDiv&&(this.secondDiv=this.div.cloneNode(!0),this.div.parentNode.appendChild(this.secondDiv)),this.secondDiv.style.left=this.x+"px",this.secondDiv.style.top=this.y+"px",this.secondDiv.style.width=this.graph.container.clientWidth+"px",this.secondDiv.style.height=Math.max(0,this.height)+"px",this.secondDiv.style.borderWidth=0>=this.height?"1px 0px 0px 0px":"1px 0px 1px 0px"):(this.div.style.backgroundColor="",this.div.style.borderWidth="",this.div.style.borderStyle="",null!=this.secondDiv&&
(this.secondDiv.parentNode.removeChild(this.secondDiv),this.secondDiv=null)),z.consume()}};var W=mxRubberband.prototype.reset;mxRubberband.prototype.reset=function(){null!=this.secondDiv&&(this.secondDiv.parentNode.removeChild(this.secondDiv),this.secondDiv=null);W.apply(this,arguments)};var da=(new Date).getTime(),sa=0,ta=mxEdgeHandler.prototype.updatePreviewState;mxEdgeHandler.prototype.updatePreviewState=function(t,z,A,E){ta.apply(this,arguments);A!=this.currentTerminalState?(da=(new Date).getTime(),
sa=0):sa=(new Date).getTime()-da;this.currentTerminalState=A};var Ja=mxEdgeHandler.prototype.isOutlineConnectEvent;mxEdgeHandler.prototype.isOutlineConnectEvent=function(t){return mxEvent.isShiftDown(t.getEvent())&&mxEvent.isAltDown(t.getEvent())?!1:null!=this.currentTerminalState&&t.getState()==this.currentTerminalState&&2E3<sa||(null==this.currentTerminalState||"0"!=mxUtils.getValue(this.currentTerminalState.style,"outlineConnect","1"))&&Ja.apply(this,arguments)};mxEdgeHandler.prototype.createHandleShape=
function(t,z,A){z=null!=t&&0==t;var E=this.state.getVisibleTerminalState(z);t=null!=t&&(0==t||t>=this.state.absolutePoints.length-1||this.constructor==mxElbowEdgeHandler&&2==t)?this.graph.getConnectionConstraint(this.state,E,z):null;A=null!=(null!=t?this.graph.getConnectionPoint(this.state.getVisibleTerminalState(z),t):null)?A?this.endFixedHandleImage:this.fixedHandleImage:null!=t&&null!=E?A?this.endTerminalHandleImage:this.terminalHandleImage:A?this.endHandleImage:this.handleImage;if(null!=A)return A=
new mxImageShape(new mxRectangle(0,0,A.width,A.height),A.src),A.preserveImageAspect=!1,A;A=mxConstants.HANDLE_SIZE;this.preferHtml&&--A;return new mxRectangleShape(new mxRectangle(0,0,A,A),mxConstants.HANDLE_FILLCOLOR,mxConstants.HANDLE_STROKECOLOR)};var Ia=mxVertexHandler.prototype.createSizerShape;mxVertexHandler.prototype.createSizerShape=function(t,z,A){this.handleImage=z==mxEvent.ROTATION_HANDLE?HoverIcons.prototype.rotationHandle:z==mxEvent.LABEL_HANDLE?this.secondaryHandleImage:this.handleImage;
return Ia.apply(this,arguments)};var ua=mxGraphHandler.prototype.getBoundingBox;mxGraphHandler.prototype.getBoundingBox=function(t){if(null!=t&&1==t.length){var z=this.graph.getModel(),A=z.getParent(t[0]),E=this.graph.getCellGeometry(t[0]);if(z.isEdge(A)&&null!=E&&E.relative&&(z=this.graph.view.getState(t[0]),null!=z&&2>z.width&&2>z.height&&null!=z.text&&null!=z.text.boundingBox))return mxRectangle.fromRectangle(z.text.boundingBox)}return ua.apply(this,arguments)};var Ba=mxGraphHandler.prototype.getGuideStates;
mxGraphHandler.prototype.getGuideStates=function(){for(var t=Ba.apply(this,arguments),z=[],A=0;A<t.length;A++)"1"!=mxUtils.getValue(t[A].style,"part","0")&&z.push(t[A]);return z};var qa=mxVertexHandler.prototype.getSelectionBounds;mxVertexHandler.prototype.getSelectionBounds=function(t){var z=this.graph.getModel(),A=z.getParent(t.cell),E=this.graph.getCellGeometry(t.cell);return z.isEdge(A)&&null!=E&&E.relative&&2>t.width&&2>t.height&&null!=t.text&&null!=t.text.boundingBox?(z=t.text.unrotatedBoundingBox||
t.text.boundingBox,new mxRectangle(Math.round(z.x),Math.round(z.y),Math.round(z.width),Math.round(z.height))):qa.apply(this,arguments)};var Ea=mxVertexHandler.prototype.mouseDown;mxVertexHandler.prototype.mouseDown=function(t,z){var A=this.graph.getModel(),E=A.getParent(this.state.cell),G=this.graph.getCellGeometry(this.state.cell);(this.getHandleForEvent(z)==mxEvent.ROTATION_HANDLE||!A.isEdge(E)||null==G||!G.relative||null==this.state||2<=this.state.width||2<=this.state.height)&&Ea.apply(this,arguments)};
mxVertexHandler.prototype.rotateClick=function(){var t=mxUtils.getValue(this.state.style,mxConstants.STYLE_STROKECOLOR,mxConstants.NONE),z=mxUtils.getValue(this.state.style,mxConstants.STYLE_FILLCOLOR,mxConstants.NONE);this.state.view.graph.model.isVertex(this.state.cell)&&t==mxConstants.NONE&&z==mxConstants.NONE?(t=mxUtils.mod(mxUtils.getValue(this.state.style,mxConstants.STYLE_ROTATION,0)+90,360),this.state.view.graph.setCellStyles(mxConstants.STYLE_ROTATION,t,[this.state.cell])):this.state.view.graph.turnShapes([this.state.cell])};
var Ua=mxVertexHandler.prototype.mouseMove;mxVertexHandler.prototype.mouseMove=function(t,z){Ua.apply(this,arguments);null!=this.graph.graphHandler.first&&(null!=this.rotationShape&&null!=this.rotationShape.node&&(this.rotationShape.node.style.display="none"),null!=this.linkHint&&"none"!=this.linkHint.style.display&&(this.linkHint.style.display="none"))};var db=mxVertexHandler.prototype.mouseUp;mxVertexHandler.prototype.mouseUp=function(t,z){db.apply(this,arguments);null!=this.rotationShape&&null!=
this.rotationShape.node&&(this.rotationShape.node.style.display=1==this.graph.getSelectionCount()?"":"none");null!=this.linkHint&&"none"==this.linkHint.style.display&&(this.linkHint.style.display="");this.blockDelayedSelection=null};var Ta=mxVertexHandler.prototype.init;mxVertexHandler.prototype.init=function(){Ta.apply(this,arguments);var t=!1;null!=this.rotationShape&&this.rotationShape.node.setAttribute("title",mxResources.get("rotateTooltip"));if(this.graph.isTable(this.state.cell))this.refreshMoveHandles();
else if(1==this.graph.getSelectionCount()&&(this.graph.isTableCell(this.state.cell)||this.graph.isTableRow(this.state.cell))){this.cornerHandles=[];for(var z=0;4>z;z++){var A=new mxRectangleShape(new mxRectangle(0,0,6,6),"#ffffff",mxConstants.HANDLE_STROKECOLOR);A.dialect=mxConstants.DIALECT_SVG;A.init(this.graph.view.getOverlayPane());this.cornerHandles.push(A)}}var E=mxUtils.bind(this,function(){null!=this.specialHandle&&(this.specialHandle.node.style.display=this.graph.isEnabled()&&this.graph.getSelectionCount()<
this.graph.graphHandler.maxCells?"":"none");this.redrawHandles()});this.changeHandler=mxUtils.bind(this,function(G,L){this.updateLinkHint(this.graph.getLinkForCell(this.state.cell),this.graph.getLinksForState(this.state));E()});this.graph.getSelectionModel().addListener(mxEvent.CHANGE,this.changeHandler);this.graph.getModel().addListener(mxEvent.CHANGE,this.changeHandler);this.editingHandler=mxUtils.bind(this,function(G,L){this.redrawHandles()});this.graph.addListener(mxEvent.EDITING_STOPPED,this.editingHandler);
z=this.graph.getLinkForCell(this.state.cell);A=this.graph.getLinksForState(this.state);this.updateLinkHint(z,A);if(null!=z||null!=A&&0<A.length)t=!0;t&&this.redrawHandles()};mxVertexHandler.prototype.updateLinkHint=function(t,z){try{if(null==t&&(null==z||0==z.length)||1<this.graph.getSelectionCount())null!=this.linkHint&&(this.linkHint.parentNode.removeChild(this.linkHint),this.linkHint=null);else if(null!=t||null!=z&&0<z.length){null==this.linkHint&&(this.linkHint=a(),this.linkHint.style.padding=
"6px 8px 6px 8px",this.linkHint.style.opacity="1",this.linkHint.style.filter="",this.graph.container.appendChild(this.linkHint),mxEvent.addListener(this.linkHint,"mouseenter",mxUtils.bind(this,function(){this.graph.tooltipHandler.hide()})));this.linkHint.innerText="";if(null!=t&&(this.linkHint.appendChild(this.graph.createLinkForHint(t)),this.graph.isEnabled()&&"function"===typeof this.graph.editLink)){var A=document.createElement("img");A.className="geAdaptiveAsset";A.setAttribute("src",Editor.editImage);
A.setAttribute("title",mxResources.get("editLink"));A.setAttribute("width","11");A.setAttribute("height","11");A.style.marginLeft="10px";A.style.marginBottom="-1px";A.style.cursor="pointer";this.linkHint.appendChild(A);mxEvent.addListener(A,"click",mxUtils.bind(this,function(L){this.graph.setSelectionCell(this.state.cell);this.graph.editLink();mxEvent.consume(L)}));var E=A.cloneNode(!0);E.setAttribute("src",Editor.trashImage);E.setAttribute("title",mxResources.get("removeIt",[mxResources.get("link")]));
E.style.marginLeft="4px";this.linkHint.appendChild(E);mxEvent.addListener(E,"click",mxUtils.bind(this,function(L){this.graph.setLinkForCell(this.state.cell,null);mxEvent.consume(L)}))}if(null!=z)for(A=0;A<z.length;A++){var G=document.createElement("div");G.style.marginTop=null!=t||0<A?"6px":"0px";G.appendChild(this.graph.createLinkForHint(z[A].getAttribute("href"),mxUtils.getTextContent(z[A])));this.linkHint.appendChild(G)}}null!=this.linkHint&&Graph.sanitizeNode(this.linkHint)}catch(L){}};mxEdgeHandler.prototype.updateLinkHint=
mxVertexHandler.prototype.updateLinkHint;var ab=mxEdgeHandler.prototype.init;mxEdgeHandler.prototype.init=function(){ab.apply(this,arguments);this.constraintHandler.isEnabled=mxUtils.bind(this,function(){return this.state.view.graph.connectionHandler.isEnabled()});var t=mxUtils.bind(this,function(){null!=this.linkHint&&(this.linkHint.style.display=1==this.graph.getSelectionCount()?"":"none");null!=this.labelShape&&(this.labelShape.node.style.display=this.graph.isEnabled()&&this.graph.getSelectionCount()<
this.graph.graphHandler.maxCells?"":"none")});this.changeHandler=mxUtils.bind(this,function(E,G){this.updateLinkHint(this.graph.getLinkForCell(this.state.cell),this.graph.getLinksForState(this.state));t();this.redrawHandles()});this.graph.getSelectionModel().addListener(mxEvent.CHANGE,this.changeHandler);this.graph.getModel().addListener(mxEvent.CHANGE,this.changeHandler);var z=this.graph.getLinkForCell(this.state.cell),A=this.graph.getLinksForState(this.state);if(null!=z||null!=A&&0<A.length)this.updateLinkHint(z,
A),this.redrawHandles()};var Ya=mxConnectionHandler.prototype.init;mxConnectionHandler.prototype.init=function(){Ya.apply(this,arguments);this.constraintHandler.isEnabled=mxUtils.bind(this,function(){return this.graph.connectionHandler.isEnabled()})};var Va=mxVertexHandler.prototype.redrawHandles;mxVertexHandler.prototype.redrawHandles=function(){if(null!=this.moveHandles)for(var t=0;t<this.moveHandles.length;t++)this.moveHandles[t].style.left=this.moveHandles[t].rowState.x+this.moveHandles[t].rowState.width-
5+"px",this.moveHandles[t].style.top=this.moveHandles[t].rowState.y+this.moveHandles[t].rowState.height/2-6+"px";if(null!=this.cornerHandles){t=this.getSelectionBorderInset();var z=this.cornerHandles,A=z[0].bounds.height/2;z[0].bounds.x=this.state.x-z[0].bounds.width/2+t;z[0].bounds.y=this.state.y-A+t;z[0].redraw();z[1].bounds.x=z[0].bounds.x+this.state.width-2*t;z[1].bounds.y=z[0].bounds.y;z[1].redraw();z[2].bounds.x=z[0].bounds.x;z[2].bounds.y=this.state.y+this.state.height-2*t;z[2].redraw();z[3].bounds.x=
z[1].bounds.x;z[3].bounds.y=z[2].bounds.y;z[3].redraw();for(t=0;t<this.cornerHandles.length;t++)this.cornerHandles[t].node.style.display=1==this.graph.getSelectionCount()?"":"none"}null!=this.rotationShape&&null!=this.rotationShape.node&&(this.rotationShape.node.style.display=null!=this.moveHandles||1!=this.graph.getSelectionCount()||null!=this.index&&this.index!=mxEvent.ROTATION_HANDLE?"none":"");Va.apply(this);null!=this.state&&null!=this.linkHint&&(t=new mxPoint(this.state.getCenterX(),this.state.getCenterY()),
z=new mxRectangle(this.state.x,this.state.y-22,this.state.width+24,this.state.height+22),A=mxUtils.getBoundingBox(z,this.state.style[mxConstants.STYLE_ROTATION]||"0",t),t=null!=A?mxUtils.getBoundingBox(this.state,this.state.style[mxConstants.STYLE_ROTATION]||"0"):this.state,z=null!=this.state.text?this.state.text.boundingBox:null,null==A&&(A=this.state),A=A.y+A.height,null!=z&&(A=Math.max(A,z.y+z.height)),this.linkHint.style.left=Math.max(0,Math.round(t.x+(t.width-this.linkHint.clientWidth)/2))+"px",
this.linkHint.style.top=Math.round(A+this.verticalOffset/2+Editor.hintOffset)+"px")};var Za=mxVertexHandler.prototype.destroy;mxVertexHandler.prototype.destroy=function(){Za.apply(this,arguments);if(null!=this.moveHandles){for(var t=0;t<this.moveHandles.length;t++)null!=this.moveHandles[t]&&null!=this.moveHandles[t].parentNode&&this.moveHandles[t].parentNode.removeChild(this.moveHandles[t]);this.moveHandles=null}if(null!=this.cornerHandles){for(t=0;t<this.cornerHandles.length;t++)null!=this.cornerHandles[t]&&
null!=this.cornerHandles[t].node&&null!=this.cornerHandles[t].node.parentNode&&this.cornerHandles[t].node.parentNode.removeChild(this.cornerHandles[t].node);this.cornerHandles=null}null!=this.linkHint&&(null!=this.linkHint.parentNode&&this.linkHint.parentNode.removeChild(this.linkHint),this.linkHint=null);null!=this.changeHandler&&(this.graph.getSelectionModel().removeListener(this.changeHandler),this.graph.getModel().removeListener(this.changeHandler),this.changeHandler=null);null!=this.editingHandler&&
(this.graph.removeListener(this.editingHandler),this.editingHandler=null)};var kb=mxEdgeHandler.prototype.redrawHandles;mxEdgeHandler.prototype.redrawHandles=function(){if(null!=this.marker&&(kb.apply(this),null!=this.state&&null!=this.linkHint)){var t=this.state;null!=this.state.text&&null!=this.state.text.bounds&&(t=new mxRectangle(t.x,t.y,t.width,t.height),t.add(this.state.text.bounds));this.linkHint.style.left=Math.max(0,Math.round(t.x+(t.width-this.linkHint.clientWidth)/2))+"px";this.linkHint.style.top=
Math.round(t.y+t.height+Editor.hintOffset)+"px"}};var cb=mxEdgeHandler.prototype.reset;mxEdgeHandler.prototype.reset=function(){cb.apply(this,arguments);null!=this.linkHint&&(this.linkHint.style.visibility="")};var ca=mxEdgeHandler.prototype.destroy;mxEdgeHandler.prototype.destroy=function(){ca.apply(this,arguments);null!=this.linkHint&&(this.linkHint.parentNode.removeChild(this.linkHint),this.linkHint=null);null!=this.changeHandler&&(this.graph.getModel().removeListener(this.changeHandler),this.graph.getSelectionModel().removeListener(this.changeHandler),
this.changeHandler=null)}}();Format=function(a,b){this.editorUi=a;this.container=b};Format.inactiveTabBackgroundColor="#f1f3f4";Format.classicFilledMarkerImage=Graph.createSvgImage(20,22,'<path transform="translate(4,2)" stroke-width="2" d="M 0 8 L 10 2 L 5 8 L 10 14 Z M 0 8 L 24 8" stroke="#404040" fill="#404040"/>',32,20);Format.classicThinFilledMarkerImage=Graph.createSvgImage(20,22,'<path transform="translate(4,2)" stroke-width="2" d="M 0 8 L 8 4 L 3 8 L 8 12 Z M 0 8 L 24 8" stroke="#404040" fill="#404040"/>',32,20);