Math.round(Math.max(0,Math.min(q.width,2*(q.x+q.width-l.x)))):this.state.style[mxConstants.STYLE_ARCSIZE]=Math.round(Math.min(50,Math.max(0,100*(q.width-l.x+q.x)/Math.min(q.width,q.height))))})},Ra=function(c,k,q,l,p,u,w){var I=new mxHandle(c,null,mxVertexHandler.prototype.secondaryHandleImage);I.execute=function(Z){for(var M=0;M<k.length;M++)this.copyStyle(k[M]);w&&w(Z)};I.getPosition=q;I.setPosition=l;I.ignoreGrid=null!=p?p:!0;if(u){var y=I.positionChanged;I.positionChanged=function(){y.apply(this,