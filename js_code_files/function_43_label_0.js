y.text.boundingBox,new mxRectangle(Math.round(L.x),Math.round(L.y),Math.round(L.width),Math.round(L.height))):za.apply(this,arguments)};var ya=mxVertexHandler.prototype.mouseDown;mxVertexHandler.prototype.mouseDown=function(y,L){var O=this.graph.getModel(),U=O.getParent(this.state.cell),aa=this.graph.getCellGeometry(this.state.cell);(this.getHandleForEvent(L)==mxEvent.ROTATION_HANDLE||!O.isEdge(U)||null==aa||!aa.relative||null==this.state||2<=this.state.width||2<=this.state.height)&&ya.apply(this,
arguments)};mxVertexHandler.prototype.rotateClick=function(){var y=mxUtils.getValue(this.state.style,mxConstants.STYLE_STROKECOLOR,mxConstants.NONE),L=mxUtils.getValue(this.state.style,mxConstants.STYLE_FILLCOLOR,mxConstants.NONE);this.state.view.graph.model.isVertex(this.state.cell)&&y==mxConstants.NONE&&L==mxConstants.NONE?(y=mxUtils.mod(mxUtils.getValue(this.state.style,mxConstants.STYLE_ROTATION,0)+90,360),this.state.view.graph.setCellStyles(mxConstants.STYLE_ROTATION,y,[this.state.cell])):this.state.view.graph.turnShapes([this.state.cell])};