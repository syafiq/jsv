mxShape);W.prototype.getLabelBounds=function(c){return new mxRectangle(c.x,c.y+c.height/8,c.width,7*c.height/8)};W.prototype.paintBackground=function(c,k,q,l,p){c.translate(k,q);c.begin();c.moveTo(3*l/8,p/8*1.1);c.lineTo(5*l/8,0);c.end();c.stroke();c.ellipse(0,p/8,l,7*p/8);c.fillAndStroke()};W.prototype.paintForeground=function(c,k,q,l,p){c.begin();c.moveTo(3*l/8,p/8*1.1);c.lineTo(5*l/8,p/4);c.end();c.stroke()};mxCellRenderer.registerShape("umlControl",W);mxUtils.extend(da,mxRectangleShape);da.prototype.size=