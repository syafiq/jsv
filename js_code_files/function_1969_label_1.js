null==D&&(D=R.hasAttribute(M)?null!=R.getAttribute(M)?R.getAttribute(M):"":null)),R=this.model.getParent(R);null==D&&(D=this.getGlobalVariable(M));null==D&&null!=k&&(D=k[M])}l.push(e.substring(C,match.index)+(null!=D?D:p));C=match.index+p.length}}l.push(e.substring(C))}return l.join("")};Graph.prototype.restoreSelection=function(b){if(null!=b&&0<b.length){for(var e=[],k=0;k<b.length;k++){var l=this.model.getCell(b[k].id);null!=l&&e.push(l)}this.setSelectionCells(e)}else this.clearSelection()};