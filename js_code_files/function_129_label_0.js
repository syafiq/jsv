Graph.prototype.setTableRowHeight=function(b,e,k){k=null!=k?k:!0;var l=this.getModel();l.beginUpdate();try{var B=this.getCellGeometry(b);if(null!=B){B=B.clone();B.height+=e;l.setGeometry(b,B);var q=l.getParent(b),D=l.getChildCells(q,!0);if(!k){var N=mxUtils.indexOf(D,b);if(N<D.length-1){var S=D[N+1],F=this.getCellGeometry(S);null!=F&&(F=F.clone(),F.y+=e,F.height-=e,l.setGeometry(S,F))}}var K=this.getCellGeometry(q);null!=K&&(k||(k=b==D[D.length-1]),k&&(K=K.clone(),K.height+=e,l.setGeometry(q,K)))}}finally{l.endUpdate()}};