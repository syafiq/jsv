function(){return mxClient.IS_CHROMEAPP||this.useCanvasForExport};Editor.prototype.getMaxCanvasScale=function(p,B,L){var Q=mxClient.IS_FF?8192:16384;return Math.min(L,Math.min(Q/p,Q/B))};Editor.prototype.exportToCanvas=function(p,B,L,Q,S,R,T,W,X,Y,Z,ea,ca,aa,ba,fa,za,ra){try{R=null!=R?R:!0;T=null!=T?T:!0;ea=null!=ea?ea:this.graph;ca=null!=ca?ca:0;var Aa=X?null:ea.background;Aa==mxConstants.NONE&&(Aa=null);null==Aa&&(Aa=Q);null==Aa&&0==X&&(Aa=fa?this.graph.defaultPageBackgroundColor:"#ffffff");this.convertImages(ea.getSvg(null,