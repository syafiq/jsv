(this.secondDiv.parentNode.removeChild(this.secondDiv),this.secondDiv=null)),z.consume()}};var X=mxRubberband.prototype.reset;mxRubberband.prototype.reset=function(){null!=this.secondDiv&&(this.secondDiv.parentNode.removeChild(this.secondDiv),this.secondDiv=null);X.apply(this,arguments)};var ea=(new Date).getTime(),sa=0,ua=mxEdgeHandler.prototype.updatePreviewState;mxEdgeHandler.prototype.updatePreviewState=function(t,z,A,D){ua.apply(this,arguments);A!=this.currentTerminalState?(ea=(new Date).getTime(),
sa=0):sa=(new Date).getTime()-ea;this.currentTerminalState=A};var Ja=mxEdgeHandler.prototype.isOutlineConnectEvent;mxEdgeHandler.prototype.isOutlineConnectEvent=function(t){return mxEvent.isShiftDown(t.getEvent())&&mxEvent.isAltDown(t.getEvent())?!1:null!=this.currentTerminalState&&t.getState()==this.currentTerminalState&&2E3<sa||(null==this.currentTerminalState||"0"!=mxUtils.getValue(this.currentTerminalState.style,"outlineConnect","1"))&&Ja.apply(this,arguments)};mxEdgeHandler.prototype.createHandleShape=