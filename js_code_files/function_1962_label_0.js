"boundedLbl",!1)){var k=mxUtils.getValue(this.style,"size",15);return new mxRectangle(0,Math.min(c.height*this.scale,k*this.scale),0,Math.max(0,k*this.scale))}return null};mxUtils.extend(S,mxActor);S.prototype.size=.2;S.prototype.fixedSize=20;S.prototype.isRoundable=function(){return!0};S.prototype.redrawPath=function(c,k,q,l,p){k="0"!=mxUtils.getValue(this.style,"fixedSize","0")?Math.max(0,Math.min(l,parseFloat(mxUtils.getValue(this.style,"size",this.fixedSize)))):l*Math.max(0,Math.min(1,parseFloat(mxUtils.getValue(this.style,
"size",this.size))));q=mxUtils.getValue(this.style,mxConstants.STYLE_ARCSIZE,mxConstants.LINE_ARCSIZE)/2;this.addPoints(c,[new mxPoint(0,p),new mxPoint(k,0),new mxPoint(l,0),new mxPoint(l-k,p)],this.isRounded,q,!0);c.end()};mxCellRenderer.registerShape("parallelogram",S);mxUtils.extend(R,mxActor);R.prototype.size=.2;R.prototype.fixedSize=20;R.prototype.isRoundable=function(){return!0};R.prototype.redrawPath=function(c,k,q,l,p){k="0"!=mxUtils.getValue(this.style,"fixedSize","0")?Math.max(0,Math.min(.5*