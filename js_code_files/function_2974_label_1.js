EditorUi.prototype.removePage=function(b){try{var e=this.editor.graph,k=mxUtils.indexOf(this.pages,b);if(e.isEnabled()&&0<=k){this.editor.graph.isEditing()&&this.editor.graph.stopEditing(!1);e.model.beginUpdate();try{var l=this.currentPage;l==b&&1<this.pages.length?(k==this.pages.length-1?k--:k++,l=this.pages[k]):1>=this.pages.length&&(l=this.insertPage(),e.model.execute(new RenamePage(this,l,mxResources.get("pageWithNumber",[1]))));e.model.execute(new ChangePage(this,b,l))}finally{e.model.endUpdate()}}}catch(C){this.handleError(C)}return b};