function(t){t=this.graph.createCurrentEdgeStyle();t=this.graph.createEdge(null,null,null,null,null,t);t=new mxCellState(this.graph.view,t,this.graph.getCellStyle(t));for(var z in this.graph.currentEdgeStyle)t.style[z]=this.graph.currentEdgeStyle[z];t.style=this.graph.postProcessCellStyle(t.cell,t.style);return t};var d=mxConnectionHandler.prototype.createShape;mxConnectionHandler.prototype.createShape=function(){var t=d.apply(this,arguments);t.isDashed="1"==this.graph.currentEdgeStyle[mxConstants.STYLE_DASHED];
return t};mxConnectionHandler.prototype.updatePreview=function(t){};var h=mxConnectionHandler.prototype.createMarker;mxConnectionHandler.prototype.createMarker=function(){var t=h.apply(this,arguments),z=t.getCell;t.getCell=mxUtils.bind(this,function(A){var E=z.apply(this,arguments);this.error=null;return E});return t};Graph.prototype.defaultVertexStyle={};Graph.prototype.defaultEdgeStyle={edgeStyle:"orthogonalEdgeStyle",rounded:"0",jettySize:"auto",orthogonalLoop:"1"};Graph.prototype.createCurrentEdgeStyle=