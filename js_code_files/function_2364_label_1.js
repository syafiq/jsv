Math.round(Q))];null!=T[ba]?(T[ba].points=S,T[ba].redraw()):(S=new mxPolyline(S,this.pageBreakColor),S.dialect=this.dialect,S.isDashed=this.pageBreakDashed,S.pointerEvents=!1,S.init(this.view.backgroundPane),S.redraw(),T[ba]=S)}for(ba=R;ba<T.length;ba++)T[ba].destroy();T.splice(R,T.length-R)}});h(this.horizontalPageBreaks);h(this.verticalPageBreaks)};var b=mxGraphHandler.prototype.shouldRemoveCellsFromParent;mxGraphHandler.prototype.shouldRemoveCellsFromParent=function(h,n,v){for(var m=0;m<n.length;m++){if(this.graph.isTableCell(n[m])||
this.graph.isTableRow(n[m]))return!1;if(this.graph.getModel().isVertex(n[m])){var r=this.graph.getCellGeometry(n[m]);if(null!=r&&r.relative)return!1}}return b.apply(this,arguments)};var f=mxConnectionHandler.prototype.createMarker;mxConnectionHandler.prototype.createMarker=function(){var h=f.apply(this,arguments);h.intersects=mxUtils.bind(this,function(n,v){return this.isConnecting()?!0:mxCellMarker.prototype.intersects.apply(h,arguments)});return h};mxGraphView.prototype.createBackgroundPageShape=