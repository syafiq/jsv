x.pasteCounter=0);var D=x.pasteCounter*x.gridSize;if(k||this.isCompatibleString(d))u=this.importXml(d,D,D),x.setSelectionCells(u);else if(g&&1==x.getSelectionCount()){D=x.getStartEditingCell(x.getSelectionCell(),n);if(/\.(gif|jpg|jpeg|tiff|png|svg)$/i.test(d)&&"image"==x.getCurrentCellStyle(D)[mxConstants.STYLE_SHAPE])x.setCellStyles(mxConstants.STYLE_IMAGE,d,[D]);else{x.model.beginUpdate();try{x.labelChanged(D,d),Graph.isLink(d)&&x.setLinkForCell(D,d)}finally{x.model.endUpdate()}}x.setSelectionCell(D)}else u=
x.getInsertPoint(),x.isMouseInsertPoint()&&(D=0,x.lastPasteXml==d&&0<x.pasteCounter&&x.pasteCounter--),u=this.insertTextAt(d,u.x+D,u.y+D,!0),x.setSelectionCells(u);x.isSelectionEmpty()||(x.scrollCellToVisible(x.getSelectionCell()),null!=this.hoverIcons&&this.hoverIcons.update(x.view.getState(x.getSelectionCell())));return u};EditorUi.prototype.pasteCells=function(d,g,k,n){if(!mxEvent.isConsumed(d)){var x=g,u=!1;if(k&&null!=d.clipboardData&&d.clipboardData.getData){var D=d.clipboardData.getData("text/plain"),