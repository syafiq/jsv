-m);z||(c.moveTo(0,m),c.curveTo(0,-m/3,n,-m/3,n,m),c.lineTo(n,t-m),c.curveTo(n,t+m/3,0,t+m/3,0,t-m),c.close())};M.prototype.getLabelMargins=function(c){return new mxRectangle(0,2.5*Math.min(c.height/2,Math.round(c.height/8)+this.strokewidth-1),0,0)};mxCellRenderer.registerShape("datastore",M);mxUtils.extend(R,mxCylinder);R.prototype.size=30;R.prototype.darkOpacity=0;R.prototype.paintVertexShape=function(c,m,u,n,t){var z=Math.max(0,Math.min(n,Math.min(t,parseFloat(mxUtils.getValue(this.style,"size",
this.size))))),B=Math.max(-1,Math.min(1,parseFloat(mxUtils.getValue(this.style,"darkOpacity",this.darkOpacity))));c.translate(m,u);c.begin();c.moveTo(0,0);c.lineTo(n-z,0);c.lineTo(n,z);c.lineTo(n,t);c.lineTo(0,t);c.lineTo(0,0);c.close();c.end();c.fillAndStroke();this.outline||(c.setShadow(!1),0!=B&&(c.setFillAlpha(Math.abs(B)),c.setFillColor(0>B?"#FFFFFF":"#000000"),c.begin(),c.moveTo(n-z,0),c.lineTo(n-z,z),c.lineTo(n,z),c.close(),c.fill()),c.begin(),c.moveTo(n-z,0),c.lineTo(n-z,z),c.lineTo(n,z),
c.end(),c.stroke())};mxCellRenderer.registerShape("note",R);mxUtils.extend(G,R);mxCellRenderer.registerShape("note2",G);G.prototype.getLabelMargins=function(c){if(mxUtils.getValue(this.style,"boundedLbl",!1)){var m=mxUtils.getValue(this.style,"size",15);return new mxRectangle(0,Math.min(c.height*this.scale,m*this.scale),0,0)}return null};mxUtils.extend(L,mxShape);L.prototype.isoAngle=15;L.prototype.paintVertexShape=function(c,m,u,n,t){var z=Math.max(.01,Math.min(94,parseFloat(mxUtils.getValue(this.style,