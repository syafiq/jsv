c,k,q,l,v):(w=this.state.view.graph.cellRenderer.getShape(w),null!=w&&w!=ea&&(w=new w,w.apply(this.state),c.save(),w.paintVertexShape(c,k,q,l,v),c.restore()));v<p&&(c.setDashed("1"==mxUtils.getValue(this.style,"lifelineDashed","1")),c.begin(),c.moveTo(k+l/2,q+v),c.lineTo(k+l/2,q+p),c.end(),c.stroke())};ea.prototype.paintForeground=function(c,k,q,l,p){var v=Math.max(0,Math.min(p,parseFloat(mxUtils.getValue(this.style,"size",this.size))));mxRectangleShape.prototype.paintForeground.call(this,c,k,q,l,
Math.min(p,v))};mxCellRenderer.registerShape("umlLifeline",ea);mxUtils.extend(sa,mxShape);sa.prototype.width=60;sa.prototype.height=30;sa.prototype.corner=10;sa.prototype.getLabelMargins=function(c){return new mxRectangle(0,0,c.width-parseFloat(mxUtils.getValue(this.style,"width",this.width)*this.scale),c.height-parseFloat(mxUtils.getValue(this.style,"height",this.height)*this.scale))};sa.prototype.paintBackground=function(c,k,q,l,p){var v=this.corner,w=Math.min(l,Math.max(v,parseFloat(mxUtils.getValue(this.style,