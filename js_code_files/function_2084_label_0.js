0;m<n.length;m++){if(this.graph.isTableCell(n[m])||this.graph.isTableRow(n[m]))return!1;if(this.graph.getModel().isVertex(n[m])){var r=this.graph.getCellGeometry(n[m]);if(null!=r&&r.relative)return!1}}return b.apply(this,arguments)};var f=mxConnectionHandler.prototype.createMarker;mxConnectionHandler.prototype.createMarker=function(){var h=f.apply(this,arguments);h.intersects=mxUtils.bind(this,function(n,u){return this.isConnecting()?!0:mxCellMarker.prototype.intersects.apply(h,arguments)});return h};