(I.geometry.height-W[1].geometry.height)/2:(S.y+S.height)/X-R.y+-U.y+10);return k.addCells(W,Q)}finally{k.model.endUpdate()}}function J(I,M,Q){I=k.getOutgoingTreeEdges(I);Q=k.view.getState(Q);var P=[];if(null!=Q&&null!=I){for(var V=0;V<I.length;V++){var W=k.view.getState(k.model.getTerminal(I[V],!1));null!=W&&(!M&&Math.min(W.x+W.width,Q.x+Q.width)>=Math.max(W.x,Q.x)||M&&Math.min(W.y+W.height,Q.y+Q.height)>=Math.max(W.y,Q.y))&&P.push(W)}P.sort(function(q,D){return M?q.x+q.width-D.x-D.width:q.y+q.height-
D.y-D.height})}return P}function e(I,M){var Q=y(I),P=M==mxConstants.DIRECTION_EAST||M==mxConstants.DIRECTION_WEST;(Q==mxConstants.DIRECTION_EAST||Q==mxConstants.DIRECTION_WEST)==P&&Q!=M?g.actions.get("selectParent").funct():Q==M?(M=k.getOutgoingTreeEdges(I),null!=M&&0<M.length&&k.setSelectionCell(k.model.getTerminal(M[0],!1))):(Q=k.getIncomingTreeEdges(I),null!=Q&&0<Q.length&&(P=J(k.model.getTerminal(Q[0],!0),P,I),I=k.view.getState(I),null!=I&&(I=mxUtils.indexOf(P,I),0<=I&&(I+=M==mxConstants.DIRECTION_NORTH||