null:this.getSelectionCells())}));this.addListener(mxEvent.TAP_AND_HOLD,mxUtils.bind(this,function(K,V){if(!mxEvent.isMultiTouchEvent(V)){K=V.getProperty("event");var T=V.getProperty("cell");null==T?(K=mxUtils.convertPoint(this.container,mxEvent.getClientX(K),mxEvent.getClientY(K)),g.start(K.x,K.y)):null!=qa?this.addSelectionCells(qa):1<this.getSelectionCount()&&this.isCellSelected(T)&&this.removeSelectionCell(T);qa=null;V.consume()}}));this.connectionHandler.selectCells=function(K,V){this.graph.setSelectionCell(V||
K)};this.connectionHandler.constraintHandler.isStateIgnored=function(K,V){var T=K.view.graph;return V&&(T.isCellSelected(K.cell)||T.isTableRow(K.cell)&&T.selectionCellsHandler.isHandled(T.model.getParent(K.cell)))};this.selectionModel.addListener(mxEvent.CHANGE,mxUtils.bind(this,function(){var K=this.connectionHandler.constraintHandler;null!=K.currentFocus&&K.isStateIgnored(K.currentFocus,!0)&&(K.currentFocus=null,K.constraints=null,K.destroyIcons());K.destroyFocusHighlight()}));Graph.touchStyle&&