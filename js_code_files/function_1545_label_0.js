e);mxUtils.extend(k,e);k.prototype.paintForeground=function(){};mxCellRenderer.registerShape("tableRow",k);mxUtils.extend(l,mxCylinder);l.prototype.size=20;l.prototype.darkOpacity=0;l.prototype.darkOpacity2=0;l.prototype.paintVertexShape=function(c,m,v,n,t){var z=Math.max(0,Math.min(n,Math.min(t,parseFloat(mxUtils.getValue(this.style,"size",this.size))))),C=Math.max(-1,Math.min(1,parseFloat(mxUtils.getValue(this.style,"darkOpacity",this.darkOpacity)))),fa=Math.max(-1,Math.min(1,parseFloat(mxUtils.getValue(this.style,