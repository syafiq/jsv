Graph.prototype.createWipeAnimations=function(b,e){for(var k=[],l=0;l<b.length;l++){var C=this.view.getState(b[l]);null!=C&&null!=C.shape&&(this.model.isEdge(C.cell)&&null!=C.absolutePoints&&1<C.absolutePoints.length?k.push(this.createEdgeWipeAnimation(C,e)):this.model.isVertex(C.cell)&&null!=C.shape.bounds&&k.push(this.createVertexWipeAnimation(C,e)))}return k};