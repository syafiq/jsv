this.graph.removeCells([y.cell],!1)}finally{this.graph.getModel().endUpdate()}};mxCellEditor.prototype.getBackgroundColor=function(y){var L=mxUtils.getValue(y.style,mxConstants.STYLE_LABEL_BACKGROUNDCOLOR,null);null!=L&&L!=mxConstants.NONE||!(null!=y.cell.geometry&&0<y.cell.geometry.width)||0==mxUtils.getValue(y.style,mxConstants.STYLE_ROTATION,0)&&0!=mxUtils.getValue(y.style,mxConstants.STYLE_HORIZONTAL,1)||(L=mxUtils.getValue(y.style,mxConstants.STYLE_FILLCOLOR,null));L==mxConstants.NONE&&(L=null);