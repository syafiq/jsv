M==mxConstants.DIRECTION_WEST?-1:1,0<=E&&E<=T.length-1&&g.setSelectionCell(T[E].cell)))))}var e=this,g=e.editor.graph,n=g.getModel(),q=e.menus.createPopupMenu;e.menus.createPopupMenu=function(E,M,P){q.apply(this,arguments);if(1==g.getSelectionCount()){M=g.getSelectionCell();var T=g.getOutgoingTreeEdges(M);E.addSeparator();0<T.length&&(d(g.getSelectionCell())&&this.addMenuItems(E,["selectChildren"],null,P),this.addMenuItems(E,["selectDescendants"],null,P));d(g.getSelectionCell())?(E.addSeparator(),
0<g.getIncomingTreeEdges(M).length&&this.addMenuItems(E,["selectSiblings","selectParent"],null,P)):0<g.model.getEdgeCount(M)&&this.addMenuItems(E,["selectConnections"],null,P)}};e.actions.addAction("selectChildren",function(){if(g.isEnabled()&&1==g.getSelectionCount()){var E=g.getSelectionCell();E=g.getOutgoingTreeEdges(E);if(null!=E){for(var M=[],P=0;P<E.length;P++)M.push(g.model.getTerminal(E[P],!1));g.setSelectionCells(M)}}},null,null,"Alt+Shift+X");e.actions.addAction("selectSiblings",function(){if(g.isEnabled()&&