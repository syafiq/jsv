ha);mxUtils.extend(ea,mxEllipse);ea.prototype.paintVertexShape=function(c,k,q,l,p){mxEllipse.prototype.paintVertexShape.apply(this,arguments);c.setShadow(!1);c.begin();c.moveTo(k+.145*l,q+.145*p);c.lineTo(k+.855*l,q+.855*p);c.end();c.stroke();c.begin();c.moveTo(k+.855*l,q+.145*p);c.lineTo(k+.145*l,q+.855*p);c.end();c.stroke()};mxCellRenderer.registerShape("sumEllipse",ea);mxUtils.extend(ka,mxRhombus);ka.prototype.paintVertexShape=function(c,k,q,l,p){mxRhombus.prototype.paintVertexShape.apply(this,