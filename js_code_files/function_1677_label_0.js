n,new mxRectangle(c.x,c.y+m,v,n-2*m);m*=v;return new mxRectangle(c.x+m,c.y,v-2*m,n)}return c};mxCellRenderer.registerShape("tape",A);mxUtils.extend(H,mxActor);H.prototype.size=.3;H.prototype.getLabelMargins=function(c){return mxUtils.getValue(this.style,"boundedLbl",!1)?new mxRectangle(0,0,0,parseFloat(mxUtils.getValue(this.style,"size",this.size))*c.height):null};H.prototype.redrawPath=function(c,m,v,n,t){m=t*Math.max(0,Math.min(1,parseFloat(mxUtils.getValue(this.style,"size",this.size))));c.moveTo(0,
0);c.lineTo(n,0);c.lineTo(n,t-m/2);c.quadTo(3*n/4,t-1.4*m,n/2,t-m/2);c.quadTo(n/4,t-m*(1-1.4),0,t-m/2);c.lineTo(0,m/2);c.close();c.end()};mxCellRenderer.registerShape("document",H);var nb=mxCylinder.prototype.getCylinderSize;mxCylinder.prototype.getCylinderSize=function(c,m,v,n){var t=mxUtils.getValue(this.style,"size");return null!=t?n*Math.max(0,Math.min(1,t)):nb.apply(this,arguments)};mxCylinder.prototype.getLabelMargins=function(c){if(mxUtils.getValue(this.style,"boundedLbl",!1)){var m=2*mxUtils.getValue(this.style,