this.getInsertPoint=function(){return null!=D?this.getPointForEvent(D):L.apply(this,arguments)};var U=this.layoutManager.getLayout;this.layoutManager.getLayout=function(O){var S=this.graph.getCellStyle(O);if(null!=S&&"rack"==S.childLayout){var R=new mxStackLayout(this.graph,!1);R.gridSize=null!=S.rackUnitSize?parseFloat(S.rackUnitSize):"undefined"!==typeof mxRackContainer?mxRackContainer.unitSize:20;R.marginLeft=S.marginLeft||0;R.marginRight=S.marginRight||0;R.marginTop=S.marginTop||0;R.marginBottom=
S.marginBottom||0;R.allowGaps=S.allowGaps||0;R.horizontal="1"==mxUtils.getValue(S,"horizontalRack","0");R.resizeParent=!1;R.fill=!0;return R}return U.apply(this,arguments)};this.updateGlobalUrlVariables()};var u=Graph.prototype.postProcessCellStyle;Graph.prototype.postProcessCellStyle=function(q,D){return Graph.processFontStyle(u.apply(this,arguments))};var v=mxSvgCanvas2D.prototype.updateTextNodes;mxSvgCanvas2D.prototype.updateTextNodes=function(q,D,L,U,O,S,R,X,Z,ba,aa){v.apply(this,arguments);Graph.processFontAttributes(aa)};