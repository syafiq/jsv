100*mxConstants.RECTANGLE_ROUNDING_FACTOR)))/100;return new mxPoint(v.x+v.width-Math.min(Math.max(v.width/2,v.height/2),Math.min(v.width,v.height)*t),v.y+n)},function(v,n,t){"1"==mxUtils.getValue(c.style,mxConstants.STYLE_ABSOLUTE_ARCSIZE,0)?this.state.style[mxConstants.STYLE_ARCSIZE]=Math.round(Math.max(0,Math.min(v.width,2*(v.x+v.width-n.x)))):this.state.style[mxConstants.STYLE_ARCSIZE]=Math.round(Math.min(50,Math.max(0,100*(v.width-n.x+v.x)/Math.min(v.width,v.height))))})},eb=function(c,m,v,n,
t,z,C){var fa=new mxHandle(c,null,mxVertexHandler.prototype.secondaryHandleImage);fa.execute=function(wa){for(var ka=0;ka<m.length;ka++)this.copyStyle(m[ka]);C&&C(wa)};fa.getPosition=v;fa.setPosition=n;fa.ignoreGrid=null!=t?t:!0;if(z){var I=fa.positionChanged;fa.positionChanged=function(){I.apply(this,arguments);c.view.invalidate(this.state.cell);c.view.validate()}}return fa},Ab={link:function(c){return[gb(c,!0,10),gb(c,!1,10)]},flexArrow:function(c){var m=c.view.graph.gridSize/c.view.scale,v=[];