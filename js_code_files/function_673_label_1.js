[ha,ma,xa])})};mxCellEditor.prototype.isContentEditing=function(){var y=this.graph.view.getState(this.editingCell);return null!=y&&1==y.style.html};mxCellEditor.prototype.isTableSelected=function(){return null!=this.graph.getParentByName(this.graph.getSelectedElement(),"TABLE",this.textarea)};mxCellEditor.prototype.isTextSelected=function(){var y="";window.getSelection?y=window.getSelection():document.getSelection?y=document.getSelection():document.selection&&(y=document.selection.createRange().text);