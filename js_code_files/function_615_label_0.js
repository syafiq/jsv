Actions.prototype.init=function(){function b(F){q.escape();F=q.deleteCells(q.getDeletableCells(q.getSelectionCells()),F);null!=F&&q.setSelectionCells(F)}function e(){if(!q.isSelectionEmpty()){q.getModel().beginUpdate();try{for(var F=q.getSelectionCells(),K=0;K<F.length;K++)q.cellLabelChanged(F[K],"")}finally{q.getModel().endUpdate()}}}function k(F,K,R,d,f){f.getModel().beginUpdate();try{var g=f.getCellGeometry(F);null!=g&&R&&d&&(R/=d,g=g.clone(),1<R?g.height=g.width/R:g.width=g.height*R,f.getModel().setGeometry(F,