0>ba&&(ba=O.strokeWidth/2);q.setStrokeAlpha(q.state.fillAlpha);q.setStrokeColor(O.fill||"");q.setStrokeWidth(ba);q.setDashed(!1);this._drawToContext(L,U,O);q.setDashed(Z);q.setStrokeWidth(R);q.setStrokeColor(S);q.setStrokeAlpha(X)};D._drawToContext=function(L,U,O){L.begin();for(var S=0;S<U.ops.length;S++){var R=U.ops[S],X=R.data;switch(R.op){case "move":L.moveTo(X[0],X[1]);break;case "bcurveTo":L.curveTo(X[0],X[1],X[2],X[3],X[4],X[5]);break;case "lineTo":L.lineTo(X[0],X[1])}}L.end();"fillPath"===
U.type&&O.filled?L.fill():L.stroke()};return D};(function(){function q(S,R,X){this.canvas=S;this.rc=R;this.shape=X;this.canvas.setLineJoin("round");this.canvas.setLineCap("round");this.originalBegin=this.canvas.begin;this.canvas.begin=mxUtils.bind(this,q.prototype.begin);this.originalEnd=this.canvas.end;this.canvas.end=mxUtils.bind(this,q.prototype.end);this.originalRect=this.canvas.rect;this.canvas.rect=mxUtils.bind(this,q.prototype.rect);this.originalRoundrect=this.canvas.roundrect;this.canvas.roundrect=