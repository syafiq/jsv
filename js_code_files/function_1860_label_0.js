function(){return mxUtils.getNumber(this.style,"width",this.defaultWidth)+Math.max(0,this.strokewidth-1)};mxCellRenderer.registerShape("flexArrow",ab);mxUtils.extend(Ya,mxActor);Ya.prototype.size=30;Ya.prototype.isRoundable=function(){return!0};Ya.prototype.redrawPath=function(c,k,q,l,p){k=Math.min(p,parseFloat(mxUtils.getValue(this.style,"size",this.size)));q=mxUtils.getValue(this.style,mxConstants.STYLE_ARCSIZE,mxConstants.LINE_ARCSIZE)/2;this.addPoints(c,[new mxPoint(0,p),new mxPoint(0,k),new mxPoint(l,
0),new mxPoint(l,p)],this.isRounded,q,!0);c.end()};mxCellRenderer.registerShape("manualInput",Ya);mxUtils.extend(Va,mxRectangleShape);Va.prototype.dx=20;Va.prototype.dy=20;Va.prototype.isHtmlAllowed=function(){return!1};Va.prototype.paintForeground=function(c,k,q,l,p){mxRectangleShape.prototype.paintForeground.apply(this,arguments);var v=0;if(this.isRounded){var w=mxUtils.getValue(this.style,mxConstants.STYLE_ARCSIZE,100*mxConstants.RECTANGLE_ROUNDING_FACTOR)/100;v=Math.max(v,Math.min(l*w,p*w))}w=