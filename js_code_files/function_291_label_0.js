!0))};l.prototype.destroy=function(){this.canvas.lineTo=this.originalLineTo;this.canvas.moveTo=this.originalMoveTo;this.canvas.close=this.originalClose;this.canvas.quadTo=this.originalQuadTo;this.canvas.curveTo=this.originalCurveTo;this.canvas.arcTo=this.originalArcTo;this.canvas.close=this.originalClose;this.canvas.fill=this.originalFill;this.canvas.stroke=this.originalStroke;this.canvas.fillAndStroke=this.originalFillAndStroke;this.canvas.begin=this.originalBegin;this.canvas.end=this.originalEnd;
this.canvas.rect=this.originalRect;this.canvas.ellipse=this.originalEllipse;this.canvas.roundrect=this.originalRoundrect};mxShape.prototype.createRoughCanvas=function(Q){return new l(Q,Editor.createRoughCanvas(Q),this)};var x=mxShape.prototype.createHandJiggle;mxShape.prototype.createHandJiggle=function(Q){return this.outline||null==this.style||"0"==mxUtils.getValue(this.style,"sketch","0")?x.apply(this,arguments):"comic"==mxUtils.getValue(this.style,"sketchStyle","rough")?this.createComicCanvas(Q):