t-m),new mxPoint(n/2,t),new mxPoint(0,t-m)],this.isRounded,u,!0);c.end()};mxCellRenderer.registerShape("offPageConnector",ha);mxUtils.extend(ma,mxEllipse);ma.prototype.paintVertexShape=function(c,m,u,n,t){mxEllipse.prototype.paintVertexShape.apply(this,arguments);c.begin();c.moveTo(m+n/2,u+t);c.lineTo(m+n,u+t);c.end();c.stroke()};mxCellRenderer.registerShape("tapeData",ma);mxUtils.extend(xa,mxEllipse);xa.prototype.paintVertexShape=function(c,m,u,n,t){mxEllipse.prototype.paintVertexShape.apply(this,