arguments)};var F=new mxRubberband(this);this.getRubberband=function(){return F};var H=(new Date).getTime(),E=0,N=this.connectionHandler.mouseMove;this.connectionHandler.mouseMove=function(){var L=this.currentState;N.apply(this,arguments);L!=this.currentState?(H=(new Date).getTime(),E=0):E=(new Date).getTime()-H};var Q=this.connectionHandler.isOutlineConnectEvent;this.connectionHandler.isOutlineConnectEvent=function(L){return mxEvent.isShiftDown(L.getEvent())&&mxEvent.isAltDown(L.getEvent())?!1:null!=