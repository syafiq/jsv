w&&(c.begin(),c.moveTo(l,v),c.arcTo(.5*l,v,0,0,1,.5*l,2*v),c.arcTo(.5*l,v,0,0,1,0,v),c.stroke()))};mxCellRenderer.registerShape("cylinder3",B);mxUtils.extend(C,mxActor);C.prototype.redrawPath=function(c,k,q,l,p){c.moveTo(0,0);c.quadTo(l/2,.5*p,l,0);c.quadTo(.5*l,p/2,l,p);c.quadTo(l/2,.5*p,0,p);c.quadTo(.5*l,p/2,0,0);c.end()};mxCellRenderer.registerShape("switch",C);mxUtils.extend(F,mxCylinder);F.prototype.tabWidth=60;F.prototype.tabHeight=20;F.prototype.tabPosition="right";F.prototype.arcSize=.1;