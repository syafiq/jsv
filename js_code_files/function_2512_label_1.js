P;return q.apply(this,arguments)};e.hoverIcons.getStateAt=function(F,L,P){return d(F.cell)?null:this.graph.view.getState(this.graph.getCellAt(L,P))};var y=f.duplicateCells;f.duplicateCells=function(F,L){F=null!=F?F:this.getSelectionCells();for(var P=F.slice(0),U=0;U<P.length;U++){var V=f.view.getState(P[U]);if(null!=V&&d(V.cell)){var X=f.getIncomingTreeEdges(V.cell);for(V=0;V<X.length;V++)mxUtils.remove(X[V],F)}}this.model.beginUpdate();try{var m=y.call(this,F,L);if(m.length==F.length)for(U=0;U<F.length;U++)if(d(F[U])){var z=