EditorUi.prototype.clonePages=function(b){for(var f=[],k=0;k<b.length;k++)f.push(this.clonePage(b[k]));return f};EditorUi.prototype.clonePage=function(b){this.updatePageRoot(b);var f=new DiagramPage(b.node.cloneNode(!0)),k=b==this.currentPage?this.editor.graph.getViewState():b.viewState;f.viewState=mxUtils.clone(k,EditorUi.transientViewStateProperties);f.root=this.editor.graph.model.cloneCell(b.root,null,!0);return f};