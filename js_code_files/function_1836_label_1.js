Graph.removeKeys(D,function(G){return 0>mxUtils.indexOf(R,G)});this.updateCellStyles(D,M)};Graph.prototype.updateCellStyles=function(D,M){this.model.beginUpdate();try{for(var R=0;R<M.length;R++)if(this.model.isVertex(M[R])||this.model.isEdge(M[R])){var G=this.getCellStyle(M[R],!1),L;for(L in D){var Q=D[L];G[L]!=Q&&this.setCellStyles(L,Q,[M[R]])}}}finally{this.model.endUpdate()}};Graph.prototype.isFastZoomEnabled=function(){return"nocss"!=urlParams.zoom&&!mxClient.NO_FO&&!mxClient.IS_EDGE&&!this.useCssTransforms&&
(this.isCssTransformsSupported()||mxClient.IS_IOS)};Graph.prototype.isCssTransformsSupported=function(){return this.dialect==mxConstants.DIALECT_SVG&&!mxClient.NO_FO&&(!this.lightbox||!mxClient.IS_SF)};Graph.prototype.getCellAt=function(D,M,R,G,L,Q){this.useCssTransforms&&(D=D/this.currentScale-this.currentTranslate.x,M=M/this.currentScale-this.currentTranslate.y);return this.getScaledCellAt.apply(this,arguments)};Graph.prototype.getScaledCellAt=function(D,M,R,G,L,Q){G=null!=G?G:!0;L=null!=L?L:!0;
null==R&&(R=this.getCurrentRoot(),null==R&&(R=this.getModel().getRoot()));if(null!=R)for(var d=this.model.getChildCount(R)-1;0<=d;d--){var f=this.model.getChildAt(R,d),g=this.getScaledCellAt(D,M,f,G,L,Q);if(null!=g)return g;if(this.isCellVisible(f)&&(L&&this.model.isEdge(f)||G&&this.model.isVertex(f))&&(g=this.view.getState(f),null!=g&&(null==Q||!Q(g,D,M))&&this.intersects(g,D,M)))return f}return null};Graph.prototype.isRecursiveVertexResize=function(D){return!this.isSwimlane(D.cell)&&0<this.model.getChildCount(D.cell)&&
!this.isCellCollapsed(D.cell)&&"1"==mxUtils.getValue(D.style,"recursiveResize","1")&&null==mxUtils.getValue(D.style,"childLayout",null)};Graph.prototype.getAbsoluteParent=function(D){for(var M=this.getCellGeometry(D);null!=M&&M.relative;)D=this.getModel().getParent(D),M=this.getCellGeometry(D);return D};Graph.prototype.isPart=function(D){return"1"==mxUtils.getValue(this.getCurrentCellStyle(D),"part","0")||this.isTableCell(D)||this.isTableRow(D)};Graph.prototype.getCompositeParents=function(D){for(var M=
new mxDictionary,R=[],G=0;G<D.length;G++){var L=this.getCompositeParent(D[G]);this.isTableCell(L)&&(L=this.graph.model.getParent(L));this.isTableRow(L)&&(L=this.graph.model.getParent(L));null==L||M.get(L)||(M.put(L,!0),R.push(L))}return R};Graph.prototype.getCompositeParent=function(D){for(;this.isPart(D);){var M=this.model.getParent(D);if(!this.model.isVertex(M))break;D=M}return D};Graph.prototype.filterSelectionCells=function(D){var M=this.getSelectionCells();if(null!=D){for(var R=[],G=0;G<M.length;G++)D(M[G])||
R.push(M[G]);M=R}return M};var b=mxGraph.prototype.scrollRectToVisible;Graph.prototype.scrollRectToVisible=function(D){if(this.useCssTransforms){var M=this.currentScale,R=this.currentTranslate;D=new mxRectangle((D.x+2*R.x)*M-R.x,(D.y+2*R.y)*M-R.y,D.width*M,D.height*M)}b.apply(this,arguments)};mxCellHighlight.prototype.getStrokeWidth=function(D){D=this.strokeWidth;this.graph.useCssTransforms&&(D/=this.graph.currentScale);return D};mxGraphView.prototype.getGraphBounds=function(){var D=this.graphBounds;
if(this.graph.useCssTransforms){var M=this.graph.currentTranslate,R=this.graph.currentScale;D=new mxRectangle((D.x+M.x)*R,(D.y+M.y)*R,D.width*R,D.height*R)}return D};mxGraphView.prototype.viewStateChanged=function(){this.graph.useCssTransforms?this.validate():this.revalidate();this.graph.sizeDidChange()};var e=mxGraphView.prototype.validate;mxGraphView.prototype.validate=function(D){this.graph.useCssTransforms&&(this.graph.currentScale=this.scale,this.graph.currentTranslate.x=this.translate.x,this.graph.currentTranslate.y=
this.translate.y,this.scale=1,this.translate.x=0,this.translate.y=0);e.apply(this,arguments);this.graph.useCssTransforms&&(this.graph.updateCssTransform(),this.scale=this.graph.currentScale,this.translate.x=this.graph.currentTranslate.x,this.translate.y=this.graph.currentTranslate.y)};var k=mxGraph.prototype.getCellsForGroup;Graph.prototype.getCellsForGroup=function(D){D=k.apply(this,arguments);for(var M=[],R=0;R<D.length;R++)this.isTableRow(D[R])||this.isTableCell(D[R])||M.push(D[R]);return M};var l=
mxGraph.prototype.getCellsForUngroup;Graph.prototype.getCellsForUngroup=function(D){D=l.apply(this,arguments);for(var M=[],R=0;R<D.length;R++)this.isTable(D[R])||this.isTableRow(D[R])||this.isTableCell(D[R])||M.push(D[R]);return M};Graph.prototype.updateCssTransform=function(){var D=this.view.getDrawPane();if(null!=D)if(D=D.parentNode,this.useCssTransforms){var M=D.getAttribute("transform");D.setAttribute("transformOrigin","0 0");var R=Math.round(100*this.currentScale)/100;D.setAttribute("transform",
"scale("+R+","+R+")translate("+Math.round(100*this.currentTranslate.x)/100+","+Math.round(100*this.currentTranslate.y)/100+")");M!=D.getAttribute("transform")&&this.fireEvent(new mxEventObject("cssTransformChanged"),"transform",D.getAttribute("transform"))}else D.removeAttribute("transformOrigin"),D.removeAttribute("transform")};var C=mxGraphView.prototype.validateBackgroundPage;mxGraphView.prototype.validateBackgroundPage=function(){var D=this.graph.useCssTransforms,M=this.scale,R=this.translate;
D&&(this.scale=this.graph.currentScale,this.translate=this.graph.currentTranslate);C.apply(this,arguments);D&&(this.scale=M,this.translate=R)};var p=mxGraph.prototype.updatePageBreaks;mxGraph.prototype.updatePageBreaks=function(D,M,R){var G=this.useCssTransforms,L=this.view.scale,Q=this.view.translate;G&&(this.view.scale=1,this.view.translate=new mxPoint(0,0),this.useCssTransforms=!1);p.apply(this,arguments);G&&(this.view.scale=L,this.view.translate=Q,this.useCssTransforms=!0)}})();