return L};mxCellEditor.prototype.getBorderColor=function(y){var L=mxUtils.getValue(y.style,mxConstants.STYLE_LABEL_BORDERCOLOR,null);null!=L&&L!=mxConstants.NONE||!(null!=y.cell.geometry&&0<y.cell.geometry.width)||0==mxUtils.getValue(y.style,mxConstants.STYLE_ROTATION,0)&&0!=mxUtils.getValue(y.style,mxConstants.STYLE_HORIZONTAL,1)||(L=mxUtils.getValue(y.style,mxConstants.STYLE_STROKECOLOR,null));L==mxConstants.NONE&&(L=null);return L};mxCellEditor.prototype.getMinimumSize=function(y){var L=this.graph.getView().scale;
return new mxRectangle(0,0,null==y.text?30:y.text.size*L+20,30)};mxGraphHandlerIsValidDropTarget=mxGraphHandler.prototype.isValidDropTarget;mxGraphHandler.prototype.isValidDropTarget=function(y,L){return mxGraphHandlerIsValidDropTarget.apply(this,arguments)&&!mxEvent.isAltDown(L.getEvent)};mxGraphView.prototype.formatUnitText=function(y){return y?e(y,this.unit):y};mxGraphHandler.prototype.updateHint=function(y){if(null!=this.pBounds&&(null!=this.shape||this.livePreviewActive)){null==this.hint&&(this.hint=