mxVertexHandler.prototype.rotateClick=function(){var y=mxUtils.getValue(this.state.style,mxConstants.STYLE_STROKECOLOR,mxConstants.NONE),N=mxUtils.getValue(this.state.style,mxConstants.STYLE_FILLCOLOR,mxConstants.NONE);this.state.view.graph.model.isVertex(this.state.cell)&&y==mxConstants.NONE&&N==mxConstants.NONE?(y=mxUtils.mod(mxUtils.getValue(this.state.style,mxConstants.STYLE_ROTATION,0)+90,360),this.state.view.graph.setCellStyles(mxConstants.STYLE_ROTATION,y,[this.state.cell])):this.state.view.graph.turnShapes([this.state.cell])};