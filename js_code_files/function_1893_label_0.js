function(c,m,v,n,t){m=Math.max(0,Math.min(n,Math.min(t,parseFloat(mxUtils.getValue(this.style,"size",this.size)))));v=mxUtils.getValue(this.style,mxConstants.STYLE_ARCSIZE,mxConstants.LINE_ARCSIZE)/2;this.addPoints(c,[new mxPoint(m,0),new mxPoint(n,0),new mxPoint(n,t),new mxPoint(0,t),new mxPoint(0,m)],this.isRounded,v,!0);c.end()};mxCellRenderer.registerShape("card",x);mxUtils.extend(A,mxActor);A.prototype.size=.4;A.prototype.redrawPath=function(c,m,v,n,t){m=t*Math.max(0,Math.min(1,parseFloat(mxUtils.getValue(this.style,