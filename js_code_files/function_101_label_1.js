mxRectangleShape.prototype.constraints;Y.prototype.constraints=mxEllipse.prototype.constraints;ha.prototype.constraints=mxEllipse.prototype.constraints;ea.prototype.constraints=mxEllipse.prototype.constraints;La.prototype.constraints=mxEllipse.prototype.constraints;Ya.prototype.constraints=mxRectangleShape.prototype.constraints;Ma.prototype.constraints=mxRectangleShape.prototype.constraints;Fa.prototype.getConstraints=function(c,k,q){c=[];var l=Math.min(k,q/2),p=Math.min(k-l,Math.max(0,parseFloat(mxUtils.getValue(this.style,
"size",this.size)))*k);c.push(new mxConnectionConstraint(new mxPoint(0,.5),!1,null));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,p,0));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.5*(p+k-l),0));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,k-l,0));c.push(new mxConnectionConstraint(new mxPoint(1,.5),!1,null));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,k-l,q));c.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.5*(p+k-l),q));c.push(new mxConnectionConstraint(new mxPoint(0,
0),!1,null,p,q));return c};Ba.prototype.getConstraints=function(c,k,q){k=parseFloat(mxUtils.getValue(c,"jettyWidth",Ba.prototype.jettyWidth))/2;c=parseFloat(mxUtils.getValue(c,"jettyHeight",Ba.prototype.jettyHeight));var l=[new mxConnectionConstraint(new mxPoint(0,0),!1,null,k),new mxConnectionConstraint(new mxPoint(.25,0),!0),new mxConnectionConstraint(new mxPoint(.5,0),!0),new mxConnectionConstraint(new mxPoint(.75,0),!0),new mxConnectionConstraint(new mxPoint(1,0),!0),new mxConnectionConstraint(new mxPoint(1,