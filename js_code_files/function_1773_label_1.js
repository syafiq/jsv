EditorUi.prototype.setPageVisible=function(b){var e=this.editor.graph,k=mxUtils.hasScrollbars(e.container),l=0,C=0;k&&(l=e.view.translate.x*e.view.scale-e.container.scrollLeft,C=e.view.translate.y*e.view.scale-e.container.scrollTop);e.pageVisible=b;e.pageBreaksVisible=b;e.preferPageSize=b;e.view.validateBackground();if(k){var p=e.getSelectionCells();e.clearSelection();e.setSelectionCells(p)}e.sizeDidChange();k&&(e.container.scrollLeft=e.view.translate.x*e.view.scale-l,e.container.scrollTop=e.view.translate.y*
e.view.scale-C);e.defaultPageVisible=b;this.fireEvent(new mxEventObject("pageViewChanged"))};