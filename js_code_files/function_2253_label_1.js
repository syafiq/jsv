c,m,u,n,z):(B=this.state.view.graph.cellRenderer.getShape(B),null!=B&&B!=ba&&(B=new B,B.apply(this.state),c.save(),B.paintVertexShape(c,m,u,n,z),c.restore()));z<t&&(c.setDashed("1"==mxUtils.getValue(this.style,"lifelineDashed","1")),c.begin(),c.moveTo(m+n/2,u+z),c.lineTo(m+n/2,u+t),c.end(),c.stroke())};ba.prototype.paintForeground=function(c,m,u,n,t){var z=Math.max(0,Math.min(t,parseFloat(mxUtils.getValue(this.style,"size",this.size))));mxRectangleShape.prototype.paintForeground.call(this,c,m,u,n,
Math.min(t,z))};mxCellRenderer.registerShape("umlLifeline",ba);mxUtils.extend(U,mxShape);U.prototype.width=60;U.prototype.height=30;U.prototype.corner=10;U.prototype.getLabelMargins=function(c){return new mxRectangle(0,0,c.width-parseFloat(mxUtils.getValue(this.style,"width",this.width)*this.scale),c.height-parseFloat(mxUtils.getValue(this.style,"height",this.height)*this.scale))};U.prototype.paintBackground=function(c,m,u,n,t){var z=this.corner,B=Math.min(n,Math.max(z,parseFloat(mxUtils.getValue(this.style,