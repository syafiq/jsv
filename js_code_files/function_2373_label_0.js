mxEvent.consume(G)}));return D};Graph.prototype.initTouch=function(){this.connectionHandler.marker.isEnabled=function(){return null!=this.graph.connectionHandler.first};this.addListener(mxEvent.START_EDITING,function(K,W){this.popupMenuHandler.hideMenu()});var t=this.updateMouseEvent;this.updateMouseEvent=function(K){K=t.apply(this,arguments);if(mxEvent.isTouchEvent(K.getEvent())&&null==K.getState()){var W=this.getCellAt(K.graphX,K.graphY);null!=W&&this.isSwimlane(W)&&this.hitsSwimlaneContent(W,K.graphX,