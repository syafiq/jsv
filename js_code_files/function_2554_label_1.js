!this.graph.isTable(this.state.cell)};mxVertexHandler.prototype.getSizerBounds=function(){return this.graph.isTableCell(this.state.cell)?this.graph.view.getState(this.graph.model.getParent(this.graph.model.getParent(this.state.cell))):this.bounds};var fa=mxVertexHandler.prototype.isParentHighlightVisible;mxVertexHandler.prototype.isParentHighlightVisible=function(){return fa.apply(this,arguments)&&!this.graph.isTableCell(this.state.cell)&&!this.graph.isTableRow(this.state.cell)};var ra=mxVertexHandler.prototype.isCustomHandleVisible;