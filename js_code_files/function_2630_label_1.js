new mxDictionary,v=[],m=0;m<h.length;m++){var r=this.getCompositeParent(h[m]);this.isTableCell(r)&&(r=this.graph.model.getParent(r));this.isTableRow(r)&&(r=this.graph.model.getParent(r));null==r||n.get(r)||(n.put(r,!0),v.push(r))}return v};Graph.prototype.getCompositeParent=function(h){for(;this.isPart(h);){var n=this.model.getParent(h);if(!this.model.isVertex(n))break;h=n}return h};Graph.prototype.filterSelectionCells=function(h){var n=this.getSelectionCells();if(null!=h){for(var v=[],m=0;m<n.length;m++)h(n[m])||