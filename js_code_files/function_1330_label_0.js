this.graph.isMouseDown=!0;g.hoverIcons.reset();mxEvent.consume(H)})))};var E=mxVertexHandler.prototype.redrawHandles;mxVertexHandler.prototype.redrawHandles=function(){E.apply(this,arguments);null!=this.moveHandle&&(this.moveHandle.style.left=this.state.x+this.state.width+(40>this.state.width?10:0)+2+"px",this.moveHandle.style.top=this.state.y+this.state.height+(40>this.state.height?10:0)+2+"px")};var K=mxVertexHandler.prototype.setHandlesVisible;mxVertexHandler.prototype.setHandlesVisible=function(H){K.apply(this,