ua=U.fillWeight;0>ua&&(ua=U.strokeWidth/2);q.setStrokeAlpha(q.state.fillAlpha);q.setStrokeColor(U.fill||"");q.setStrokeWidth(ua);q.setDashed(!1);this._drawToContext(S,ba,U);q.setDashed(ra);q.setStrokeWidth(da);q.setStrokeColor(ca);q.setStrokeAlpha(pa)};E._drawToContext=function(S,ba,U){S.begin();for(var ca=0;ca<ba.ops.length;ca++){var da=ba.ops[ca],pa=da.data;switch(da.op){case "move":S.moveTo(pa[0],pa[1]);break;case "bcurveTo":S.curveTo(pa[0],pa[1],pa[2],pa[3],pa[4],pa[5]);break;case "lineTo":S.lineTo(pa[0],
pa[1])}}S.end();"fillPath"===ba.type&&U.filled?S.fill():S.stroke()};return E};(function(){function q(ca,da,pa){this.canvas=ca;this.rc=da;this.shape=pa;this.canvas.setLineJoin("round");this.canvas.setLineCap("round");this.originalBegin=this.canvas.begin;this.canvas.begin=mxUtils.bind(this,q.prototype.begin);this.originalEnd=this.canvas.end;this.canvas.end=mxUtils.bind(this,q.prototype.end);this.originalRect=this.canvas.rect;this.canvas.rect=mxUtils.bind(this,q.prototype.rect);this.originalRoundrect=