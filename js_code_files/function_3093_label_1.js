mxJsCanvas.prototype.arcTo=function(b,d,f,c,l,m,t){b=mxUtils.arcToCurves(this.lastMoveX,this.lastMoveY,b,d,f,c,l,m,t);if(null!=b)for(d=0;d<b.length;d+=6)this.curveTo(b[d],b[d+1],b[d+2],b[d+3],b[d+4],b[d+5])};mxJsCanvas.prototype.curveTo=function(b,d,f,c,l,m){this.ctx.bezierCurveTo(b,d,f,c,l,m);this.lastMoveX=l;this.lastMoveY=m};mxJsCanvas.prototype.rect=function(b,d,f,c){this.begin();this.moveTo(b,d);this.lineTo(b+f,d);this.lineTo(b+f,d+c);this.lineTo(b,d+c);this.close()};