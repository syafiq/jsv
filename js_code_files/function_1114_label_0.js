k=l*Math.max(0,Math.min(1,parseFloat(mxUtils.getValue(this.style,"size",this.size))));q=mxUtils.getValue(this.style,mxConstants.STYLE_ARCSIZE,mxConstants.LINE_ARCSIZE)/2;this.addPoints(c,[new mxPoint(l,0),new mxPoint(k,0),new mxPoint(k,p/2),new mxPoint(0,p/2),new mxPoint(k,p/2),new mxPoint(k,p),new mxPoint(l,p)],this.isRounded,q,!1);c.end()};mxCellRenderer.registerShape("curlyBracket",ba);mxUtils.extend(T,mxActor);T.prototype.redrawPath=function(c,k,q,l,p){c.setStrokeWidth(1);c.setFillColor(this.stroke);
k=l/5;c.rect(0,0,k,p);c.fillAndStroke();c.rect(2*k,0,k,p);c.fillAndStroke();c.rect(4*k,0,k,p);c.fillAndStroke()};mxCellRenderer.registerShape("parallelMarker",T);P.prototype.moveTo=function(c,k){this.originalMoveTo.apply(this.canvas,arguments);this.lastX=c;this.lastY=k;this.firstX=c;this.firstY=k};P.prototype.close=function(){null!=this.firstX&&null!=this.firstY&&(this.lineTo(this.firstX,this.firstY),this.originalClose.apply(this.canvas,arguments));this.originalClose.apply(this.canvas,arguments)};