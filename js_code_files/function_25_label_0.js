!1;v.connectionHandler.createEdgeState=function(n){n=v.createEdge(null,null,null,null,null,A);return new mxCellState(this.graph.view,n,this.graph.getCellStyle(n))};var F=v.getDefaultParent(),I=mxUtils.bind(this,function(n){var q=new mxCellOverlay(this.connectImage,"Add outgoing");q.cursor="hand";q.addListener(mxEvent.CLICK,function(p,y){v.connectionHandler.reset();v.clearSelection();var B=v.getCellGeometry(n),G;N(function(){G=v.insertVertex(F,null,"Entry",B.x,B.y,80,30,"rounded=1;");I(G);v.view.refresh(G);