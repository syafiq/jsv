-m);z||(c.moveTo(0,m),c.curveTo(0,-m/3,n,-m/3,n,m),c.lineTo(n,t-m),c.curveTo(n,t+m/3,0,t+m/3,0,t-m),c.close())};N.prototype.getLabelMargins=function(c){return new mxRectangle(0,2.5*Math.min(c.height/2,Math.round(c.height/8)+this.strokewidth-1),0,0)};mxCellRenderer.registerShape("datastore",N);mxUtils.extend(S,mxCylinder);S.prototype.size=30;S.prototype.darkOpacity=0;S.prototype.paintVertexShape=function(c,m,v,n,t){var z=Math.max(0,Math.min(n,Math.min(t,parseFloat(mxUtils.getValue(this.style,"size",