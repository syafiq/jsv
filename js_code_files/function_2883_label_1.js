TableLayout.prototype.getRowLayout=function(b,e){var k=this.graph.model.getChildCells(b,!0),l=this.graph.getActualStartSize(b,!0);b=this.getSize(k,!0);e=e-l.x-l.width;var C=[];l=l.x;for(var p=0;p<k.length;p++){var D=this.graph.getCellGeometry(k[p]);null!=D&&(l+=(null!=D.alternateBounds?D.alternateBounds.width:D.width)*e/b,C.push(Math.round(l)))}return C};