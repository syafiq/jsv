z))};mxCellRenderer.registerShape("umlLifeline",W);mxUtils.extend(X,mxShape);X.prototype.width=60;X.prototype.height=30;X.prototype.corner=10;X.prototype.getLabelMargins=function(c){return new mxRectangle(0,0,c.width-parseFloat(mxUtils.getValue(this.style,"width",this.width)*this.scale),c.height-parseFloat(mxUtils.getValue(this.style,"height",this.height)*this.scale))};X.prototype.paintBackground=function(c,m,v,n,t){var z=this.corner,C=Math.min(n,Math.max(z,parseFloat(mxUtils.getValue(this.style,
"width",this.width)))),fa=Math.min(t,Math.max(1.5*z,parseFloat(mxUtils.getValue(this.style,"height",this.height)))),I=mxUtils.getValue(this.style,mxConstants.STYLE_SWIMLANE_FILLCOLOR,mxConstants.NONE);I!=mxConstants.NONE&&(c.setFillColor(I),c.rect(m,v,n,t),c.fill());null!=this.fill&&this.fill!=mxConstants.NONE&&this.gradient&&this.gradient!=mxConstants.NONE?(this.getGradientBounds(c,m,v,n,t),c.setGradient(this.fill,this.gradient,m,v,n,t,this.gradientDirection)):c.setFillColor(this.fill);c.begin();
c.moveTo(m,v);c.lineTo(m+C,v);c.lineTo(m+C,v+Math.max(0,fa-1.5*z));c.lineTo(m+Math.max(0,C-z),v+fa);c.lineTo(m,v+fa);c.close();c.fillAndStroke();c.begin();c.moveTo(m+C,v);c.lineTo(m+n,v);c.lineTo(m+n,v+t);c.lineTo(m,v+t);c.lineTo(m,v+fa);c.stroke()};mxCellRenderer.registerShape("umlFrame",X);mxPerimeter.CenterPerimeter=function(c,m,v,n){return new mxPoint(c.getCenterX(),c.getCenterY())};mxStyleRegistry.putValue("centerPerimeter",mxPerimeter.CenterPerimeter);mxPerimeter.LifelinePerimeter=function(c,