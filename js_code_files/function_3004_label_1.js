EditorUi.prototype.updateSelectionStateForTableCells=function(b){if(1<b.cells.length&&b.cell){for(var e=mxUtils.sortCells(b.cells),k=this.editor.graph.model,l=k.getParent(e[0]),C=k.getParent(l),p=l.getIndex(e[0]),D=C.getIndex(l),M=null,R=1,G=1,L=0,Q=D<C.getChildCount()-1?k.getChildAt(k.getChildAt(C,D+1),p):null;L<e.length-1;){var d=e[++L];null==Q||Q!=d||null!=M&&R!=M||(M=R,R=0,G++,l=k.getParent(Q),Q=D+G<C.getChildCount()?k.getChildAt(k.getChildAt(C,D+G),p):null);var f=this.editor.graph.view.getState(d);
if(d==k.getChildAt(l,p+R)&&null!=f&&1==mxUtils.getValue(f.style,"colspan",1)&&1==mxUtils.getValue(f.style,"rowspan",1))R++;else break}L==G*R-1&&(b.mergeCell=e[0],b.colspan=R,b.rowspan=G)}};EditorUi.prototype.windowResized=function(){window.setTimeout(mxUtils.bind(this,function(){null!=this.editor.graph&&this.refresh()}),0)};