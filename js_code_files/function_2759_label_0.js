return L};mxCellEditor.prototype.getBorderColor=function(y){var L=mxUtils.getValue(y.style,mxConstants.STYLE_LABEL_BORDERCOLOR,null);null!=L&&L!=mxConstants.NONE||!(null!=y.cell.geometry&&0<y.cell.geometry.width)||0==mxUtils.getValue(y.style,mxConstants.STYLE_ROTATION,0)&&0!=mxUtils.getValue(y.style,mxConstants.STYLE_HORIZONTAL,1)||(L=mxUtils.getValue(y.style,mxConstants.STYLE_STROKECOLOR,null));L==mxConstants.NONE&&(L=null);return L};mxCellEditor.prototype.getMinimumSize=function(y){var L=this.graph.getView().scale;