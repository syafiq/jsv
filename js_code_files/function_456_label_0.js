f);var d=this.hoverIcons.drag;this.hoverIcons.drag=function(){b.hideShapePicker();d.apply(this,arguments)};var h=this.hoverIcons.execute;this.hoverIcons.execute=function(u,m,r){var x=r.getEvent();this.graph.isCloneEvent(x)||mxEvent.isShiftDown(x)?h.apply(this,arguments):this.graph.connectVertex(u.cell,m,this.graph.defaultEdgeLength,x,null,null,mxUtils.bind(this,function(B,C,F){var H=a.getCompositeParent(u.cell);B=a.getCellGeometry(H);for(r.consume();null!=H&&a.model.isVertex(H)&&null!=B&&B.relative;)cell=
H,H=a.model.getParent(cell),B=a.getCellGeometry(H);window.setTimeout(mxUtils.bind(this,function(){b.showShapePicker(r.getGraphX(),r.getGraphY(),H,mxUtils.bind(this,function(E){F(E);null!=b.hoverIcons&&b.hoverIcons.update(a.view.getState(E))}),m)}),30)}),mxUtils.bind(this,function(B){this.graph.selectCellsForConnectVertex(B,x,this)}))};var n=null;this.hoverIcons.addListener("focus",mxUtils.bind(this,function(u,m){null!=n&&window.clearTimeout(n);n=window.setTimeout(mxUtils.bind(this,function(){var r=