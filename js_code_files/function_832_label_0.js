null,null,"Alt+Shift+V");this.addAction("copyData",function(){var F=q.getSelectionCell()||q.getModel().getRoot();q.isEnabled()&&null!=F&&(F=F.cloneValue(),null==F||isNaN(F.nodeType)||(l.copiedValue=F))},null,null,"Alt+Shift+B");this.addAction("pasteData",function(F,K){function R(g,u){var x=d.getValue(g);u=g.cloneValue(u);u.removeAttribute("placeholders");null==x||isNaN(x.nodeType)||u.setAttribute("placeholders",x.getAttribute("placeholders"));null!=F&&mxEvent.isShiftDown(F)||u.setAttribute("label",
q.convertValueToString(g));d.setValue(g,u)}F=null!=K?K:F;var d=q.getModel();if(q.isEnabled()&&!q.isSelectionEmpty()&&null!=l.copiedValue){d.beginUpdate();try{var f=q.getEditableCells(q.getSelectionCells());if(0==f.length)R(d.getRoot(),l.copiedValue);else for(K=0;K<f.length;K++)R(f[K],l.copiedValue)}finally{d.endUpdate()}}},null,null,"Alt+Shift+E");this.addAction("delete",function(F,K){F=null!=K?K:F;null!=F&&mxEvent.isShiftDown(F)?e():b(null!=F&&(mxEvent.isControlDown(F)||mxEvent.isMetaDown(F)||mxEvent.isAltDown(F)))},