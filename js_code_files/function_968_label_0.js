Editor.createRoughCanvas=function(p){var B=rough.canvas({getContext:function(){return p}});B.draw=function(L){var Q=L.sets||[];L=L.options||this.getDefaultOptions();for(var S=0;S<Q.length;S++){var R=Q[S];switch(R.type){case "path":null!=L.stroke&&this._drawToContext(p,R,L);break;case "fillPath":this._drawToContext(p,R,L);break;case "fillSketch":this.fillSketch(p,R,L)}}};B.fillSketch=function(L,Q,S){var R=p.state.strokeColor,T=p.state.strokeWidth,W=p.state.strokeAlpha,X=p.state.dashed,Y=S.fillWeight;