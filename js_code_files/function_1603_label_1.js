mxImageShape.prototype.constraints=mxRectangleShape.prototype.constraints;mxSwimlane.prototype.constraints=mxRectangleShape.prototype.constraints;V.prototype.constraints=mxRectangleShape.prototype.constraints;mxLabel.prototype.constraints=mxRectangleShape.prototype.constraints;R.prototype.getConstraints=function(c,m,u){c=[];var n=Math.max(0,Math.min(m,Math.min(u,parseFloat(mxUtils.getValue(this.style,"size",this.size)))));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1));c.push(new mxConnectionConstraint(new mxPoint(0,
0),!1,null,.5*(m-n),0));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,m-n,0));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,m-.5*n,.5*n));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,m,n));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,m,.5*(u+n)));c.push(new mxConnectionConstraint(new mxPoint(1,1),!1));c.push(new mxConnectionConstraint(new mxPoint(.5,1),!1));c.push(new mxConnectionConstraint(new mxPoint(0,1),!1));c.push(new mxConnectionConstraint(new mxPoint(0,
.5),!1));m>=2*n&&c.push(new mxConnectionConstraint(new mxPoint(.5,0),!1));return c};x.prototype.getConstraints=function(c,m,u){c=[];var n=Math.max(0,Math.min(m,Math.min(u,parseFloat(mxUtils.getValue(this.style,"size",this.size)))));c.push(new mxConnectionConstraint(new mxPoint(1,0),!1));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.5*(m+n),0));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,n,0));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.5*n,.5*n));c.push(new mxConnectionConstraint(new mxPoint(0,