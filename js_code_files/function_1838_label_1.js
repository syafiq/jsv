M="curved sourcePerimeterSpacing targetPerimeterSpacing startArrow startFill startSize endArrow endFill endSize".split(" "),R=!1,G=!1;this.setDefaultStyle=function(T){try{l.getModel().isEdge(T)?G=!1:R=!1;var Z=l.getCellStyle(T,!1),X=[],ka=[],q;for(q in Z)X.push(Z[q]),ka.push(q);l.getModel().isEdge(T)?l.currentEdgeStyle={}:l.currentVertexStyle={};this.fireEvent(new mxEventObject("styleChanged","keys",ka,"values",X,"cells",[T]));l.getModel().isEdge(T)?G=!0:R=!0}catch(E){this.handleError(E)}};this.clearDefaultStyle=