this.importXml(d,J,J),x.setSelectionCells(A);else if(f&&1==x.getSelectionCount()){J=x.getStartEditingCell(x.getSelectionCell(),v);if(/\.(gif|jpg|jpeg|tiff|png|svg)$/i.test(d)&&"image"==x.getCurrentCellStyle(J)[mxConstants.STYLE_SHAPE])x.setCellStyles(mxConstants.STYLE_IMAGE,d,[J]);else{x.model.beginUpdate();try{x.labelChanged(J,d),Graph.isLink(d)&&x.setLinkForCell(J,d)}finally{x.model.endUpdate()}}x.setSelectionCell(J)}else A=x.getInsertPoint(),x.isMouseInsertPoint()&&(J=0,x.lastPasteXml==d&&0<x.pasteCounter&&
x.pasteCounter--),A=this.insertTextAt(d,A.x+J,A.y+J,!0),x.setSelectionCells(A);x.isSelectionEmpty()||(x.scrollCellToVisible(x.getSelectionCell()),null!=this.hoverIcons&&this.hoverIcons.update(x.view.getState(x.getSelectionCell())));return A};EditorUi.prototype.pasteCells=function(d,f,g,v){if(!mxEvent.isConsumed(d)){var x=f,A=!1;if(g&&null!=d.clipboardData&&d.clipboardData.getData){var J=d.clipboardData.getData("text/plain"),H=!1;if(null!=J&&0<J.length&&"%3CmxGraphModel%3E"==J.substring(0,18))try{var O=