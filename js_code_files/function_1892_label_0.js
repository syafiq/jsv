p[1].geometry.x+(p[1].geometry.width-W.x+40),p[1].geometry.y=null==da?J.geometry.y+(J.geometry.height-p[1].geometry.height)/2:(da.y+da.height)/pa-la.y+-W.y+10);return g.addCells(p,T)}finally{g.model.endUpdate()}}function R(J,V,T){J=g.getOutgoingTreeEdges(J);T=g.view.getState(T);var ca=[];if(null!=T&&null!=J){for(var Y=0;Y<J.length;Y++){var p=g.view.getState(g.model.getTerminal(J[Y],!1));null!=p&&(!V&&Math.min(p.x+p.width,T.x+T.width)>=Math.max(p.x,T.x)||V&&Math.min(p.y+p.height,T.y+T.height)>=Math.max(p.y,
T.y))&&ca.push(p)}ca.sort(function(E,Q){return V?E.x+E.width-Q.x-Q.width:E.y+E.height-Q.y-Q.height})}return ca}function d(J,V){var T=N(J),ca=V==mxConstants.DIRECTION_EAST||V==mxConstants.DIRECTION_WEST;(T==mxConstants.DIRECTION_EAST||T==mxConstants.DIRECTION_WEST)==ca&&T!=V?f.actions.get("selectParent").funct():T==V?(V=g.getOutgoingTreeEdges(J),null!=V&&0<V.length&&g.setSelectionCell(g.model.getTerminal(V[0],!1))):(T=g.getIncomingTreeEdges(J),null!=T&&0<T.length&&(ca=R(g.model.getTerminal(T[0],!0),