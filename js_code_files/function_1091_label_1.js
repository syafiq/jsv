EditorUi.prototype.diffPage=function(b,g){var k=[],d=[],t={};this.updatePageRoot(b);this.updatePageRoot(g);g=this.createCellLookup(g.root);var v=this.diffCellRecursive(b.root,null,g,v,d),B;for(B in g)b=g[B],k.push(this.getJsonForCell(b.cell,b.prev));mxUtils.isEmptyObject(v)||(t[EditorUi.DIFF_UPDATE]=v);0<d.length&&(t[EditorUi.DIFF_REMOVE]=d);0<k.length&&(t[EditorUi.DIFF_INSERT]=k);return t};