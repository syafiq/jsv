EditorUi.prototype.diffPage=function(b,e){var f=[],c=[],l={};this.updatePageRoot(b);this.updatePageRoot(e);e=this.createCellLookup(e.root);var m=this.diffCellRecursive(b.root,null,e,m,c),t;for(t in e)b=e[t],f.push(this.getJsonForCell(b.cell,b.prev));mxUtils.isEmptyObject(m)||(l[EditorUi.DIFF_UPDATE]=m);0<c.length&&(l[EditorUi.DIFF_REMOVE]=c);0<f.length&&(l[EditorUi.DIFF_INSERT]=f);return l};