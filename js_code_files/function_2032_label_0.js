1;return L};mxVertexHandler.prototype.rotationHandleVSpacing=-12;mxVertexHandler.prototype.getRotationHandlePosition=function(){var y=this.getHandlePadding();return new mxPoint(this.bounds.x+this.bounds.width-this.rotationHandleVSpacing+y.x/2,this.bounds.y+this.rotationHandleVSpacing-y.y/2)};mxVertexHandler.prototype.isRecursiveResize=function(y,L){return this.graph.isRecursiveVertexResize(y)&&!mxEvent.isAltDown(L.getEvent())};mxVertexHandler.prototype.isCenteredEvent=function(y,L){return mxEvent.isControlDown(L.getEvent())||
mxEvent.isMetaDown(L.getEvent())};var ba=mxVertexHandler.prototype.isRotationHandleVisible;mxVertexHandler.prototype.isRotationHandleVisible=function(){return ba.apply(this,arguments)&&!this.graph.isTableCell(this.state.cell)&&!this.graph.isTableRow(this.state.cell)&&!this.graph.isTable(this.state.cell)};mxVertexHandler.prototype.getSizerBounds=function(){return this.graph.isTableCell(this.state.cell)?this.graph.view.getState(this.graph.model.getParent(this.graph.model.getParent(this.state.cell))):