EditorUi.prototype.initClipboard=function(){var b=this,e=mxClipboard.cut;mxClipboard.cut=function(q){q.cellEditor.isContentEditing()?document.execCommand("cut",!1,null):e.apply(this,arguments);b.updatePasteActionStates()};mxClipboard.copy=function(q){var D=null;if(q.cellEditor.isContentEditing())document.execCommand("copy",!1,null);else{D=D||q.getSelectionCells();D=q.getExportableCells(q.model.getTopmostCells(D));for(var N={},S=q.createCellLookup(D),F=q.cloneCells(D,null,N),K=new mxGraphModel,R=K.getChildAt(K.getRoot(),