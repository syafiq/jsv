DrawioFile.prototype.patch=function(b,e,k){if(null!=b){var l=this.ui.editor.undoManager,B=l.history.slice(),q=l.indexOfNextAdd,D=this.ui.editor.graph;D.container.style.visibility="hidden";var N=this.changeListenerEnabled;this.changeListenerEnabled=k;var S=D.foldingEnabled,F=D.mathEnabled,K=D.cellRenderer.redraw;D.cellRenderer.redraw=function(R){R.view.graph.isEditing(R.cell)&&(R.view.graph.scrollCellToVisible(R.cell),R.view.graph.cellEditor.resize());K.apply(this,arguments)};D.model.beginUpdate();