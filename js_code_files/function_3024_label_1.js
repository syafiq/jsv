U=0):U=(new Date).getTime()-ba;this.currentTerminalState=P};var da=mxEdgeHandler.prototype.isOutlineConnectEvent;mxEdgeHandler.prototype.isOutlineConnectEvent=function(y){return mxEvent.isShiftDown(y.getEvent())&&mxEvent.isAltDown(y.getEvent())?!1:null!=this.currentTerminalState&&y.getState()==this.currentTerminalState&&2E3<U||(null==this.currentTerminalState||"0"!=mxUtils.getValue(this.currentTerminalState.style,"outlineConnect","1"))&&da.apply(this,arguments)};mxEdgeHandler.prototype.createHandleShape=