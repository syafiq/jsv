v.push(n[m]);n=v}return n};var a=mxGraph.prototype.scrollRectToVisible;Graph.prototype.scrollRectToVisible=function(h){if(this.useCssTransforms){var n=this.currentScale,v=this.currentTranslate;h=new mxRectangle((h.x+2*v.x)*n-v.x,(h.y+2*v.y)*n-v.y,h.width*n,h.height*n)}a.apply(this,arguments)};mxCellHighlight.prototype.getStrokeWidth=function(h){h=this.strokeWidth;this.graph.useCssTransforms&&(h/=this.graph.currentScale);return h};mxGraphView.prototype.getGraphBounds=function(){var h=this.graphBounds;