z),c.lineTo(z,t),c.lineTo(0,t-z),c.close(),c.fill()),c.begin(),c.moveTo(z,t),c.lineTo(z,z),c.lineTo(0,0),c.moveTo(z,z),c.lineTo(n,z),c.end(),c.stroke())};l.prototype.getLabelMargins=function(c){return mxUtils.getValue(this.style,"boundedLbl",!1)?(c=parseFloat(mxUtils.getValue(this.style,"size",this.size))*this.scale,new mxRectangle(c,c,0,0)):null};mxCellRenderer.registerShape("cube",l);var Ya=Math.tan(mxUtils.toRadians(30)),jb=(.5-Ya)/2;mxCellRenderer.registerShape("isoRectangle",q);mxUtils.extend(B,