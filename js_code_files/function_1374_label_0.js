arguments)};mxCellRenderer.registerShape("associativeEntity",ya);mxUtils.extend(ra,mxDoubleEllipse);ra.prototype.outerStroke=!0;ra.prototype.paintVertexShape=function(c,m,v,n,t){var z=Math.min(4,Math.min(n/5,t/5));0<n&&0<t&&(c.ellipse(m+z,v+z,n-2*z,t-2*z),c.fillAndStroke());c.setShadow(!1);this.outerStroke&&(c.ellipse(m,v,n,t),c.stroke())};mxCellRenderer.registerShape("endState",ra);mxUtils.extend(ta,ra);ta.prototype.outerStroke=!1;mxCellRenderer.registerShape("startState",ta);mxUtils.extend(Aa,mxArrowConnector);