0),new mxPoint(n-m,0),new mxPoint(n,.5*t),new mxPoint(n-m,t),new mxPoint(m,t),new mxPoint(0,.5*t)],this.isRounded,u,!0)};mxCellRenderer.registerShape("hexagon",K);mxUtils.extend(V,mxRectangleShape);V.prototype.isHtmlAllowed=function(){return!1};V.prototype.paintForeground=function(c,m,u,n,t){var z=Math.min(n/5,t/5)+1;c.begin();c.moveTo(m+n/2,u+z);c.lineTo(m+n/2,u+t-z);c.moveTo(m+z,u+t/2);c.lineTo(m+n-z,u+t/2);c.end();c.stroke();mxRectangleShape.prototype.paintForeground.apply(this,arguments)};mxCellRenderer.registerShape("plus",