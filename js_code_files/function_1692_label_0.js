this.canvas.rect=this.originalRect;this.canvas.ellipse=this.originalEllipse;this.canvas.roundrect=this.originalRoundrect};mxShape.prototype.createRoughCanvas=function(R){return new p(R,Editor.createRoughCanvas(R),this)};var B=mxShape.prototype.createHandJiggle;mxShape.prototype.createHandJiggle=function(R){return this.outline||null==this.style||"0"==mxUtils.getValue(this.style,"sketch","0")?B.apply(this,arguments):"comic"==mxUtils.getValue(this.style,"sketchStyle","rough")?this.createComicCanvas(R):