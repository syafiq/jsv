v&&(c.ellipse(0,.5*t-10,20,20),c.fillAndStroke(),c.begin(),c.moveTo(5,.5*t-5),c.lineTo(15,.5*t+5),c.moveTo(15,.5*t-5),c.lineTo(5,.5*t+5),c.stroke())};u.prototype.getLabelMargins=function(c){return mxUtils.getValue(this.style,"boundedLbl",!1)&&null!=mxUtils.getValue(this.style,"umlStateConnection",null)?new mxRectangle(10*this.scale,0,0,0):null};mxCellRenderer.registerShape("umlState",u);mxUtils.extend(x,mxActor);x.prototype.size=30;x.prototype.isRoundable=function(){return!0};x.prototype.redrawPath=