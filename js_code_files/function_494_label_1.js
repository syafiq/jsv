function(L){C.apply(this,arguments);this.graph.model.isEdge(L.cell)&&1!=L.style[mxConstants.STYLE_CURVED]&&this.updateLineJumps(L)};mxGraphView.prototype.updateLineJumps=function(L){var Q=L.absolutePoints;if(Graph.lineJumpsEnabled){var d=null!=L.routedPoints,f=null;if(null!=Q&&null!=this.validEdges&&"none"!==mxUtils.getValue(L.style,"jumpStyle","none")){var g=function(qa,sa,K){var V=new mxPoint(sa,K);V.type=qa;f.push(V);V=null!=L.routedPoints?L.routedPoints[f.length-1]:null;return null==V||V.type!=