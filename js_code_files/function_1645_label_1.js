function(I,M,Q,P){var V=k.model,W=null;V.beginUpdate();try{if(W=H.apply(this,arguments),c(I))for(var q=0;q<W.length;q++)if(V.isEdge(W[q])&&null==V.getTerminal(W[q],!0)){V.setTerminal(W[q],I,!0);var D=k.getCellGeometry(W[q]);D.points=null;null!=D.getTerminalPoint(!0)&&D.setTerminalPoint(null,!0)}}finally{V.endUpdate()}return W}}var F={88:g.actions.get("selectChildren"),84:g.actions.get("selectSubtree"),80:g.actions.get("selectParent"),83:g.actions.get("selectSiblings")},T=g.onKeyDown;g.onKeyDown=function(I){try{if(k.isEnabled()&&