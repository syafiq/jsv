R.filled||delete this.nextShape.options.fill;this.passThrough=!0;this.rc.draw(this.nextShape);this.passThrough=!1}};p.prototype.stroke=function(){this.passThrough?this.originalStroke.apply(this.canvas,arguments):this.drawPath(this.getStyle(!0,!1))};p.prototype.fill=function(){this.passThrough?this.originalFill.apply(this.canvas,arguments):this.drawPath(this.getStyle(!1,!0))};p.prototype.fillAndStroke=function(){this.passThrough?this.originalFillAndStroke.apply(this.canvas,arguments):this.drawPath(this.getStyle(!0,
!0))};p.prototype.destroy=function(){this.canvas.lineTo=this.originalLineTo;this.canvas.moveTo=this.originalMoveTo;this.canvas.close=this.originalClose;this.canvas.quadTo=this.originalQuadTo;this.canvas.curveTo=this.originalCurveTo;this.canvas.arcTo=this.originalArcTo;this.canvas.close=this.originalClose;this.canvas.fill=this.originalFill;this.canvas.stroke=this.originalStroke;this.canvas.fillAndStroke=this.originalFillAndStroke;this.canvas.begin=this.originalBegin;this.canvas.end=this.originalEnd;