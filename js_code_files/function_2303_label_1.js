C))}}finally{e.getModel().endUpdate()}}else{C=e.model.getParent(H);var N=e.getView().scale;D=null;1==e.getSelectionCount()&&e.model.isVertex(H)&&null!=e.layoutManager&&!e.isCellLocked(H)&&(D=e.layoutManager.getLayout(C));if(null!=D&&D.constructor==mxStackLayout)B=C.getIndex(H),37==x||38==x?e.model.add(C,H,Math.max(0,B-1)):(39==x||40==x)&&e.model.add(C,H,Math.min(e.model.getChildCount(C),B+1));else{var Q=e.graphHandler;null!=Q&&(null==Q.first&&Q.start(H,0,0,e.getMovableCells(F)),null!=Q.first&&(H=
F=0,37==x?F=-B:38==x?H=-B:39==x?F=B:40==x&&(H=B),Q.currentDx+=F*N,Q.currentDy+=H*N,Q.checkPreview(),Q.updatePreview()),null!=h&&window.clearTimeout(h),h=window.setTimeout(function(){if(null!=Q.first){var T=Q.roundLength(Q.currentDx/N),R=Q.roundLength(Q.currentDy/N);Q.moveCells(Q.cells,T,R);Q.reset()}},400))}}}}var f=this,e=this.editor.graph,g=new mxKeyHandler(e),d=g.isEventIgnored;g.isEventIgnored=function(x){return!(mxEvent.isShiftDown(x)&&9==x.keyCode)&&(!this.isControlDown(x)||mxEvent.isShiftDown(x)||