4):new mxPoint(q.x+q.width*p,q.y+q.height/4)},function(q,l){q="0"!=mxUtils.getValue(this.state.style,"fixedSize","0")?Math.max(0,Math.min(.5*q.width,l.x-q.x)):Math.max(0,Math.min(.5,(l.x-q.x)/q.width));this.state.style.size=q},!1)];mxUtils.getValue(c.style,mxConstants.STYLE_ROUNDED,!1)&&k.push(fb(c));return k},cross:function(c){return[Ra(c,["size"],function(k){var q=Math.min(k.width,k.height);q=Math.max(0,Math.min(1,mxUtils.getValue(this.state.style,"size",Ha.prototype.size)))*q/2;return new mxPoint(k.getCenterX()-
q,k.getCenterY()-q)},function(k,q){var l=Math.min(k.width,k.height);this.state.style.size=Math.max(0,Math.min(1,Math.min(Math.max(0,k.getCenterY()-q.y)/l*2,Math.max(0,k.getCenterX()-q.x)/l*2)))})]},note:function(c){return[Ra(c,["size"],function(k){var q=Math.max(0,Math.min(k.width,Math.min(k.height,parseFloat(mxUtils.getValue(this.state.style,"size",v.prototype.size)))));return new mxPoint(k.x+k.width-q,k.y+q)},function(k,q){this.state.style.size=Math.round(Math.max(0,Math.min(Math.min(k.width,k.x+