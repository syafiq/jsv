f);var d=this.hoverIcons.drag;this.hoverIcons.drag=function(){b.hideShapePicker();d.apply(this,arguments)};var h=this.hoverIcons.execute;this.hoverIcons.execute=function(v,m,r){var x=r.getEvent();this.graph.isCloneEvent(x)||mxEvent.isShiftDown(x)?h.apply(this,arguments):this.graph.connectVertex(v.cell,m,this.graph.defaultEdgeLength,x,null,null,mxUtils.bind(this,function(B,D,F){var H=a.getCompositeParent(v.cell);B=a.getCellGeometry(H);for(r.consume();null!=H&&a.model.isVertex(H)&&null!=B&&B.relative;)cell=