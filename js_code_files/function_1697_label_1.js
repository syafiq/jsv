m))}return new mxRectangle(0,Math.min(c.height,m),0,0)}return null};mxUtils.extend(v,mxCylinder);v.prototype.arcSize=.1;v.prototype.paintVertexShape=function(c,m,u,n,t){c.translate(m,u);var z=mxUtils.getValue(this.style,"rounded",!1),B=mxUtils.getValue(this.style,"absoluteArcSize",!1);m=parseFloat(mxUtils.getValue(this.style,"arcSize",this.arcSize));u=mxUtils.getValue(this.style,"umlStateConnection",null);B||(m*=Math.min(n,t));m=Math.min(m,.5*n,.5*t);z||(m=0);z=0;null!=u&&(z=10);c.begin();c.moveTo(z,
m);c.arcTo(m,m,0,0,1,z+m,0);c.lineTo(n-m,0);c.arcTo(m,m,0,0,1,n,m);c.lineTo(n,t-m);c.arcTo(m,m,0,0,1,n-m,t);c.lineTo(z+m,t);c.arcTo(m,m,0,0,1,z,t-m);c.close();c.fillAndStroke();c.setShadow(!1);"collapseState"==mxUtils.getValue(this.style,"umlStateSymbol",null)&&(c.roundrect(n-40,t-20,10,10,3,3),c.stroke(),c.roundrect(n-20,t-20,10,10,3,3),c.stroke(),c.begin(),c.moveTo(n-30,t-15),c.lineTo(n-20,t-15),c.stroke());"connPointRefEntry"==u?(c.ellipse(0,.5*t-10,20,20),c.fillAndStroke()):"connPointRefExit"==
u&&(c.ellipse(0,.5*t-10,20,20),c.fillAndStroke(),c.begin(),c.moveTo(5,.5*t-5),c.lineTo(15,.5*t+5),c.moveTo(15,.5*t-5),c.lineTo(5,.5*t+5),c.stroke())};v.prototype.getLabelMargins=function(c){return mxUtils.getValue(this.style,"boundedLbl",!1)&&null!=mxUtils.getValue(this.style,"umlStateConnection",null)?new mxRectangle(10*this.scale,0,0,0):null};mxCellRenderer.registerShape("umlState",v);mxUtils.extend(x,mxActor);x.prototype.size=30;x.prototype.isRoundable=function(){return!0};x.prototype.redrawPath=