12,Graph.prototype.tolerance=12,mxVertexHandler.prototype.rotationHandleVSpacing=-16,mxConstraintHandler.prototype.getTolerance=function(y){return mxEvent.isMouseEvent(y.getEvent())?4:this.graph.getTolerance()};mxPanningHandler.prototype.isPanningTrigger=function(y){var L=y.getEvent();return null==y.getState()&&!mxEvent.isMouseEvent(L)||mxEvent.isPopupTrigger(L)&&(null==y.getState()||mxEvent.isControlDown(L)||mxEvent.isShiftDown(L))};var Q=mxGraphHandler.prototype.mouseDown;mxGraphHandler.prototype.mouseDown=