function(y,L){Q.apply(this,arguments);mxEvent.isTouchEvent(L.getEvent())&&this.graph.isCellSelected(L.getCell())&&1<this.graph.getSelectionCount()&&(this.delayedSelection=!1)}}else mxPanningHandler.prototype.isPanningTrigger=function(y){var L=y.getEvent();return mxEvent.isLeftMouseButton(L)&&(this.useLeftButtonForPanning&&null==y.getState()||mxEvent.isControlDown(L)&&!mxEvent.isShiftDown(L))||this.usePopupTrigger&&mxEvent.isPopupTrigger(L)};mxRubberband.prototype.isSpaceEvent=function(y){return this.graph.isEnabled()&&