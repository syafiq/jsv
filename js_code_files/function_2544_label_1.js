!1,null)}};EditorUi.prototype.copyXml=function(){var c=null;if(Editor.enableNativeCipboard){var e=this.editor.graph;e.isSelectionEmpty()||(c=mxUtils.sortCells(e.getExportableCells(e.model.getTopmostCells(e.getSelectionCells()))),e=mxUtils.getXml(e.encodeCells(c)),navigator.clipboard.writeText(e))}return c};EditorUi.prototype.pasteXml=function(c,e,f,n){var p=this.editor.graph,q=null;p.lastPasteXml==c?p.pasteCounter++:(p.lastPasteXml=c,p.pasteCounter=0);var y=p.pasteCounter*p.gridSize;if(f||this.isCompatibleString(c))q=