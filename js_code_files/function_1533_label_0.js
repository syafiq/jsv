mxCellRenderer.registerShape("ext",T);mxUtils.extend(ca,mxCylinder);ca.prototype.redrawPath=function(c,m,v,n,t,z){z?(c.moveTo(0,0),c.lineTo(n/2,t/2),c.lineTo(n,0),c.end()):(c.moveTo(0,0),c.lineTo(n,0),c.lineTo(n,t),c.lineTo(0,t),c.close())};mxCellRenderer.registerShape("message",ca);mxUtils.extend(Y,mxShape);Y.prototype.paintBackground=function(c,m,v,n,t){c.translate(m,v);c.ellipse(n/4,0,n/2,t/4);c.fillAndStroke();c.begin();c.moveTo(n/2,t/4);c.lineTo(n/2,2*t/3);c.moveTo(n/2,t/3);c.lineTo(0,t/3);c.moveTo(n/