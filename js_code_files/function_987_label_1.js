T.filled||delete this.nextShape.options.fill;this.passThrough=!0;this.rc.draw(this.nextShape);this.passThrough=!1}};m.prototype.stroke=function(){this.passThrough?this.originalStroke.apply(this.canvas,arguments):this.drawPath(this.getStyle(!0,!1))};m.prototype.fill=function(){this.passThrough?this.originalFill.apply(this.canvas,arguments):this.drawPath(this.getStyle(!1,!0))};m.prototype.fillAndStroke=function(){this.passThrough?this.originalFillAndStroke.apply(this.canvas,arguments):this.drawPath(this.getStyle(!0,