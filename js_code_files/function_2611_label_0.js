null!=q&&"0"!=mxUtils.getValue(this.state.style,"fixedSize","0")?w.x-v.x:Math.max(0,Math.min(c,(w.x-v.x)/v.width*.75));this.state.style.size=v},!1,!0)];mxUtils.getValue(l.style,mxConstants.STYLE_ROUNDED,!1)&&p.push(fb(l));return p}},nb=function(){return function(c){var k=[];mxUtils.getValue(c.style,mxConstants.STYLE_ROUNDED,!1)&&k.push(fb(c));return k}},fb=function(c,k){return Ra(c,[mxConstants.STYLE_ARCSIZE],function(q){var l=null!=k?k:q.height/8;if("1"==mxUtils.getValue(c.style,mxConstants.STYLE_ABSOLUTE_ARCSIZE,