c.setStrokeColor(this.stroke)}};mxCellRenderer.registerShape("partialRectangle",Sa);mxUtils.extend(Ta,mxEllipse);Ta.prototype.paintVertexShape=function(c,m,v,n,t){mxEllipse.prototype.paintVertexShape.apply(this,arguments);c.setShadow(!1);c.begin();"vertical"==mxUtils.getValue(this.style,"line")?(c.moveTo(m+n/2,v),c.lineTo(m+n/2,v+t)):(c.moveTo(m,v+t/2),c.lineTo(m+n,v+t/2));c.end();c.stroke()};mxCellRenderer.registerShape("lineEllipse",Ta);mxUtils.extend(Ja,mxActor);Ja.prototype.redrawPath=function(c,
m,v,n,t){m=Math.min(n,t/2);c.moveTo(0,0);c.lineTo(n-m,0);c.quadTo(n,0,n,t/2);c.quadTo(n,t,n-m,t);c.lineTo(0,t);c.close();c.end()};mxCellRenderer.registerShape("delay",Ja);mxUtils.extend(Ia,mxActor);Ia.prototype.size=.2;Ia.prototype.redrawPath=function(c,m,v,n,t){m=Math.min(t,n);var z=Math.max(0,Math.min(m,m*parseFloat(mxUtils.getValue(this.style,"size",this.size))));m=(t-z)/2;v=m+z;var C=(n-z)/2;z=C+z;c.moveTo(0,m);c.lineTo(C,m);c.lineTo(C,0);c.lineTo(z,0);c.lineTo(z,m);c.lineTo(n,m);c.lineTo(n,v);