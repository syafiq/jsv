this.graphHandler.start=function(K,V,T,Z){var X=!1;this.graph.isTableCell(K)&&(this.graph.isCellSelected(K)?X=!0:K=this.graph.model.getParent(K));X||this.graph.isTableRow(K)&&this.graph.isCellSelected(K)||(K=this.graph.getCompositeParent(K));f.apply(this,arguments)};this.connectionHandler.createTargetVertex=function(K,V){V=this.graph.getCompositeParent(V);return mxConnectionHandler.prototype.createTargetVertex.apply(this,arguments)};var g=new mxRubberband(this);this.getRubberband=function(){return g};