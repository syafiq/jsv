Graph.removeKeys(D,function(G){return 0>mxUtils.indexOf(R,G)});this.updateCellStyles(D,M)};Graph.prototype.updateCellStyles=function(D,M){this.model.beginUpdate();try{for(var R=0;R<M.length;R++)if(this.model.isVertex(M[R])||this.model.isEdge(M[R])){var G=this.getCellStyle(M[R],!1),L;for(L in D){var Q=D[L];G[L]!=Q&&this.setCellStyles(L,Q,[M[R]])}}}finally{this.model.endUpdate()}};Graph.prototype.isFastZoomEnabled=function(){return"nocss"!=urlParams.zoom&&!mxClient.NO_FO&&!mxClient.IS_EDGE&&!this.useCssTransforms&&