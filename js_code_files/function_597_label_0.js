function(c,k,q,l,p){var v=l/2,w=p/2,I=mxUtils.getValue(this.style,mxConstants.STYLE_ARCSIZE,mxConstants.LINE_ARCSIZE)/2;c.begin();this.addPoints(c,[new mxPoint(k+v,q),new mxPoint(k+l,q+w),new mxPoint(k+v,q+p),new mxPoint(k,q+w)],this.isRounded,I,!0);c.stroke();mxRectangleShape.prototype.paintForeground.apply(this,arguments)};mxCellRenderer.registerShape("associativeEntity",Ea);mxUtils.extend(Ua,mxDoubleEllipse);Ua.prototype.outerStroke=!0;Ua.prototype.paintVertexShape=function(c,k,q,l,p){var v=Math.min(4,
Math.min(l/5,p/5));0<l&&0<p&&(c.ellipse(k+v,q+v,l-2*v,p-2*v),c.fillAndStroke());c.setShadow(!1);this.outerStroke&&(c.ellipse(k,q,l,p),c.stroke())};mxCellRenderer.registerShape("endState",Ua);mxUtils.extend(db,Ua);db.prototype.outerStroke=!1;mxCellRenderer.registerShape("startState",db);mxUtils.extend(Ta,mxArrowConnector);Ta.prototype.defaultWidth=4;Ta.prototype.isOpenEnded=function(){return!0};Ta.prototype.getEdgeWidth=function(){return mxUtils.getNumber(this.style,"width",this.defaultWidth)+Math.max(0,