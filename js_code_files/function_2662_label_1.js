n.call(this,Wa,fa/Wa,la/Wa,va,B);return new mxPoint(va.x/I-z.x,va.y/I-z.y)},function(z,B,fa){var I=c.absolutePoints,va=I.length-1;z=c.view.translate;var la=c.view.scale,Wa=u?I[0]:I[va];I=u?I[1]:I[va-1];va=I.x-Wa.x;var jb=I.y-Wa.y,bb=Math.sqrt(va*va+jb*jb);B.x=(B.x+z.x)*la;B.y=(B.y+z.y)*la;t.call(this,bb,va/bb,jb/bb,Wa,I,B,fa)})},qb=function(c,m){return function(u){return[hb(u,["startWidth"],!0,function(n,t,z,B,fa){fa=mxUtils.getNumber(u.style,"startWidth",c)*u.view.scale+m;return new mxPoint(B.x+
t*n/4+z*fa/2,B.y+z*n/4-t*fa/2)},function(n,t,z,B,fa,I){n=Math.sqrt(mxUtils.ptSegDistSq(B.x,B.y,fa.x,fa.y,I.x,I.y));u.style.startWidth=Math.round(2*n)/u.view.scale-m})]}},kb=function(c){return function(m){return[gb(m,["arrowWidth","arrowSize"],function(u){var n=Math.max(0,Math.min(1,mxUtils.getValue(this.state.style,"arrowWidth",Ya.prototype.arrowWidth))),t=Math.max(0,Math.min(c,mxUtils.getValue(this.state.style,"arrowSize",Ya.prototype.arrowSize)));return new mxPoint(u.x+(1-t)*u.width,u.y+(1-n)*u.height/