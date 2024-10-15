Graph.removeKeys(h,function(m){return 0>mxUtils.indexOf(u,m)});this.updateCellStyles(h,n)};Graph.prototype.updateCellStyles=function(h,n){this.model.beginUpdate();try{for(var u=0;u<n.length;u++)if(this.model.isVertex(n[u])||this.model.isEdge(n[u])){var m=this.getCellStyle(n[u],!1),r;for(r in h){var x=h[r];m[r]!=x&&this.setCellStyles(r,x,[n[u]])}}}finally{this.model.endUpdate()}};Graph.prototype.isFastZoomEnabled=function(){return"nocss"!=urlParams.zoom&&!mxClient.NO_FO&&!mxClient.IS_EDGE&&!this.useCssTransforms&&
(this.isCssTransformsSupported()||mxClient.IS_IOS)};Graph.prototype.isCssTransformsSupported=function(){return this.dialect==mxConstants.DIALECT_SVG&&!mxClient.NO_FO&&(!this.lightbox||!mxClient.IS_SF)};Graph.prototype.getCellAt=function(h,n,u,m,r,x){this.useCssTransforms&&(h=h/this.currentScale-this.currentTranslate.x,n=n/this.currentScale-this.currentTranslate.y);return this.getScaledCellAt.apply(this,arguments)};Graph.prototype.getScaledCellAt=function(h,n,u,m,r,x){m=null!=m?m:!0;r=null!=r?r:!0;
null==u&&(u=this.getCurrentRoot(),null==u&&(u=this.getModel().getRoot()));if(null!=u)for(var B=this.model.getChildCount(u)-1;0<=B;B--){var C=this.model.getChildAt(u,B),F=this.getScaledCellAt(h,n,C,m,r,x);if(null!=F)return F;if(this.isCellVisible(C)&&(r&&this.model.isEdge(C)||m&&this.model.isVertex(C))&&(F=this.view.getState(C),null!=F&&(null==x||!x(F,h,n))&&this.intersects(F,h,n)))return C}return null};Graph.prototype.isRecursiveVertexResize=function(h){return!this.isSwimlane(h.cell)&&0<this.model.getChildCount(h.cell)&&
!this.isCellCollapsed(h.cell)&&"1"==mxUtils.getValue(h.style,"recursiveResize","1")&&null==mxUtils.getValue(h.style,"childLayout",null)};Graph.prototype.getAbsoluteParent=function(h){for(var n=this.getCellGeometry(h);null!=n&&n.relative;)h=this.getModel().getParent(h),n=this.getCellGeometry(h);return h};Graph.prototype.isPart=function(h){return"1"==mxUtils.getValue(this.getCurrentCellStyle(h),"part","0")||this.isTableCell(h)||this.isTableRow(h)};Graph.prototype.getCompositeParents=function(h){for(var n=
new mxDictionary,u=[],m=0;m<h.length;m++){var r=this.getCompositeParent(h[m]);this.isTableCell(r)&&(r=this.graph.model.getParent(r));this.isTableRow(r)&&(r=this.graph.model.getParent(r));null==r||n.get(r)||(n.put(r,!0),u.push(r))}return u};Graph.prototype.getCompositeParent=function(h){for(;this.isPart(h);){var n=this.model.getParent(h);if(!this.model.isVertex(n))break;h=n}return h};Graph.prototype.filterSelectionCells=function(h){var n=this.getSelectionCells();if(null!=h){for(var u=[],m=0;m<n.length;m++)h(n[m])||
u.push(n[m]);n=u}return n};var a=mxGraph.prototype.scrollRectToVisible;Graph.prototype.scrollRectToVisible=function(h){if(this.useCssTransforms){var n=this.currentScale,u=this.currentTranslate;h=new mxRectangle((h.x+2*u.x)*n-u.x,(h.y+2*u.y)*n-u.y,h.width*n,h.height*n)}a.apply(this,arguments)};mxCellHighlight.prototype.getStrokeWidth=function(h){h=this.strokeWidth;this.graph.useCssTransforms&&(h/=this.graph.currentScale);return h};mxGraphView.prototype.getGraphBounds=function(){var h=this.graphBounds;
if(this.graph.useCssTransforms){var n=this.graph.currentTranslate,u=this.graph.currentScale;h=new mxRectangle((h.x+n.x)*u,(h.y+n.y)*u,h.width*u,h.height*u)}return h};mxGraphView.prototype.viewStateChanged=function(){this.graph.useCssTransforms?this.validate():this.revalidate();this.graph.sizeDidChange()};var b=mxGraphView.prototype.validate;mxGraphView.prototype.validate=function(h){this.graph.useCssTransforms&&(this.graph.currentScale=this.scale,this.graph.currentTranslate.x=this.translate.x,this.graph.currentTranslate.y=
this.translate.y,this.scale=1,this.translate.x=0,this.translate.y=0);b.apply(this,arguments);this.graph.useCssTransforms&&(this.graph.updateCssTransform(),this.scale=this.graph.currentScale,this.translate.x=this.graph.currentTranslate.x,this.translate.y=this.graph.currentTranslate.y)};var f=mxGraph.prototype.getCellsForGroup;Graph.prototype.getCellsForGroup=function(h){h=f.apply(this,arguments);for(var n=[],u=0;u<h.length;u++)this.isTableRow(h[u])||this.isTableCell(h[u])||n.push(h[u]);return n};var e=
mxGraph.prototype.getCellsForUngroup;Graph.prototype.getCellsForUngroup=function(h){h=e.apply(this,arguments);for(var n=[],u=0;u<h.length;u++)this.isTable(h[u])||this.isTableRow(h[u])||this.isTableCell(h[u])||n.push(h[u]);return n};Graph.prototype.updateCssTransform=function(){var h=this.view.getDrawPane();if(null!=h)if(h=h.parentNode,this.useCssTransforms){var n=h.getAttribute("transform");h.setAttribute("transformOrigin","0 0");var u=Math.round(100*this.currentScale)/100;h.setAttribute("transform",
"scale("+u+","+u+")translate("+Math.round(100*this.currentTranslate.x)/100+","+Math.round(100*this.currentTranslate.y)/100+")");n!=h.getAttribute("transform")&&this.fireEvent(new mxEventObject("cssTransformChanged"),"transform",h.getAttribute("transform"))}else h.removeAttribute("transformOrigin"),h.removeAttribute("transform")};var g=mxGraphView.prototype.validateBackgroundPage;mxGraphView.prototype.validateBackgroundPage=function(){var h=this.graph.useCssTransforms,n=this.scale,u=this.translate;
h&&(this.scale=this.graph.currentScale,this.translate=this.graph.currentTranslate);g.apply(this,arguments);h&&(this.scale=n,this.translate=u)};var d=mxGraph.prototype.updatePageBreaks;mxGraph.prototype.updatePageBreaks=function(h,n,u){var m=this.useCssTransforms,r=this.view.scale,x=this.view.translate;m&&(this.view.scale=1,this.view.translate=new mxPoint(0,0),this.useCssTransforms=!1);d.apply(this,arguments);m&&(this.view.scale=r,this.view.translate=x,this.useCssTransforms=!0)}})();