la.fillStyle=da;return la};p.prototype.begin=function(){this.passThrough?this.originalBegin.apply(this.canvas,arguments):this.path=[]};p.prototype.end=function(){this.passThrough&&this.originalEnd.apply(this.canvas,arguments)};p.prototype.addOp=function(){if(null!=this.path&&(this.path.push(arguments[0]),2<arguments.length))for(var X=2;X<arguments.length;X+=2)this.lastX=arguments[X-1],this.lastY=arguments[X],this.path.push(this.canvas.format(this.lastX)),this.path.push(this.canvas.format(this.lastY))};