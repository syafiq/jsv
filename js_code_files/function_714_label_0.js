this.graph.isEdgeIgnored(y)};var B=mxConnectionHandler.prototype.isCreateTarget;mxConnectionHandler.prototype.isCreateTarget=function(y){return this.graph.isCloneEvent(y)!=B.apply(this,arguments)};mxConstraintHandler.prototype.createHighlightShape=function(){var y=new mxEllipse(null,this.highlightColor,this.highlightColor,0);y.opacity=mxConstants.HIGHLIGHT_OPACITY;return y};mxConnectionHandler.prototype.livePreview=!0;mxConnectionHandler.prototype.cursor="crosshair";mxConnectionHandler.prototype.createEdgeState=