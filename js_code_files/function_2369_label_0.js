if(null!=D){D=D.clone();if(null!=D.points)for(var G=0;G<D.points.length;G++)z?D.points[G].x=A+(A-D.points[G].x):D.points[G].y=A+(A-D.points[G].y);G=function(K){null!=K&&(z?K.x=A+(A-K.x):K.y=A+(A-K.y))};G(D.getTerminalPoint(!0));G(D.getTerminalPoint(!1));this.model.setGeometry(t,D)}};Graph.prototype.flipChildren=function(t,z,A){this.model.beginUpdate();try{for(var D=this.model.getChildCount(t),G=0;G<D;G++){var K=this.model.getChildAt(t,G);if(this.model.isEdge(K))this.flipEdgePoints(K,z,A);else{var W=