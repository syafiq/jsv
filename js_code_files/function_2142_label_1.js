Math.max(0,Math.min(1,mxUtils.getValue(this.state.style,"arrowWidth",ca.prototype.arrowWidth))),p=Math.max(0,Math.min(c,mxUtils.getValue(this.state.style,"arrowSize",ca.prototype.arrowSize)));return new mxPoint(q.x+(1-p)*q.width,q.y+(1-l)*q.height/2)},function(q,l){this.state.style.arrowWidth=Math.max(0,Math.min(1,Math.abs(q.y+q.height/2-l.y)/q.height*2));this.state.style.arrowSize=Math.max(0,Math.min(c,(q.x+q.width-l.x)/q.width))})]}},Xa=function(c){return function(k){return[Ra(k,["size"],function(q){var l=
Math.max(0,Math.min(.5*q.height,parseFloat(mxUtils.getValue(this.state.style,"size",c))));return new mxPoint(q.x,q.y+l)},function(q,l){this.state.style.size=Math.max(0,l.y-q.y)},!0)]}},sb=function(c,k,q){return function(l){var p=[Ra(l,["size"],function(u){var w=Math.max(0,Math.min(u.width,Math.min(u.height,parseFloat(mxUtils.getValue(this.state.style,"size",k)))))*c;return new mxPoint(u.x+w,u.y+w)},function(u,w){this.state.style.size=Math.round(Math.max(0,Math.min(Math.min(u.width,w.x-u.x),Math.min(u.height,