null!=N||0!=this.graphConfig.resize||""==b.style.height?(N=null!=N?N:new mxPoint,this.graph.view.setTranslate(Math.floor(this.graph.border-e.x/this.graph.view.scale)+N.x,Math.floor(this.graph.border-e.y/this.graph.view.scale)+N.y),B=b.offsetWidth):this.graph.center((!this.widthIsEmpty||e.width<this.minWidth)&&1!=this.graphConfig.resize);b.style.minWidth=S});8==document.documentMode?window.setTimeout(D,0):D();this.positionGraph=function(N){e=this.graph.getGraphBounds();B=null;D(N)}};