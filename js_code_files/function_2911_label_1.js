15;d.prototype.paintVertexShape=function(c,m,u,n,t){var z=Math.max(0,Math.min(.5*t,parseFloat(mxUtils.getValue(this.style,"size",this.size)))),B=mxUtils.getValue(this.style,"lid",!0);c.translate(m,u);0==z?(c.rect(0,0,n,t),c.fillAndStroke()):(c.begin(),B?(c.moveTo(0,z),c.arcTo(.5*n,z,0,0,1,.5*n,0),c.arcTo(.5*n,z,0,0,1,n,z)):(c.moveTo(0,0),c.arcTo(.5*n,z,0,0,0,.5*n,z),c.arcTo(.5*n,z,0,0,0,n,0)),c.lineTo(n,t-z),c.arcTo(.5*n,z,0,0,1,.5*n,t),c.arcTo(.5*n,z,0,0,1,0,t-z),c.close(),c.fillAndStroke(),c.setShadow(!1),
B&&(c.begin(),c.moveTo(n,z),c.arcTo(.5*n,z,0,0,1,.5*n,2*z),c.arcTo(.5*n,z,0,0,1,0,z),c.stroke()))};mxCellRenderer.registerShape("cylinder3",d);mxUtils.extend(f,mxActor);f.prototype.redrawPath=function(c,m,u,n,t){c.moveTo(0,0);c.quadTo(n/2,.5*t,n,0);c.quadTo(.5*n,t/2,n,t);c.quadTo(n/2,.5*t,0,t);c.quadTo(.5*n,t/2,0,0);c.end()};mxCellRenderer.registerShape("switch",f);mxUtils.extend(g,mxCylinder);g.prototype.tabWidth=60;g.prototype.tabHeight=20;g.prototype.tabPosition="right";g.prototype.arcSize=.1;