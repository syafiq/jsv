function(c,k,q,l,p){mxEllipse.prototype.paintVertexShape.apply(this,arguments);c.begin();c.moveTo(k+l/2,q+p);c.lineTo(k+l,q+p);c.end();c.stroke()};mxCellRenderer.registerShape("tapeData",Y);mxUtils.extend(ha,mxEllipse);ha.prototype.paintVertexShape=function(c,k,q,l,p){mxEllipse.prototype.paintVertexShape.apply(this,arguments);c.setShadow(!1);c.begin();c.moveTo(k,q+p/2);c.lineTo(k+l,q+p/2);c.end();c.stroke();c.begin();c.moveTo(k+l/2,q);c.lineTo(k+l/2,q+p);c.end();c.stroke()};mxCellRenderer.registerShape("orEllipse",