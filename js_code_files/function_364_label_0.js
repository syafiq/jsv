1),R=!0)}R&&this.setAttributeForCell(p[L],"tags",S.join(" "))}}}finally{this.model.endUpdate()}}};Graph.prototype.toggleCells=function(p){this.model.beginUpdate();try{for(var B=0;B<p.length;B++)this.model.setVisible(p[B],!this.model.isVisible(p[B]))}finally{this.model.endUpdate()}};Graph.prototype.setCellsVisible=function(p,B){this.model.beginUpdate();try{for(var L=0;L<p.length;L++)this.model.setVisible(p[L],B)}finally{this.model.endUpdate()}};Graph.prototype.highlightCells=function(p,B,L,Q){for(var S=
0;S<p.length;S++)this.highlightCell(p[S],B,L,Q)};Graph.prototype.highlightCell=function(p,B,L,Q,S){B=null!=B?B:mxConstants.DEFAULT_VALID_COLOR;L=null!=L?L:1E3;p=this.view.getState(p);var R=null;null!=p&&(S=null!=S?S:4,S=Math.max(S+1,mxUtils.getValue(p.style,mxConstants.STYLE_STROKEWIDTH,1)+S),R=new mxCellHighlight(this,B,S,!1),null!=Q&&(R.opacity=Q),R.highlight(p),window.setTimeout(function(){null!=R.shape&&(mxUtils.setPrefixedStyle(R.shape.node.style,"transition","all 1200ms ease-in-out"),R.shape.node.style.opacity=