Graph.removeKeys(h,function(m){return 0>mxUtils.indexOf(u,m)});this.updateCellStyles(h,n)};Graph.prototype.updateCellStyles=function(h,n){this.model.beginUpdate();try{for(var u=0;u<n.length;u++)if(this.model.isVertex(n[u])||this.model.isEdge(n[u])){var m=this.getCellStyle(n[u],!1),r;for(r in h){var x=h[r];m[r]!=x&&this.setCellStyles(r,x,[n[u]])}}}finally{this.model.endUpdate()}};Graph.prototype.isFastZoomEnabled=function(){return"nocss"!=urlParams.zoom&&!mxClient.NO_FO&&!mxClient.IS_EDGE&&!this.useCssTransforms&&