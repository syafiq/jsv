n,parseFloat(mxUtils.getValue(this.style,"size",this.fixedSize)))):n*Math.max(0,Math.min(.5,parseFloat(mxUtils.getValue(this.style,"size",this.size))));u=mxUtils.getValue(this.style,mxConstants.STYLE_ARCSIZE,mxConstants.LINE_ARCSIZE)/2;this.addPoints(c,[new mxPoint(0,t),new mxPoint(m,0),new mxPoint(n-m,0),new mxPoint(n,t)],this.isRounded,u,!0)};mxCellRenderer.registerShape("trapezoid",O);mxUtils.extend(F,mxActor);F.prototype.size=.5;F.prototype.redrawPath=function(c,m,u,n,t){c.setFillColor(null);
m=n*Math.max(0,Math.min(1,parseFloat(mxUtils.getValue(this.style,"size",this.size))));u=mxUtils.getValue(this.style,mxConstants.STYLE_ARCSIZE,mxConstants.LINE_ARCSIZE)/2;this.addPoints(c,[new mxPoint(n,0),new mxPoint(m,0),new mxPoint(m,t/2),new mxPoint(0,t/2),new mxPoint(m,t/2),new mxPoint(m,t),new mxPoint(n,t)],this.isRounded,u,!1);c.end()};mxCellRenderer.registerShape("curlyBracket",F);mxUtils.extend(ea,mxActor);ea.prototype.redrawPath=function(c,m,u,n,t){c.setStrokeWidth(1);c.setFillColor(this.stroke);