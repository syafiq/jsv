k))}return new mxRectangle(0,Math.min(c.height,k),0,0)}return null};mxUtils.extend(H,mxCylinder);H.prototype.arcSize=.1;H.prototype.paintVertexShape=function(c,k,q,l,p){c.translate(k,q);var u=mxUtils.getValue(this.style,"rounded",!1),w=mxUtils.getValue(this.style,"absoluteArcSize",!1);k=parseFloat(mxUtils.getValue(this.style,"arcSize",this.arcSize));q=mxUtils.getValue(this.style,"umlStateConnection",null);w||(k*=Math.min(l,p));k=Math.min(k,.5*l,.5*p);u||(k=0);u=0;null!=q&&(u=10);c.begin();c.moveTo(u,
k);c.arcTo(k,k,0,0,1,u+k,0);c.lineTo(l-k,0);c.arcTo(k,k,0,0,1,l,k);c.lineTo(l,p-k);c.arcTo(k,k,0,0,1,l-k,p);c.lineTo(u+k,p);c.arcTo(k,k,0,0,1,u,p-k);c.close();c.fillAndStroke();c.setShadow(!1);"collapseState"==mxUtils.getValue(this.style,"umlStateSymbol",null)&&(c.roundrect(l-40,p-20,10,10,3,3),c.stroke(),c.roundrect(l-20,p-20,10,10,3,3),c.stroke(),c.begin(),c.moveTo(l-30,p-15),c.lineTo(l-20,p-15),c.stroke());"connPointRefEntry"==q?(c.ellipse(0,.5*p-10,20,20),c.fillAndStroke()):"connPointRefExit"==
q&&(c.ellipse(0,.5*p-10,20,20),c.fillAndStroke(),c.begin(),c.moveTo(5,.5*p-5),c.lineTo(15,.5*p+5),c.moveTo(15,.5*p-5),c.lineTo(5,.5*p+5),c.stroke())};H.prototype.getLabelMargins=function(c){return mxUtils.getValue(this.style,"boundedLbl",!1)&&null!=mxUtils.getValue(this.style,"umlStateConnection",null)?new mxRectangle(10*this.scale,0,0,0):null};mxCellRenderer.registerShape("umlState",H);mxUtils.extend(C,mxActor);C.prototype.size=30;C.prototype.isRoundable=function(){return!0};C.prototype.redrawPath=