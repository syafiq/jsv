S.filled?L.fill():L.stroke()};return B};(function(){function p(R,T,W){this.canvas=R;this.rc=T;this.shape=W;this.canvas.setLineJoin("round");this.canvas.setLineCap("round");this.originalBegin=this.canvas.begin;this.canvas.begin=mxUtils.bind(this,p.prototype.begin);this.originalEnd=this.canvas.end;this.canvas.end=mxUtils.bind(this,p.prototype.end);this.originalRect=this.canvas.rect;this.canvas.rect=mxUtils.bind(this,p.prototype.rect);this.originalRoundrect=this.canvas.roundrect;this.canvas.roundrect=
mxUtils.bind(this,p.prototype.roundrect);this.originalEllipse=this.canvas.ellipse;this.canvas.ellipse=mxUtils.bind(this,p.prototype.ellipse);this.originalLineTo=this.canvas.lineTo;this.canvas.lineTo=mxUtils.bind(this,p.prototype.lineTo);this.originalMoveTo=this.canvas.moveTo;this.canvas.moveTo=mxUtils.bind(this,p.prototype.moveTo);this.originalQuadTo=this.canvas.quadTo;this.canvas.quadTo=mxUtils.bind(this,p.prototype.quadTo);this.originalCurveTo=this.canvas.curveTo;this.canvas.curveTo=mxUtils.bind(this,
p.prototype.curveTo);this.originalArcTo=this.canvas.arcTo;this.canvas.arcTo=mxUtils.bind(this,p.prototype.arcTo);this.originalClose=this.canvas.close;this.canvas.close=mxUtils.bind(this,p.prototype.close);this.originalFill=this.canvas.fill;this.canvas.fill=mxUtils.bind(this,p.prototype.fill);this.originalStroke=this.canvas.stroke;this.canvas.stroke=mxUtils.bind(this,p.prototype.stroke);this.originalFillAndStroke=this.canvas.fillAndStroke;this.canvas.fillAndStroke=mxUtils.bind(this,p.prototype.fillAndStroke);
this.path=[];this.passThrough=!1}p.prototype.moveOp="M";p.prototype.lineOp="L";p.prototype.quadOp="Q";p.prototype.curveOp="C";p.prototype.closeOp="Z";p.prototype.getStyle=function(R,T){var W=1;if(null!=this.shape.state){var X=this.shape.state.cell.id;if(null!=X)for(var Y=0;Y<X.length;Y++)W=(W<<5)-W+X.charCodeAt(Y)<<0}W={strokeWidth:this.canvas.state.strokeWidth,seed:W,preserveVertices:!0};X=this.rc.getDefaultOptions();W.stroke=R?this.canvas.state.strokeColor===mxConstants.NONE?"transparent":this.canvas.state.strokeColor: