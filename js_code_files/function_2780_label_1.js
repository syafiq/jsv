ta.prototype.constraints=mxEllipse.prototype.constraints;Sa.prototype.constraints=mxEllipse.prototype.constraints;La.prototype.constraints=mxRectangleShape.prototype.constraints;Qa.prototype.constraints=mxRectangleShape.prototype.constraints;Ja.prototype.getConstraints=function(c,m,u){c=[];var n=Math.min(m,u/2),t=Math.min(m-n,Math.max(0,parseFloat(mxUtils.getValue(this.style,"size",this.size)))*m);c.push(new mxConnectionConstraint(new mxPoint(0,.5),!1,null));c.push(new mxConnectionConstraint(new mxPoint(0,
0),!1,null,t,0));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.5*(t+m-n),0));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,m-n,0));c.push(new mxConnectionConstraint(new mxPoint(1,.5),!1,null));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,m-n,u));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.5*(t+m-n),u));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t,u));return c};ua.prototype.getConstraints=function(c,m,u){m=parseFloat(mxUtils.getValue(c,