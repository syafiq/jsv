this.graph.isCellDeletable(y.cell)&&0==this.graph.model.getChildCount(y.cell)&&this.graph.isTransparentState(y)&&this.graph.removeCells([y.cell],!1)}finally{this.graph.getModel().endUpdate()}};mxCellEditor.prototype.getBackgroundColor=function(y){var N=mxUtils.getValue(y.style,mxConstants.STYLE_LABEL_BACKGROUNDCOLOR,null);null!=N&&N!=mxConstants.NONE||!(null!=y.cell.geometry&&0<y.cell.geometry.width)||0==mxUtils.getValue(y.style,mxConstants.STYLE_ROTATION,0)&&0!=mxUtils.getValue(y.style,mxConstants.STYLE_HORIZONTAL,