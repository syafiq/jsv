urlParams.edge;Graph.prototype.hiddenTags=null;Graph.prototype.defaultMathEnabled=!1;var n=Graph.prototype.init;Graph.prototype.init=function(){function q(O){D=O}n.apply(this,arguments);this.hiddenTags=[];window.mxFreehand&&(this.freehand=new mxFreehand(this));var D=null;mxEvent.addListener(this.container,"mouseenter",q);mxEvent.addListener(this.container,"mousemove",q);mxEvent.addListener(this.container,"mouseleave",function(O){D=null});this.isMouseInsertPoint=function(){return null!=D};var L=this.getInsertPoint;