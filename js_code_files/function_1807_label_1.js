X&&!ka||null!=V&&mxEvent.isShiftDown(V)||T.push(Z);return null==X||ka})}g.setSelectionCells(T)}},null,null,"Alt+Shift+D");var A=g.removeCells;g.removeCells=function(K,V){V=null!=V?V:!0;null==K&&(K=this.getDeletableCells(this.getSelectionCells()));V&&(K=this.getDeletableCells(this.addAllEdges(K)));for(var T=[],Z=0;Z<K.length;Z++){var X=K[Z];v.isEdge(X)&&p(X)&&(T.push(X),X=v.getTerminal(X,!1));if(l(X)){var ka=[];g.traverse(X,!0,function(q,E){var S=null!=E&&g.isTreeEdge(E);S&&ka.push(E);(null==E||S)&&
ka.push(q);return null==E||S});0<ka.length&&(T=T.concat(ka),X=g.getIncomingTreeEdges(K[Z]),K=K.concat(X))}else null!=X&&T.push(K[Z])}K=T;return A.apply(this,arguments)};f.hoverIcons.getStateAt=function(K,V,T){return l(K.cell)?null:this.graph.view.getState(this.graph.getCellAt(V,T))};var J=g.duplicateCells;g.duplicateCells=function(K,V){K=null!=K?K:this.getSelectionCells();for(var T=K.slice(0),Z=0;Z<T.length;Z++){var X=g.view.getState(T[Z]);if(null!=X&&l(X.cell)){var ka=g.getIncomingTreeEdges(X.cell);