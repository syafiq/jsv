function(){return function(c){var m=[];mxUtils.getValue(c.style,mxConstants.STYLE_ROUNDED,!1)&&m.push(tb(c));return m}},tb=function(c,m){return eb(c,[mxConstants.STYLE_ARCSIZE],function(v){var n=null!=m?m:v.height/8;if("1"==mxUtils.getValue(c.style,mxConstants.STYLE_ABSOLUTE_ARCSIZE,0)){var t=mxUtils.getValue(c.style,mxConstants.STYLE_ARCSIZE,mxConstants.LINE_ARCSIZE)/2;return new mxPoint(v.x+v.width-Math.min(v.width/2,t),v.y+n)}t=Math.max(0,parseFloat(mxUtils.getValue(c.style,mxConstants.STYLE_ARCSIZE,
100*mxConstants.RECTANGLE_ROUNDING_FACTOR)))/100;return new mxPoint(v.x+v.width-Math.min(Math.max(v.width/2,v.height/2),Math.min(v.width,v.height)*t),v.y+n)},function(v,n,t){"1"==mxUtils.getValue(c.style,mxConstants.STYLE_ABSOLUTE_ARCSIZE,0)?this.state.style[mxConstants.STYLE_ARCSIZE]=Math.round(Math.max(0,Math.min(v.width,2*(v.x+v.width-n.x)))):this.state.style[mxConstants.STYLE_ARCSIZE]=Math.round(Math.min(50,Math.max(0,100*(v.width-n.x+v.x)/Math.min(v.width,v.height))))})},eb=function(c,m,v,n,